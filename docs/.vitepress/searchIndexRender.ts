import catalog from '../generated/entries.json'
import vanillaEntities from '../generated/vanilla-entities.json'

type NamePair = { zh?: string; en?: string }

function escapeHtml(text: string): string {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function pickName(names: NamePair | undefined, lang: 'zh' | 'en' | null): string {
  if (!names) return ''
  const zh = String(names.zh || '').trim()
  const en = String(names.en || '').trim()
  if (lang === 'zh') return zh || en
  if (lang === 'en') return en || zh
  if (zh && en && zh !== en) return `${zh} ${en}`
  return zh || en
}

const markNameIndex: Record<string, NamePair> = (() => {
  const index: Record<string, NamePair> = {}
  const entities = (vanillaEntities as { entities?: Record<string, { name?: NamePair }> }).entities || {}
  for (const [key, row] of Object.entries(entities)) {
    const parts = key.split(':')
    if (parts.length !== 3 || parts[0] !== 'vanilla') continue
    index[`${parts[1].toLowerCase()}:${parts[2]}`] = row?.name || {}
  }
  for (const entry of (catalog as { entries?: Array<Record<string, any>> }).entries || []) {
    const names = (entry.names || {}) as NamePair
    const kind = String(entry.kind || '').toLowerCase()
    const slug = String(entry.slug || '').trim().toLowerCase()
    const internal = String(entry.internalKey || '').trim().toLowerCase()
    if (slug) {
      index[`item:${slug}`] = names
      if (kind === 'character') index[`character:${slug}`] = names
    }
    if (internal) {
      index[`item:${internal}`] = names
      if (kind === 'character') index[`character:${internal}`] = names
    }
  }
  return index
})()

function expandEntityMarks(text: string, lang: 'zh' | 'en' | null): string {
  const alreadyNamed = (rest: string, names: NamePair | undefined): boolean => {
    if (!names) return false
    const stripped = String(rest || '').replace(/^\s+/, '')
    for (const candidate of [names.zh, names.en]) {
      const token = String(candidate || '').trim()
      if (token && stripped.startsWith(token)) return true
    }
    return false
  }

  let current = String(text || '')
  current = current.replace(
    /\{\{\s*(Collectible|Trinket|Card|Pill)\s*:?\s*(\d+)\s*\}\}/gi,
    (match, kind: string, id: string, offset: number, source: string) => {
      const names = markNameIndex[`${String(kind).toLowerCase()}:${id}`]
      if (alreadyNamed(source.slice(offset + match.length), names)) return ' '
      return pickName(names, lang) || ' '
    },
  )
  current = current.replace(
    /\{\{\s*Item\s*:\s*([^}\s]+)\s*\}\}/gi,
    (match, token: string, offset: number, source: string) => {
      const names = markNameIndex[`item:${String(token).toLowerCase()}`]
      if (alreadyNamed(source.slice(offset + match.length), names)) return ' '
      return pickName(names, lang) || ' '
    },
  )
  current = current.replace(
    /\{\{\s*Character\s*:\s*([^}\s]+)\s*\}\}/gi,
    (match, token: string, offset: number, source: string) => {
      const names = markNameIndex[`character:${String(token).toLowerCase()}`]
      if (alreadyNamed(source.slice(offset + match.length), names)) return ' '
      return pickName(names, lang) || ' '
    },
  )
  return current
}

function stripMarks(text: string, lang: 'zh' | 'en' | null = null): string {
  let current = expandEntityMarks(text, lang)
  let previous = ''
  while (current !== previous) {
    previous = current
    current = current.replace(/\{\{[^{}]*\}\}/g, ' ')
  }
  return current.replace(/#/g, ' ')
}

export function renderWikiSearchHtml(
  src: string,
  env: { frontmatter?: Record<string, any>; relativePath?: string },
  md: { render: (src: string, env: object) => string },
): string {
  const html = md.render(src, env)
  if (env.frontmatter?.search === false) return ''
  const slug = env.frontmatter?.slug
  if (!slug) return html
  const english = String(env.relativePath || '').startsWith('en/')
  const lang: 'zh' | 'en' = english ? 'en' : 'zh'
  const row = (catalog.entries || []).find((entry: { slug: string }) => entry.slug === slug)
  const title =
    env.frontmatter?.title ||
    row?.names?.[lang] ||
    row?.names?.zh ||
    slug
  const extra = [
    title,
    row?.names?.zh,
    row?.names?.en,
    row?.internalKey,
    row?.slug,
    row?.xmlName,
    ...(row?.aliases?.zh || []).map((value: string) => stripMarks(value, 'zh')),
    ...(row?.aliases?.en || []).map((value: string) => stripMarks(value, 'en')),
    stripMarks(String(row?.desc?.zh || ''), 'zh'),
    stripMarks(String(row?.desc?.en || ''), 'en'),
    stripMarks(String(row?.eid?.zh || ''), 'zh'),
    stripMarks(String(row?.eid?.en || ''), 'en'),
  ]
    .filter(Boolean)
    .map((value) => String(value).replace(/\s+/g, ' ').trim())
    .join(' ')
  return (
    `<h1>${escapeHtml(String(title))}<a href="#${escapeHtml(String(slug))}"></a></h1>` +
    `<p>${escapeHtml(extra)}</p>` +
    html
  )
}
