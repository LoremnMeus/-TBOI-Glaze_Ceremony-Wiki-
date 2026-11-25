/**
 * Build-time "Recently Added" list for the Wiki home page.
 *
 * Only records first meaningful player-visible body creation
 * (after ## 机制说明 / ## Mechanics). Ignores later copy polish / updates
 * and exporter frontmatter / search-index churn.
 *
 * Private-repo only (expects Git paths under wiki/docs/…). Public Wiki
 * docs:build must not run this — it only validates the prebuilt JSON.
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
const LIMIT = 2
const COMMIT_SCAN = 400
const CANDIDATE_BUFFER = 6
const MIN_COMMITS_BEFORE_STOP = 30
const SHOW_CACHE_MAX = 8000

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
  return { kind, slug: m[2] }
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

function becameMeaningfulAtCommit(hash, repoRel) {
  const current = gitShow(`${hash}:${repoRel}`)
  if (current == null || !isMeaningfulBody(current)) return false
  const parent = gitShow(`${hash}^:${repoRel}`)
  if (parent == null) return true
  if (bodyHash(current) === bodyHash(parent)) return false
  return !isMeaningfulBody(parent)
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

  /** @type {Map<string, { kind: string, slug: string, createdAt: string }>} */
  const found = new Map()

  // Uncommitted first meaningful bodies count as today.
  for (const repoRel of dirtyWikiPaths()) {
    const parsed = parsePagePath(repoRel)
    if (!parsed) continue
    const key = `${parsed.kind}:${parsed.slug}`
    if (!pageByKey.has(key) || found.has(key)) continue
    const abs = join(REPO_ROOT, ...repoRel.split('/'))
    if (!existsSync(abs)) continue
    const disk = readFileSync(abs, 'utf8')
    if (!isMeaningfulBody(disk)) continue
    const head = gitShow(`HEAD:${repoRel}`)
    if (head != null && isMeaningfulBody(head)) continue
    found.set(key, { kind: parsed.kind, slug: parsed.slug, createdAt: todayISO() })
  }

  // Newest → oldest: first becameMeaningful seen per key is the newest creation
  // event; keep walking older to settle on the earliest creation still in window.
  let scanned = 0
  for (const commit of listRecentCommits()) {
    scanned += 1
    for (const repoRel of commit.files) {
      const parsed = parsePagePath(repoRel)
      if (!parsed) continue
      const key = `${parsed.kind}:${parsed.slug}`
      if (!pageByKey.has(key)) continue
      if (!becameMeaningfulAtCommit(commit.hash, repoRel)) continue
      const prev = found.get(key)
      if (!prev || commit.date.localeCompare(prev.createdAt) < 0) {
        found.set(key, { kind: parsed.kind, slug: parsed.slug, createdAt: commit.date })
      }
    }
    if (scanned >= MIN_COMMITS_BEFORE_STOP && found.size >= CANDIDATE_BUFFER) break
  }

  const candidates = [...found.values()]
    .map((row) => ({
      kind: row.kind,
      slug: row.slug,
      changeType: 'new',
      createdAt: row.createdAt,
      updatedAt: row.createdAt,
      date: row.createdAt,
    }))
    .sort((a, b) => {
      const byDate = b.date.localeCompare(a.date)
      if (byDate !== 0) return byDate
      return `${a.kind}:${a.slug}`.localeCompare(`${b.kind}:${b.slug}`)
    })

  const updates = candidates.slice(0, LIMIT)
  const payload = {
    schemaVersion: 3,
    generatedAt: new Date().toISOString(),
    source: 'git-body-history-new-only',
    limit: LIMIT,
    scannedCommits: scanned,
    candidateCount: candidates.length,
    updates,
  }
  writeFileSync(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  console.log(
    `Home recently-added generated: ${updates.length}/${candidates.length} → ${relative(REPO_ROOT, OUT_JSON)}`,
  )
  for (const row of updates) {
    console.log(`  new  ${row.date}  ${row.kind}/${row.slug}`)
  }
}

main()
