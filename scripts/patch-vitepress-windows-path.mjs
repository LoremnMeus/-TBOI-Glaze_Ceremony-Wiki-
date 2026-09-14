/**
 * VitePress 1.6 on Windows can fail page rendering when the repo path contains
 * spaces (facadeModuleId !== realpath srcPath → pageChunk undefined).
 * Idempotent patch for resolvePageImports.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const target = path.join(root, 'node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js')

if (!fs.existsSync(target)) {
  console.warn('[patch-vitepress-windows-path] vitepress chunk not found; skip')
  process.exit(0)
}

const text = fs.readFileSync(target, 'utf8')
const marker = 'QingRemasterWindowsPathPatch'
if (text.includes(marker)) {
  console.log('[patch-vitepress-windows-path] already applied')
  process.exit(0)
}

const old = `  const pageChunk = result.output.find(
    (chunk) => chunk.type === "chunk" && chunk.facadeModuleId === srcPath
  );
  return [
    ...appChunk.imports,
    ...appChunk.dynamicImports,
    ...pageChunk.imports,
    ...pageChunk.dynamicImports
  ];`

const neu = `  // ${marker}
  const pageChunk = result.output.find(
    (chunk) => chunk.type === "chunk" && chunk.facadeModuleId === srcPath
  ) || result.output.find(
    (chunk) => chunk.type === "chunk" && chunk.facadeModuleId && normalizePath(chunk.facadeModuleId).replace(/\\\\/g, "/").toLowerCase().endsWith("/" + String(page).replace(/\\\\/g, "/").toLowerCase())
  );
  if (!pageChunk) {
    return [
      ...appChunk.imports,
      ...appChunk.dynamicImports
    ];
  }
  return [
    ...appChunk.imports,
    ...appChunk.dynamicImports,
    ...pageChunk.imports,
    ...pageChunk.dynamicImports
  ];`

if (!text.includes(old)) {
  console.warn('[patch-vitepress-windows-path] pattern not found; vitepress version may have changed')
  process.exit(0)
}

fs.writeFileSync(target, text.replace(old, neu), 'utf8')
console.log('[patch-vitepress-windows-path] applied')
