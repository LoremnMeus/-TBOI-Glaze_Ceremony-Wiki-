<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'

const KIND_DIR = {
  collectible: 'items',
  trinket: 'trinkets',
  card: 'cards',
  character: 'characters',
  challenge: 'challenges',
  pickup: 'pickups',
  slot: 'slots',
  system: 'systems',
}

const SYSTEMS = {
  glaze: { zh: '琉璃', en: 'Glaze' },
  'thoth-cards': { zh: '透特牌', en: 'Thoth Cards' },
  rainbow: { zh: '彩虹', en: 'Rainbow' },
  'blueprint-air-flight': { zh: '蓝图与机群', en: 'Blueprint & Fleet' },
  'control-hub': { zh: '控制中枢', en: 'Control Hub' },
  'death-certificate-knowledge': { zh: '知识与遐想', en: 'Knowledge & Reverie' },
}

const props = defineProps({
  name: { type: String, required: true },
})

const { lang } = useData()

const parsed = computed(() => {
  const raw = (props.name || '').trim()
  const match = raw.match(/^(Item|Trinket|Card|Character|Challenge|System|Wiki)[:/]\s*(.+)$/i)
  const token = (match ? match[2] : raw).trim()
  if (match?.[1]?.toLowerCase() === 'system' && SYSTEMS[token]) {
    return { row: { kind: 'system', slug: token, internalKey: token, names: SYSTEMS[token] }, token }
  }
  const rows = catalog.entries || []
  const row =
    rows.find((entry) => entry.slug === token) ||
    rows.find((entry) => entry.internalKey === token) ||
    null
  return { row, token }
})

const href = computed(() => {
  const row = parsed.value.row
  if (!row) return ''
  const folder = KIND_DIR[row.kind] || row.kind
  const prefix = String(lang.value || '').startsWith('en') ? '/en' : ''
  return withBase(`${prefix}/${folder}/${row.slug}`)
})

const label = computed(() => {
  const row = parsed.value.row
  if (!row) return parsed.value.token
  const english = String(lang.value || '').startsWith('en')
  if (english) return row.names?.en || row.names?.zh || row.internalKey
  return row.names?.zh || row.names?.en || row.internalKey
})

const src = computed(() => {
  const row = parsed.value.row
  if (!row) return ''
  return withBase(row.thumb32 || row.icon || row.portrait || '')
})
</script>

<template>
  <a v-if="parsed.row" class="wiki-entry-icon" :href="href" :title="label">
    <img v-if="src" :src="src" :alt="label" width="32" height="32" decoding="async" />
    <span>{{ label }}</span>
  </a>
  <code v-else class="eid-missing" :title="name">{{ name }}</code>
</template>

<style scoped>
.wiki-entry-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0 0.12em;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  max-width: 100%;
}
.wiki-entry-icon img {
  display: inline-block;
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  image-rendering: pixelated;
  vertical-align: middle;
}
</style>
