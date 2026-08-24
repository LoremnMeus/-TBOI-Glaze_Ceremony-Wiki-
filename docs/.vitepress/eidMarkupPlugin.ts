import { escapeVueBraces, splitMarks } from './eidMarks'

function eidIconHtml(name: string): string {
  const escaped = name.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
  const entity = escaped.match(/^(Collectible|Trinket|Card|Pill):\s*(\d+)$/i)
  if (entity) {
    return `<VanillaEntity entity-type="${entity[1].toLowerCase()}" entity-id="${entity[2]}" />`
  }
  return `<EidIcon name="${escaped}" />`
}

function replaceTextMarks(text: string): { type: 'text' | 'html_inline'; content: string }[] {
  const parts: { type: 'text' | 'html_inline'; content: string }[] = []
  for (const part of splitMarks(text)) {
    if (part.type === 'icon') {
      parts.push({ type: 'html_inline', content: eidIconHtml(part.value) })
    } else if (part.value.includes('{{')) {
      parts.push({ type: 'html_inline', content: escapeVueBraces(part.value) })
    } else {
      parts.push({ type: 'text', content: part.value })
    }
  }
  return parts
}

export function eidMarkupPlugin(md: {
  core: { ruler: { after: (name: string, fn: (state: any) => void) => void } }
}) {
  md.core.ruler.after('inline', 'eid-markup', (state) => {
    for (const token of state.tokens) {
      if (token.type === 'html_block' || token.type === 'fence' || token.type === 'code_block') {
        if (token.content && token.content.includes('{{') && !/\bv-pre\b/.test(token.content)) {
          token.content = escapeVueBraces(token.content)
        }
        continue
      }
      if (token.type !== 'inline' || !token.children) continue
      const next = []
      for (const child of token.children) {
        if (child.type === 'code_inline' && child.content.includes('{{')) {
          child.content = escapeVueBraces(child.content)
          next.push(child)
          continue
        }
        if (child.type === 'html_inline' && child.content.includes('{{') && !/\bv-pre\b/.test(child.content)) {
          child.content = escapeVueBraces(child.content)
          next.push(child)
          continue
        }
        if (child.type !== 'text' || !(child.content.includes('{{') || /[↑↓]/.test(child.content))) {
          next.push(child)
          continue
        }
        for (const part of replaceTextMarks(child.content)) {
          const mapped = new state.Token(part.type, '', 0)
          mapped.content = part.content
          next.push(mapped)
        }
      }
      token.children = next
    }
  })
}
