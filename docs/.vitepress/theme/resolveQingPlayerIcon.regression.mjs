import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolveQingPlayerIcon } from './resolveQingPlayerIcon.js'

const generated = new URL('../../generated/', import.meta.url)
const icons = JSON.parse(readFileSync(new URL('icon-catalog.json', generated), 'utf8'))
const entries = JSON.parse(readFileSync(new URL('entries.json', generated), 'utf8'))
const challenge = entries.entries.find((entry) => entry.kind === 'challenge' && entry.slug === 'swallow-the-sun')
const character = entries.entries.find((entry) => entry.kind === 'character' && entry.slug === challenge.displayCharacter)

assert.match(challenge.eid.zh, /\{\{QingPlayer:anna-tainted\}\}/)
assert.ok(character)
for (const key of ['anna-tainted', character.internalKey]) {
  const icon = resolveQingPlayerIcon(key, icons, entries)
  assert.equal(icon?.sheet, '/icons/eid/player_icons.png')
  assert.ok(icon.crop.w > 0 && icon.crop.h > 0)
  assert.ok(existsSync(new URL(`../../public${icon.sheet}`, import.meta.url)))
}
assert.equal(resolveQingPlayerIcon('missing-character', icons, entries), null)
