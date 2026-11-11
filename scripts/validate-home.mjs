import { readFileSync } from 'node:fs'
import { homeFeatured } from '../docs/.vitepress/theme/data/homeFeatured.js'
import { homeUpdates } from '../docs/.vitepress/theme/data/homeUpdates.js'

const read = (name) => JSON.parse(readFileSync(new URL(`../docs/generated/${name}.json`, import.meta.url), 'utf8'))
const catalog = read('entries')
const pageStatus = read('page-status')
const releaseScope = read('release-scope')
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

for (const update of homeUpdates) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(update.date)
    || !update.summary?.zh || !update.summary?.en) {
    throw new Error(`Incomplete home update: ${update.kind}:${update.slug}`)
  }
}

for (const count of [0, 1, 2, 4]) {
  const sample = Array.from({ length: count }, (_, index) => ({
    date: `2026-11-${String(index + 1).padStart(2, '0')}`,
    kind: 'collectible', slug: 'wishing',
  }))
  const shown = [...sample].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4)
  if (shown.length !== count || shown.some((row) => row.kind !== 'collectible')) {
    throw new Error(`Home update count failed: ${count}`)
  }
}

console.log(`Home entries valid: ${homeFeatured.length} featured, ${homeUpdates.length} updates`)
