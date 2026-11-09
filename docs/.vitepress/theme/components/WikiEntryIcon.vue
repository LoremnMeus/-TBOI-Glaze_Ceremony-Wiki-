<script setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'
import rainbowMd from '../../../systems/rainbow.md?raw'

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
  'special-destinations': { zh: '特殊目的地', en: 'Special Destinations' },
  rainbow: { zh: '彩虹', en: 'Rainbow' },
  'blueprint-air-flight': { zh: '蓝图与机群', en: 'Blueprint & Fleet' },
  'control-hub': { zh: '控制中枢', en: 'Control Hub' },
  'death-certificate-knowledge': { zh: '知识与遐想', en: 'Knowledge & Reverie' },
  'permanent-effects': { zh: '永久', en: 'Permanent Effects' },
}

const CYCLE_MS = 1000

function parseRainbowSlugs(md) {
  const text = String(md || '')
  const heading = text.match(/^##\s+当前条目\s*$/m)
  let section = text
  if (heading && heading.index != null) {
    const rest = text.slice(heading.index + heading[0].length)
    const next = rest.match(/^##\s+/m)
    section = next && next.index != null ? rest.slice(0, next.index) : rest
  }
  const slugs = []
  for (const match of section.matchAll(/\{\{\s*Item:\s*([A-Za-z0-9_-]+)\s*\}\}/g)) {
    const slug = String(match[1] || '').trim().toLowerCase()
    if (slug && !slugs.includes(slug)) slugs.push(slug)
  }
  return slugs
}

const RAINBOW_SLUGS = parseRainbowSlugs(rainbowMd)

const props = defineProps({
  name: { type: String, required: true },
})

const { lang } = useData()
const cycleIndex = ref(0)
let cycleTimer = null

const parsed = computed(() => {
  const raw = (props.name || '').trim()
  const match = raw.match(/^(Item|Trinket|Card|Character|Challenge|Pickup|Slot|System|Wiki)[:/]\s*(.+)$/i)
  let token = (match ? match[2] : raw).trim()
  let customLabel = null
  const pipe = token.indexOf('|')
  if (pipe >= 0) {
    customLabel = token.slice(pipe + 1).trim() || null
    token = token.slice(0, pipe).trim()
  }
  if (match?.[1]?.toLowerCase() === 'system' && SYSTEMS[token]) {
    return {
      row: { kind: 'system', slug: token, internalKey: token, names: SYSTEMS[token] },
      token,
      customLabel,
    }
  }
  const rows = catalog.entries || []
  const row =
    rows.find((entry) => entry.slug === token) ||
    rows.find((entry) => entry.internalKey === token) ||
    null
  return { row, token, customLabel }
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
  if (parsed.value.customLabel) return parsed.value.customLabel
  if (!row) return parsed.value.token
  const english = String(lang.value || '').startsWith('en')
  if (english) return row.names?.en || row.names?.zh || row.internalKey
  return row.names?.zh || row.names?.en || row.internalKey
})

const cycleSources = computed(() => {
  const row = parsed.value.row
  if (!row || row.kind !== 'system') return []
  const slugs =
    row.slug === 'rainbow'
      ? (RAINBOW_SLUGS.length ? RAINBOW_SLUGS : catalog.systemIconCycles?.rainbow || [])
      : catalog.systemIconCycles?.[row.slug] || []
  if (!slugs.length) return []
  const rows = catalog.entries || []
  return slugs
    .map((slug) => {
      const entry = rows.find((item) => item.slug === slug)
      if (!entry) return ''
      return withBase(entry.thumb32 || entry.icon || entry.portrait || '')
    })
    .filter(Boolean)
})

const src = computed(() => {
  const row = parsed.value.row
  if (!row) return ''
  if (cycleSources.value.length) {
    return cycleSources.value[cycleIndex.value % cycleSources.value.length] || ''
  }
  // Slots: prefer full / 64px composites; CSS still draws at 32px.
  if (row.kind === 'slot') {
    return withBase(row.icon || row.thumb64 || row.thumb32 || row.portrait || '')
  }
  return withBase(row.thumb32 || row.icon || row.portrait || '')
})

function clearCycleTimer() {
  if (cycleTimer) {
    clearInterval(cycleTimer)
    cycleTimer = null
  }
}

watch(
  cycleSources,
  (sources) => {
    clearCycleTimer()
    cycleIndex.value = 0
    if (sources.length <= 1) return
    cycleTimer = setInterval(() => {
      cycleIndex.value = (cycleIndex.value + 1) % sources.length
    }, CYCLE_MS)
  },
  { immediate: true },
)

onUnmounted(() => {
  clearCycleTimer()
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
/* Keep label on the surrounding text baseline. Do not use inline-flex +
   align-items:center — that vertically centers the label with the 32px icon
   and lifts the link text above neighboring copy. */
.wiki-entry-icon {
  display: inline;
  margin: 0;
  padding: 0;
  font-weight: inherit;
  font-style: inherit;
  line-height: inherit;
  text-decoration: none;
  white-space: nowrap;
  max-width: 100%;
}
.wiki-entry-icon img {
  display: inline;
  width: 32px;
  height: 32px;
  margin: 0 0.2rem 0 0;
  padding: 0;
  border: 0;
  image-rendering: pixelated;
  vertical-align: middle;
}
.wiki-entry-icon > span {
  font-weight: inherit;
  font-style: inherit;
  line-height: inherit;
}
</style>
