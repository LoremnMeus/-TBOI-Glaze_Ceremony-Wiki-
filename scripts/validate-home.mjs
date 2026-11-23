import { readFileSync } from 'node:fs'
import { homeFeatured } from '../docs/.vitepress/theme/data/homeFeatured.js'

const read = (name) => JSON.parse(readFileSync(new URL(`../docs/generated/${name}.json`, import.meta.url), 'utf8'))
const catalog = read('entries')
const pageStatus = read('page-status')
const releaseScope = read('release-scope')
const homeGenerated = read('home-updates')
const homeUpdates = Array.isArray(homeGenerated.updates) ? homeGenerated.updates : []
const entries = new Set(catalog.entries.map(({ kind, slug }) => `${kind}:${slug}`))
const pages = new Map(pageStatus.pages.map((page) => [`${page.kind}:${page.slug}`, page]))
const excluded = new Set(releaseScope.excludeFromPublicBuild || [])

for (const reference of [...homeFeatured, ...homeUpdates]) {
  const key = `${reference.kind}:${reference.slug}`
  const page = pages.get(key)
  if (!entries.has(key) || !page?.zh || !page?.en
    || excluded.has(page.zh.replace(/^wiki\/docs\//, ''))
    || excluded.has(page.en.replace(/^wiki\/docs\//, ''))) {
    throw new Error(`Invalid or unpublished home entry: ${key}`)
  }
}

if (!Array.isArray(homeGenerated.updates)) {
  throw new Error('generated/home-updates.json missing updates[]')
}

const seen = new Set()
for (const update of homeUpdates) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(update.date) || !update.kind || !update.slug) {
    throw new Error(`Incomplete home update: ${update.kind}:${update.slug}`)
  }
  if (update.changeType !== 'new' && update.changeType !== 'updated') {
    throw new Error(`Invalid changeType for ${update.kind}:${update.slug}: ${update.changeType}`)
  }
  if (update.changeType === 'new' && update.createdAt && update.createdAt !== update.date) {
    throw new Error(`new entry date must equal createdAt: ${update.kind}:${update.slug}`)
  }
  if (update.changeType === 'updated' && update.updatedAt && update.updatedAt !== update.date) {
    throw new Error(`updated entry date must equal updatedAt: ${update.kind}:${update.slug}`)
  }
  const key = `${update.kind}:${update.slug}`
  if (seen.has(key)) throw new Error(`Duplicate home update entry: ${key}`)
  seen.add(key)
}

if (homeUpdates.length > 4) {
  throw new Error(`Home updates exceed display cap: ${homeUpdates.length}`)
}

function mergeQuota(news, updates, limit = 4, softNew = 2, softUpdated = 2) {
  const pickedNew = []
  const pickedUpd = []
  const used = new Set()
  for (const row of news) {
    if (pickedNew.length >= softNew) break
    const key = `${row.kind}:${row.slug}`
    if (used.has(key)) continue
    used.add(key)
    pickedNew.push(row)
  }
  for (const row of updates) {
    if (pickedUpd.length >= softUpdated) break
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

{
  const news = [
    { kind: 'collectible', slug: 'a', date: '2026-11-23' },
    { kind: 'collectible', slug: 'b', date: '2026-11-22' },
    { kind: 'collectible', slug: 'c', date: '2026-11-21' },
  ]
  const updates = [
    { kind: 'collectible', slug: 'a', date: '2026-11-23' },
    { kind: 'collectible', slug: 'd', date: '2026-11-23' },
    { kind: 'collectible', slug: 'e', date: '2026-11-20' },
  ]
  const merged = mergeQuota(news, updates, 4)
  if (merged.length !== 4) throw new Error(`quota merge length failed: ${merged.length}`)
  if (merged.filter((row) => row.slug === 'a').length !== 1) {
    throw new Error('quota merge failed to dedupe new over updated')
  }
  if (merged[0].slug !== 'a' || merged[1].slug !== 'd') {
    throw new Error(`quota merge interleave failed: ${merged.map((row) => row.slug).join(',')}`)
  }
}

console.log(`Home entries valid: ${homeFeatured.length} featured, ${homeUpdates.length} updates (generated)`)
