export function tokenizeWikiSearch(text: string): string[] {
  const tokens: string[] = []
  const lower = String(text || '').toLowerCase()
  const latin = lower.match(/[a-z0-9]+(?:'[a-z0-9]+)*/g)
  if (latin) tokens.push(...latin)
  let buf = ''
  const flush = () => {
    if (!buf) return
    for (let i = 0; i < buf.length; i += 1) {
      tokens.push(buf[i])
      if (i + 1 < buf.length) tokens.push(buf[i] + buf[i + 1])
    }
    buf = ''
  }
  for (const ch of lower) {
    if (/[\u3400-\u9fff]/.test(ch)) buf += ch
    else flush()
  }
  flush()
  return tokens
}
