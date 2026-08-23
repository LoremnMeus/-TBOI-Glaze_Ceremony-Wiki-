<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'

const props = defineProps({
  lang: { type: String, default: 'zh' },
  kind: { type: String, default: '' },
})

const KIND_DIR = {
  collectible: 'items',
  trinket: 'trinkets',
  card: 'cards',
  character: 'characters',
  challenge: 'challenges',
  pickup: 'pickups',
  slot: 'slots',
}

const rows = computed(() =>
  (catalog.entries || []).filter((entry) => !props.kind || entry.kind === props.kind),
)

const atlas = computed(() => catalog.atlas || null)

function href(entry) {
  const folder = KIND_DIR[entry.kind] || entry.kind
  const prefix = props.lang === 'en' ? '/en' : ''
  return withBase(`${prefix}/${folder}/${entry.slug}`)
}

function label(entry) {
  return entry.names?.[props.lang] || entry.names?.zh || entry.internalKey
}

function atlasStyle(entry) {
  const frame = entry.atlas
  const sheet = atlas.value
  if (!frame || !sheet) return null
  const url = withBase(sheet.webp || sheet.png)
  return {
    width: '32px',
    height: '32px',
    backgroundImage: `url(${url})`,
    backgroundPosition: `-${frame.x}px -${frame.y}px`,
    backgroundRepeat: 'no-repeat',
    imageRendering: 'pixelated',
  }
}
</script>

<template>
  <div class="entry-grid">
    <a v-for="entry in rows" :key="entry.slug" class="entry-card" :href="href(entry)">
      <span class="entry-card__icon">
        <span
          v-if="atlasStyle(entry)"
          class="entry-card__atlas"
          :style="atlasStyle(entry)"
          :aria-label="label(entry)"
        />
        <img
          v-else-if="entry.thumb32 || entry.icon"
          :src="withBase(entry.thumb32 || entry.icon)"
          :alt="label(entry)"
          width="64"
          height="64"
          loading="lazy"
          decoding="async"
        />
      </span>
      <span>{{ label(entry) }}</span>
    </a>
    <p v-if="!rows.length">No public wiki entries yet.</p>
  </div>
</template>

<style scoped>
.entry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.75rem;
}
.entry-card {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.entry-card__icon {
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  overflow: hidden;
}
.entry-card img,
.entry-card__atlas {
  width: 64px;
  height: 64px;
  image-rendering: pixelated;
}
.entry-card__atlas {
  display: block;
  width: 32px;
  height: 32px;
  transform: scale(2);
  transform-origin: top left;
}
</style>
