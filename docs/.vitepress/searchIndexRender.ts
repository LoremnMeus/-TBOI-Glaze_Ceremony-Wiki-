import catalog from '../generated/entries.json'

function escapeHtml(text: string): string {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function stripMarks(text: string): string {
  let current = String(text || '')
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
  const row = (catalog.entries || []).find((entry: { slug: string }) => entry.slug === slug)
  const title =
    env.frontmatter?.title ||
    row?.names?.[english ? 'en' : 'zh'] ||
    row?.names?.zh ||
    slug
  const extra = [
    title,
    row?.names?.zh,
    row?.names?.en,
    row?.internalKey,
    row?.slug,
    row?.xmlName,
    ...(row?.aliases?.zh || []),
    ...(row?.aliases?.en || []),
    row?.desc?.zh,
    row?.desc?.en,
    row?.eid?.zh,
    row?.eid?.en,
  ]
    .filter(Boolean)
    .map((value) => stripMarks(String(value)))
    .join(' ')
  return (
    `<h1>${escapeHtml(String(title))}<a href="#${escapeHtml(String(slug))}"></a></h1>` +
    `<p>${escapeHtml(extra)}</p>` +
    html
  )
}
