import catalog from '../../../generated/entries.json'
import pageStatus from '../../../generated/page-status.json'
import releaseScope from '../../../generated/release-scope.json'

const folders = {
  collectible: 'items', trinket: 'trinkets', card: 'cards', character: 'characters',
  challenge: 'challenges', pickup: 'pickups', slot: 'slots',
}
const entries = new Map((catalog.entries || []).map((entry) => [`${entry.kind}:${entry.slug}`, entry]))
const excluded = new Set(releaseScope.excludeFromPublicBuild || [])
const pages = new Set((pageStatus.pages || [])
  .filter((page) => page.zh && page.en
    && !excluded.has(page.zh.replace(/^wiki\/docs\//, ''))
    && !excluded.has(page.en.replace(/^wiki\/docs\//, '')))
  .map((page) => `${page.kind}:${page.slug}`))

export function resolveHomeEntry(reference) {
  const key = `${reference.kind}:${reference.slug}`
  const entry = entries.get(key)
  if (!entry || !pages.has(key) || !folders[reference.kind]) {
    throw new Error(`Invalid Wiki home entry: ${key}`)
  }
  return entry
}

export function homeEntryName(entry, lang) {
  return entry.names?.[lang] || entry.names?.zh || entry.internalKey
}

export function homeEntryPath(entry, lang) {
  return `${lang === 'en' ? '/en' : ''}/${folders[entry.kind]}/${entry.slug}`
}

export function homeEntryImage(entry) {
  return entry.kind === 'character'
    ? entry.portrait || entry.icon || entry.thumb64 || entry.thumb32
    : entry.kind === 'slot'
      ? entry.icon || entry.thumb64 || entry.thumb32
      : entry.thumb64 || entry.icon || entry.thumb32
}
