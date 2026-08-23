export type MarkPart = { type: 'text' | 'icon'; value: string }

const PREFIX: Record<string, string> = {
  collectible: 'Item',
  trinket: 'Trinket',
  card: 'Card',
  player: 'QingPlayer',
}

const ARROW_ICONS: Record<string, string> = {
  '↑': 'ArrowUp',
  '↓': 'ArrowDown',
}

function splitPlainText(text: string): MarkPart[] {
  const parts: MarkPart[] = []
  let buffer = ''
  for (const ch of text) {
    const icon = ARROW_ICONS[ch]
    if (icon) {
      if (buffer) parts.push({ type: 'text', value: buffer })
      buffer = ''
      parts.push({ type: 'icon', value: icon })
    } else {
      buffer += ch
    }
  }
  if (buffer) parts.push({ type: 'text', value: buffer })
  return parts
}

export function escapeVueBraces(text: string): string {
  return String(text || '')
    .replaceAll('{{', '&#123;&#123;')
    .replaceAll('}}', '&#125;&#125;')
}

export function resolveMark(raw: string): string | null {
  let name = (raw || '').trim()
  if (!name) return null
  name = name.replace(
    /^(Collectible|Trinket|Card|Player)\{\{(?:enums\.)?(?:Items|Trinkets|Cards|Players)\.(\w+)\}\}$/i,
    (_m, prefix: string, key: string) => `${PREFIX[prefix.toLowerCase()]}:${key}`,
  )
  name = name.replace(/^(?:enums\.)?Players\.(\w+)$/i, 'QingPlayer:$1')
  name = name.replace(/^(?:enums\.)?Items\.(\w+)$/i, 'Item:$1')
  name = name.replace(/^(?:enums\.)?Trinkets\.(\w+)$/i, 'Trinket:$1')
  name = name.replace(/^(?:enums\.)?Cards\.(\w+)$/i, 'Card:$1')
  if (/^Color/i.test(name) || name === 'CR' || name === 'NoLB') return null
  return name
}

export function splitMarks(source: string): MarkPart[] {
  const tokens: MarkPart[] = []
  const text = source || ''
  let i = 0
  while (i < text.length) {
    const start = text.indexOf('{{', i)
    if (start < 0) {
      if (i < text.length) tokens.push(...splitPlainText(text.slice(i)))
      break
    }
    if (start > i) tokens.push(...splitPlainText(text.slice(i, start)))
    let depth = 0
    let j = start
    let end = -1
    while (j < text.length) {
      if (text.startsWith('{{', j)) {
        depth += 1
        j += 2
        continue
      }
      if (text.startsWith('}}', j)) {
        depth -= 1
        j += 2
        if (depth === 0) {
          end = j
          break
        }
        continue
      }
      j += 1
    }
    if (end < 0) {
      tokens.push({ type: 'text', value: text.slice(start) })
      break
    }
    const resolved = resolveMark(text.slice(start + 2, end - 2))
    if (resolved) tokens.push({ type: 'icon', value: resolved })
    i = end
  }
  return tokens
}
