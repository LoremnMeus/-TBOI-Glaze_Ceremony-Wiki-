/**
 * Regression: injected search title must not mint a #slug heading anchor.
 * Collision case: title/slug "Story" + body "# Story" → two /en/story/#story IDs.
 *
 * From wiki/: node docs/.vitepress/searchIndexRender.regression.mjs
 */
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const src = fs.readFileSync(path.join(here, 'searchIndexRender.ts'), 'utf8')

assert.equal(
  src.includes('href="#${escapeHtml(String(slug))}"'),
  false,
  'injected search title must not emit href="#slug"',
)
assert.ok(
  src.includes('`<h1>${escapeHtml(String(title))}</h1>`'),
  'injected search title should be a plain <h1> without an anchor child',
)

console.log('searchIndexRender regression: ok')
