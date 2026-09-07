export type MarkPart = {
  type: 'text' | 'icon'
  value: string
  /** Active EID color key, e.g. ColorGold; omitted/null = default body color */
  color?: string | null
}

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

/** Layout-only EID marks: strip, do not render as icons. */
const LAYOUT_MARKS = /^(NoLB|NoLineBreak|Indent|Blank)$/i

function splitPlainText(text: string, color: string | null): MarkPart[] {
  const parts: MarkPart[] = []
  let buffer = ''
  let i = 0
  const pushText = () => {
    if (!buffer) return
    const part: MarkPart = { type: 'text', value: buffer }
    if (color) part.color = color
    parts.push(part)
    buffer = ''
  }
  while (i < text.length) {
    // EID 简写：!!! → {{Warning}}（与 External Item Descriptions eid_data.lua 一致）
    if (text.startsWith('!!!', i)) {
      pushText()
      const part: MarkPart = { type: 'icon', value: 'Warning' }
      if (color) part.color = color
      parts.push(part)
      i += 3
      continue
    }
    const ch = text[i]
    const icon = ARROW_ICONS[ch]
    if (icon) {
      pushText()
      const part: MarkPart = { type: 'icon', value: icon }
      if (color) part.color = color
      parts.push(part)
    } else {
      buffer += ch
    }
    i += 1
  }
  pushText()
  return parts
}

export function escapeVueBraces(text: string): string {
  return String(text || '')
    .replaceAll('{{', '&#123;&#123;')
    .replaceAll('}}', '&#125;&#125;')
}

export function escapeHtmlText(text: string): string {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

/** Canonical CSS key: ColorGold → colorgold */
export function eidColorClassName(color: string | null | undefined): string | null {
  if (!color) return null
  const key = String(color).trim().toLowerCase()
  if (!key) return null
  return `eid-color eid-color--${key}`
}

function normalizeMarkName(raw: string): string {
  let name = (raw || '').trim()
  if (!name) return ''
  name = name.replace(
    /^(Collectible|Trinket|Card|Player)\{\{(?:enums\.)?(?:Items|Trinkets|Cards|Players)\.(\w+)\}\}$/i,
    (_m, prefix: string, key: string) => `${PREFIX[prefix.toLowerCase()]}:${key}`,
  )
  name = name.replace(/^(?:enums\.)?Players\.(\w+)$/i, 'QingPlayer:$1')
  name = name.replace(/^(?:enums\.)?Items\.(\w+)$/i, 'Item:$1')
  name = name.replace(/^(?:enums\.)?Trinkets\.(\w+)$/i, 'Trinket:$1')
  name = name.replace(/^(?:enums\.)?Cards\.(\w+)$/i, 'Card:$1')
  return name
}

/** True for EID InlineColors keys and CR shortcut (after TextReplacementPairs). */
export function isEidColorMark(name: string): boolean {
  if (!name) return false
  if (name === 'CR' || /^ColorReset$/i.test(name)) return true
  if (/^Color/i.test(name)) return true
  if (/^Blink/i.test(name)) return true
  return false
}

export function isEidColorReset(name: string): boolean {
  return name === 'CR' || /^ColorReset$/i.test(name)
}

/**
 * Resolve a raw `{{...}}` body to an icon name, or null when the mark is
 * layout-only, a color opener/reset, or empty.
 * Color marks are handled by splitMarks; callers that only want icons keep this.
 */
export function resolveMark(raw: string): string | null {
  const name = normalizeMarkName(raw)
  if (!name) return null
  if (LAYOUT_MARKS.test(name)) return null
  if (isEidColorMark(name)) return null
  return name
}

export function splitMarks(source: string): MarkPart[] {
  const tokens: MarkPart[] = []
  const text = source || ''
  let i = 0
  // Flat color model (matches EID filterColorMarkup): set / replace / CR clears.
  let activeColor: string | null = null

  while (i < text.length) {
    const start = text.indexOf('{{', i)
    if (start < 0) {
      if (i < text.length) tokens.push(...splitPlainText(text.slice(i), activeColor))
      break
    }
    if (start > i) tokens.push(...splitPlainText(text.slice(i, start), activeColor))
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
      tokens.push(...splitPlainText(text.slice(start), activeColor))
      break
    }
    const name = normalizeMarkName(text.slice(start + 2, end - 2))
    if (!name || LAYOUT_MARKS.test(name)) {
      i = end
      continue
    }
    if (isEidColorReset(name)) {
      activeColor = null
      i = end
      continue
    }
    if (isEidColorMark(name)) {
      // Preserve EID spelling for CSS (ColorGold / BlinkPink / …).
      activeColor = name
      i = end
      continue
    }
    const part: MarkPart = { type: 'icon', value: name }
    if (activeColor) part.color = activeColor
    tokens.push(part)
    i = end
  }
  return tokens
}
