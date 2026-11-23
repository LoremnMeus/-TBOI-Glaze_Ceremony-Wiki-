/**
 * Build-time "Latest Updates" for the Wiki home page.
 *
 * Detects player-visible Markdown body changes (after ## 机制说明 / ## Mechanics)
 * via recent Git history — not file mtime, frontmatter churn, or search-index export.
 *
 * Soft quota: prefer ~2 new + ~2 updated in one mixed list (flexible if skewed).
 */
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const WIKI_ROOT = join(__dirname, '..')
const REPO_ROOT = join(WIKI_ROOT, '..')
const GENERATED = join(WIKI_ROOT, 'docs', 'generated')
const OUT_JSON = join(GENERATED, 'home-updates.json')
const LIMIT = 4
const SOFT_NEW = 2
const SOFT_UPDATED = 2
const COMMIT_SCAN = 400
const CANDIDATE_BUFFER = 8
const MIN_COMMITS_BEFORE_STOP = 40
const SHOW_CACHE_MAX = 8000
const MINOR_ABS = 100
const MINOR_RATIO = 0.1

const STUB_BODIES = new Set(['待撰写。', '待撰写', 'To be written.', 'To be written'])

const FOLDERS = {
  collectible: 'items',
  trinket: 'trinkets',
  card: 'cards',
  character: 'characters',
  challenge: 'challenges',
  pickup: 'pickups',
  slot: 'slots',
}

const PATH_RE = /^wiki\/docs\/(?:en\/)?(items|trinkets|cards|characters|challenges|pickups|slots)\/([a-z0-9-]+)\.md$/i
const FOLDER_TO_KIND = Object.fromEntries(
  Object.entries(FOLDERS).map(([kind, folder]) => [folder, kind]),
)

const WIKI_PATHSPECS = [
  'wiki/docs/items',
  'wiki/docs/trinkets',
  'wiki/docs/cards',
  'wiki/docs/characters',
  'wiki/docs/challenges',
  'wiki/docs/pickups',
  'wiki/docs/slots',
  'wiki/docs/en/items',
  'wiki/docs/en/trinkets',
  'wiki/docs/en/cards',
  'wiki/docs/en/characters',
  'wiki/docs/en/challenges',
  'wiki/docs/en/pickups',
  'wiki/docs/en/slots',
]

const showCache = new Map()

function readJson(name) {
  return JSON.parse(readFileSync(join(GENERATED, `${name}.json`), 'utf8'))
}

function git(args, opts = {}) {
  return execFileSync('git', args, {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
    ...opts,
  })
}

function extractBody(markdown) {
  if (!markdown) return ''
  const match = markdown.match(/^## (?:机制说明|Mechanics)\s*\r?\n([\s\S]*)$/m)
  let body = match ? match[1] : markdown
  body = body.replace(/<!--[\s\S]*?-->/g, '')
  body = body.replace(/\r\n/g, '\n').trim()
  return body
}

function isMeaningfulBody(markdown) {
  const body = extractBody(markdown)
  return Boolean(body) && !STUB_BODIES.has(body)
}

function bodyHash(markdown) {
  return createHash('sha1').update(extractBody(markdown)).digest('hex')
}

function todayISO() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function toPosix(p) {
  return String(p).replace(/\\/g, '/')
}

function parsePagePath(repoRel) {
  const m = PATH_RE.exec(toPosix(repoRel))
  if (!m) return null
  const kind = FOLDER_TO_KIND[m[1]]
  if (!kind) return null
  return { kind, slug: m[2], lang: toPosix(repoRel).includes('/en/') ? 'en' : 'zh' }
}

function gitShow(spec) {
  if (showCache.has(spec)) return showCache.get(spec)
  let text = null
  try {
    text = git(['show', spec], { stdio: ['ignore', 'pipe', 'ignore'] })
  } catch {
    text = null
  }
  if (showCache.size >= SHOW_CACHE_MAX) showCache.clear()
  showCache.set(spec, text)
  return text
}

function isMinorBodyChange(beforeText, afterText) {
  const before = extractBody(beforeText)
  const after = extractBody(afterText)
  if (!before || !after) return false
  const delta = Math.abs(before.length - after.length)
  const basis = Math.max(before.length, after.length, 1)
  return delta < MINOR_ABS && delta / basis < MINOR_RATIO
}

function inspectBodyChange(hash, repoRel) {
  const current = gitShow(`${hash}:${repoRel}`)
  if (current == null) return null
  const parent = gitShow(`${hash}^:${repoRel}`)
  const curHash = bodyHash(current)
  const parentHash = parent == null ? null : bodyHash(parent)
  if (parentHash != null && parentHash === curHash) return null
  const curMeaningful = isMeaningfulBody(current)
  const parentMeaningful = parent != null && isMeaningfulBody(parent)
  return {
    parent,
    current,
    becameMeaningful: curMeaningful && !parentMeaningful,
    contentUpdate: curMeaningful && parentMeaningful,
    minor: curMeaningful && parentMeaningful && isMinorBodyChange(parent, current),
  }
}

function listRecentCommits() {
  const out = git([
    'log',
    `-n${COMMIT_SCAN}`,
    '--format=commit\t%H\t%cs',
    '--name-only',
    '--',
    ...WIKI_PATHSPECS,
  ])
  const commits = []
  let current = null
  for (const raw of out.split('\n')) {
    const line = raw.trimEnd()
    if (!line) continue
    if (line.startsWith('commit\t')) {
      const [, hash, date] = line.split('\t')
      current = { hash, date, files: [] }
      commits.push(current)
      continue
    }
    if (current) current.files.push(toPosix(line.trim()))
  }
  return commits
}

function dirtyWikiPaths() {
  try {
    const out = git(['status', '--porcelain', '-u', '--', ...WIKI_PATHSPECS])
    const paths = []
    for (const line of out.split('\n')) {
      if (!line.trim()) continue
      const rest = line.slice(3)
      const path = rest.includes(' -> ') ? rest.split(' -> ').pop() : rest
      paths.push(toPosix(path.trim()))
    }
    return paths
  } catch {
    return []
  }
}

function ensurePage(pages, key, kind, slug) {
  let row = pages.get(key)
  if (!row) {
    row = {
      kind,
      slug,
      createdAt: null,
      updatedAt: null,
      lastUpdateMinor: false,
      sawCreation: false,
      sawUpdate: false,
    }
    pages.set(key, row)
  }
  return row
}

/**
 * Newest-first apply: first creation/update seen is the most recent of that kind.
 * Later (older) creation overwrites createdAt so it settles on the earliest
 * becameMeaningful still inside the scan window.
 */
function applyChangeNewestFirst(row, date, change) {
  if (change.becameMeaningful) {
    row.createdAt = date
    row.sawCreation = true
    if (!row.sawUpdate) {
      row.updatedAt = date
      row.lastUpdateMinor = false
    }
  } else if (change.contentUpdate) {
    if (!row.sawUpdate) {
      row.updatedAt = date
      row.lastUpdateMinor = Boolean(change.minor)
      row.sawUpdate = true
    }
  }
}

function applyChangeOldestStyle(row, date, change) {
  // Used for dirty (newest) events after the newest-first commit pass.
  if (change.becameMeaningful) {
    row.createdAt = date
    row.sawCreation = true
    row.updatedAt = date
    row.lastUpdateMinor = false
    row.sawUpdate = false
  } else if (change.contentUpdate) {
    row.updatedAt = date
    row.lastUpdateMinor = Boolean(change.minor)
    row.sawUpdate = true
  }
}

function sortByDateDesc(rows, dateKey) {
  return [...rows].sort((a, b) => {
    const byDate = b[dateKey].localeCompare(a[dateKey])
    if (byDate !== 0) return byDate
    return `${a.kind}:${a.slug}`.localeCompare(`${b.kind}:${b.slug}`)
  })
}

function countPools(pages) {
  let news = 0
  let updates = 0
  for (const row of pages.values()) {
    if (row.createdAt) news += 1
    if (row.updatedAt && ((row.createdAt && row.updatedAt !== row.createdAt) || !row.createdAt)) {
      updates += 1
    }
  }
  return { news, updates }
}

function mergeQuota(news, updates, limit = LIMIT) {
  const pickedNew = []
  const pickedUpd = []
  const used = new Set()

  for (const row of news) {
    if (pickedNew.length >= SOFT_NEW) break
    const key = `${row.kind}:${row.slug}`
    if (used.has(key)) continue
    used.add(key)
    pickedNew.push(row)
  }
  for (const row of updates) {
    if (pickedUpd.length >= SOFT_UPDATED) break
    const key = `${row.kind}:${row.slug}`
    if (used.has(key)) continue
    used.add(key)
    pickedUpd.push(row)
  }

  while (pickedNew.length + pickedUpd.length < limit) {
    let added = false
    for (const row of news) {
      const key = `${row.kind}:${row.slug}`
      if (used.has(key)) continue
      used.add(key)
      pickedNew.push(row)
      added = true
      break
    }
    if (pickedNew.length + pickedUpd.length >= limit) break
    for (const row of updates) {
      const key = `${row.kind}:${row.slug}`
      if (used.has(key)) continue
      used.add(key)
      pickedUpd.push(row)
      added = true
      break
    }
    if (!added) break
  }

  const out = []
  let i = 0
  let j = 0
  while (out.length < limit && (i < pickedNew.length || j < pickedUpd.length)) {
    if (i < pickedNew.length) out.push(pickedNew[i++])
    if (out.length >= limit) break
    if (j < pickedUpd.length) out.push(pickedUpd[j++])
  }
  return out
}

function pageDone(row) {
  return row.sawCreation && row.sawUpdate
}

function main() {
  const catalog = readJson('entries')
  const pageStatus = readJson('page-status')
  const releaseScope = readJson('release-scope')
  const excluded = new Set(releaseScope.excludeFromPublicBuild || [])
  const catalogKeys = new Set((catalog.entries || []).map((e) => `${e.kind}:${e.slug}`))

  const pageByKey = new Map()
  for (const page of pageStatus.pages || []) {
    const key = `${page.kind}:${page.slug}`
    if (!catalogKeys.has(key) || !FOLDERS[page.kind]) continue
    if (!page.zh || !page.en) continue
    const zhRel = page.zh.replace(/^wiki\/docs\//, '')
    const enRel = page.en.replace(/^wiki\/docs\//, '')
    if (excluded.has(zhRel) || excluded.has(enRel)) continue
    if (page.zhStatus === 'stub' || page.enStatus === 'stub') continue
    pageByKey.set(key, page)
  }

  /** @type {Map<string, any>} */
  const pages = new Map()
  const commits = listRecentCommits()
  let scanned = 0

  // Newest → oldest. Skip keys that already have both creation + a later update.
  for (const commit of commits) {
    scanned += 1
    for (const repoRel of commit.files) {
      const parsed = parsePagePath(repoRel)
      if (!parsed) continue
      const key = `${parsed.kind}:${parsed.slug}`
      if (!pageByKey.has(key)) continue
      const existing = pages.get(key)
      if (existing && pageDone(existing)) continue
      const change = inspectBodyChange(commit.hash, repoRel)
      if (!change) continue
      if (!change.becameMeaningful && !change.contentUpdate) continue
      applyChangeNewestFirst(
        ensurePage(pages, key, parsed.kind, parsed.slug),
        commit.date,
        change,
      )
    }
    if (scanned >= MIN_COMMITS_BEFORE_STOP) {
      const { news, updates } = countPools(pages)
      if (news >= CANDIDATE_BUFFER && updates >= CANDIDATE_BUFFER) break
    }
  }

  // Uncommitted body edits count as today (after commit pass).
  for (const repoRel of dirtyWikiPaths()) {
    const parsed = parsePagePath(repoRel)
    if (!parsed) continue
    const key = `${parsed.kind}:${parsed.slug}`
    if (!pageByKey.has(key)) continue
    const abs = join(REPO_ROOT, ...repoRel.split('/'))
    if (!existsSync(abs)) continue
    const disk = readFileSync(abs, 'utf8')
    const head = gitShow(`HEAD:${repoRel}`)
    if (head != null && bodyHash(disk) === bodyHash(head)) continue
    const curMeaningful = isMeaningfulBody(disk)
    const parentMeaningful = head != null && isMeaningfulBody(head)
    const change = {
      becameMeaningful: curMeaningful && !parentMeaningful,
      contentUpdate: curMeaningful && parentMeaningful,
      minor: curMeaningful && parentMeaningful && isMinorBodyChange(head, disk),
    }
    if (!change.becameMeaningful && !change.contentUpdate) continue
    applyChangeOldestStyle(ensurePage(pages, key, parsed.kind, parsed.slug), todayISO(), change)
  }

  // Newest-first can briefly assign an older update under a newer createdAt (zh/en).
  for (const row of pages.values()) {
    if (row.createdAt && row.updatedAt && row.updatedAt.localeCompare(row.createdAt) < 0) {
      row.updatedAt = row.createdAt
      row.sawUpdate = false
      row.lastUpdateMinor = false
    }
    if (row.createdAt && row.updatedAt === row.createdAt) {
      row.sawUpdate = false
    }
  }

  const news = []
  const updates = []
  for (const row of pages.values()) {
    if (row.createdAt) {
      news.push({
        kind: row.kind,
        slug: row.slug,
        changeType: 'new',
        createdAt: row.createdAt,
        updatedAt: row.updatedAt || row.createdAt,
        date: row.createdAt,
        minor: false,
      })
    }
    if (row.sawUpdate && row.updatedAt && (!row.createdAt || row.updatedAt !== row.createdAt)) {
      updates.push({
        kind: row.kind,
        slug: row.slug,
        changeType: 'updated',
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
        date: row.updatedAt,
        minor: Boolean(row.lastUpdateMinor),
      })
    }
  }

  const newsSorted = sortByDateDesc(news, 'date')
  const updatesSorted = [...updates].sort((a, b) => {
    const byDate = b.date.localeCompare(a.date)
    if (byDate !== 0) return byDate
    if (a.minor !== b.minor) return a.minor ? 1 : -1
    return `${a.kind}:${a.slug}`.localeCompare(`${b.kind}:${b.slug}`)
  })

  const merged = mergeQuota(newsSorted, updatesSorted, LIMIT).map((row) => ({
    kind: row.kind,
    slug: row.slug,
    changeType: row.changeType,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
    date: row.date,
  }))

  const payload = {
    schemaVersion: 2,
    generatedAt: new Date().toISOString(),
    source: 'git-body-history',
    limit: LIMIT,
    softQuota: { new: SOFT_NEW, updated: SOFT_UPDATED },
    scannedCommits: scanned,
    candidateCount: pages.size,
    newCandidateCount: newsSorted.length,
    updatedCandidateCount: updatesSorted.length,
    updates: merged,
  }
  writeFileSync(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  console.log(
    `Home updates generated: ${merged.length} (new≈${SOFT_NEW}/upd≈${SOFT_UPDATED}, candidates new=${newsSorted.length} upd=${updatesSorted.length}, scanned=${scanned}) → ${relative(REPO_ROOT, OUT_JSON)}`,
  )
  for (const row of merged) {
    console.log(`  ${row.changeType.padEnd(7)} ${row.date}  ${row.kind}/${row.slug}`)
  }
}

main()
