import type { IncomingMessage, ServerResponse } from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'

const DOCS_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const HEADING_RE = /^## (?:机制说明|Mechanics)\s*$/m
const ALLOWED_HOSTS = new Set(['localhost', '127.0.0.1', '::1', '[::1]'])

function isLocal(req: IncomingMessage): boolean {
  const host = String(req.headers.host || '').split(':')[0].toLowerCase()
  if (ALLOWED_HOSTS.has(host)) return true
  const remote = String(req.socket.remoteAddress || '')
  return remote === '127.0.0.1' || remote === '::1' || remote === ':ffff:127.0.0.1'
}

function sendJson(res: ServerResponse, status: number, payload: unknown): void {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(payload))
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function resolvePage(rel: string): string | null {
  const normalized = String(rel || '')
    .replace(/\\/g, '/')
    .replace(/^\/+/, '')
  if (!normalized || normalized.includes('..') || normalized.includes('\0')) return null
  if (!normalized.endsWith('.md')) return null
  if (/(^|\/)generated\//.test(normalized) || /(^|\/)\.vitepress\//.test(normalized)) return null
  const full = path.resolve(DOCS_ROOT, normalized)
  const root = path.resolve(DOCS_ROOT)
  if (full !== root && !full.startsWith(root + path.sep)) return null
  return full
}

function splitMechanics(text: string): { heading: string; prefix: string; body: string } | null {
  const match = text.match(HEADING_RE)
  if (!match || match.index == null) return null
  const heading = match[0]
  const prefix = text.slice(0, match.index + heading.length)
  const body = text.slice(match.index + heading.length).replace(/^\r?\n/, '')
  return { heading, prefix, body }
}

export function wikiDevPlugin(): Plugin {
  return {
    name: 'qing-wiki-dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || ''
        if (!url.startsWith('/__wiki_dev')) return next()
        if (!isLocal(req)) {
          sendJson(res, 403, { ok: false, error: 'local-only' })
          return
        }
        try {
          const parsed = new URL(url, 'http://127.0.0.1')
          if (parsed.pathname === '/__wiki_dev/status') {
            sendJson(res, 200, { ok: true, enabled: true })
            return
          }
          if (parsed.pathname === '/__wiki_dev/page' && req.method === 'GET') {
            const rel = parsed.searchParams.get('path') || ''
            const full = resolvePage(rel)
            if (!full || !fs.existsSync(full)) {
              sendJson(res, 404, { ok: false, error: 'missing' })
              return
            }
            const text = fs.readFileSync(full, 'utf8')
            const split = splitMechanics(text)
            sendJson(res, 200, {
              ok: true,
              path: rel.replace(/\\/g, '/'),
              hasMechanics: Boolean(split),
              body: split ? split.body : '',
            })
            return
          }
          if (parsed.pathname === '/__wiki_dev/page' && req.method === 'POST') {
            const payload = JSON.parse((await readBody(req)) || '{}') as {
              path?: string
              body?: string
            }
            const full = resolvePage(payload.path || '')
            if (!full || !fs.existsSync(full)) {
              sendJson(res, 404, { ok: false, error: 'missing' })
              return
            }
            const text = fs.readFileSync(full, 'utf8')
            const split = splitMechanics(text)
            if (!split) {
              sendJson(res, 400, { ok: false, error: 'no-mechanics-heading' })
              return
            }
            const body = String(payload.body ?? '').replace(/\r\n/g, '\n')
            const nextText = `${split.prefix}\n\n${body.replace(/\s+$/, '')}\n`
            fs.writeFileSync(full, nextText, 'utf8')
            sendJson(res, 200, { ok: true, path: payload.path })
            return
          }
          sendJson(res, 404, { ok: false, error: 'unknown' })
        } catch (error) {
          sendJson(res, 500, { ok: false, error: error instanceof Error ? error.message : 'fail' })
        }
      })
    },
  }
}
