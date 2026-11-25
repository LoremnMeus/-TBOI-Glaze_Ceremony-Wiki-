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

if (homeUpdates.length > 2) {
  throw new Error(`Home recently-added exceed display cap: ${homeUpdates.length}`)
}

const seen = new Set()
let previousDate = null
for (const update of homeUpdates) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(update.date) || !update.kind || !update.slug) {
    throw new Error(`Incomplete home update: ${update.kind}:${update.slug}`)
  }
  if (update.changeType !== 'new') {
    throw new Error(`Home recently-added requires changeType=new: ${update.kind}:${update.slug}`)
  }
  if (update.createdAt && update.createdAt !== update.date) {
    throw new Error(`new entry date must equal createdAt: ${update.kind}:${update.slug}`)
  }
  const key = `${update.kind}:${update.slug}`
  if (seen.has(key)) throw new Error(`Duplicate home update entry: ${key}`)
  seen.add(key)
  if (previousDate && update.date.localeCompare(previousDate) > 0) {
    throw new Error(`Home recently-added must be date-desc: ${key}`)
  }
  previousDate = update.date
}

{
  const news = [
    { kind: 'collectible', slug: 'a', changeType: 'new', date: '2026-11-23' },
    { kind: 'collectible', slug: 'b', changeType: 'new', date: '2026-11-22' },
    { kind: 'collectible', slug: 'c', changeType: 'new', date: '2026-11-21' },
  ]
  const shown = news.filter((row) => row.changeType === 'new').slice(0, 2)
  if (shown.length !== 2 || shown[0].slug !== 'a' || shown[1].slug !== 'b') {
    throw new Error(`new-only filter failed: ${shown.map((row) => row.slug).join(',')}`)
  }
  const empty = [{ kind: 'collectible', slug: 'x', changeType: 'updated', date: '2026-11-23' }]
    .filter((row) => row.changeType === 'new')
    .slice(0, 2)
  if (empty.length !== 0) throw new Error('updated rows must not fill recently-added')
}

console.log(`Home entries valid: ${homeFeatured.length} featured, ${homeUpdates.length} recently-added`)
