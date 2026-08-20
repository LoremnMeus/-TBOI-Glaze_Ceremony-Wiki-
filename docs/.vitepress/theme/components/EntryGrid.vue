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
}

const rows = computed(() =>
  (catalog.entries || []).filter((entry) => !props.kind || entry.kind === props.kind),
)

function href(entry) {
  const folder = KIND_DIR[entry.kind] || entry.kind
  const prefix = props.lang === 'en' ? '/en' : ''
  return withBase(`${prefix}/${folder}/${entry.slug}`)
}

function label(entry) {
  return entry.names?.[props.lang] || entry.names?.zh || entry.internalKey
}
</script>

<template>
  <div class="entry-grid">
    <a v-for="entry in rows" :key="entry.slug" class="entry-card" :href="href(entry)">
      <img v-if="entry.icon" :src="withBase(entry.icon)" :alt="label(entry)" />
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
.entry-card img {
  width: 32px;
  height: 32px;
  image-rendering: pixelated;
}
</style>
