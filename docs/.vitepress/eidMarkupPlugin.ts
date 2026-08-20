const MARK = /\{\{([^{}]+)\}\}/g

function replaceMarks(text: string): { type: 'text' | 'html_inline'; content: string }[] {
  const parts: { type: 'text' | 'html_inline'; content: string }[] = []
  let last = 0
  for (const match of text.matchAll(MARK)) {
    const name = (match[1] || '').trim()
    const index = match.index ?? 0
    if (index > last) {
      parts.push({ type: 'text', content: text.slice(last, index) })
    }
    last = index + match[0].length
    if (!name || /^Color/i.test(name) || name === 'CR' || name === 'NoLB') {
      continue
    }
    const escaped = name.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    parts.push({ type: 'html_inline', content: `<EidIcon name="${escaped}" />` })
  }
  if (last < text.length) {
    parts.push({ type: 'text', content: text.slice(last) })
  }
  return parts
}

export function eidMarkupPlugin(md: {
  core: { ruler: { after: (name: string, fn: (state: any) => void) => void } }
}) {
  md.core.ruler.after('inline', 'eid-markup', (state) => {
    for (const token of state.tokens) {
      if (token.type !== 'inline' || !token.children) continue
      const next = []
      for (const child of token.children) {
        if (child.type !== 'text' || !child.content.includes('{{')) {
          next.push(child)
          continue
        }
        for (const part of replaceMarks(child.content)) {
          const mapped = new state.Token(part.type, '', 0)
          mapped.content = part.content
          next.push(mapped)
        }
      }
      token.children = next
    }
  })
}
