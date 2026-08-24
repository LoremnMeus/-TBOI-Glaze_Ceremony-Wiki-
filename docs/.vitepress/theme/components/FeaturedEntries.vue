<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'
import pageStatus from '../../../generated/page-status.json'

const props = defineProps({
  lang: { type: String, default: 'zh' },
})

const folderByKind = {
  collectible: 'items',
  trinket: 'trinkets',
  card: 'cards',
  character: 'characters',
  challenge: 'challenges',
  pickup: 'pickups',
  slot: 'slots',
}

const featured = computed(() => {
  const statusBySlug = new Map((pageStatus.pages || []).map((row) => [row.slug, row]))
  const key = props.lang === 'en' ? 'enStatus' : 'zhStatus'
  return (catalog.entries || []).filter((entry) => statusBySlug.get(entry.slug)?.[key] === 'featured')
})

function label(entry) {
  return entry.names?.[props.lang] || entry.names?.zh || entry.internalKey
}

function href(entry) {
  const prefix = props.lang === 'en' ? '/en' : ''
  return withBase(`${prefix}/${folderByKind[entry.kind] || entry.kind}/${entry.slug}`)
}

function image(entry) {
  if (entry.kind === 'character') return entry.portrait || entry.icon || entry.thumb64
  return entry.thumb64 || entry.icon || entry.thumb32
}
</script>

<template>
  <div v-if="featured.length" class="featured-entries">
    <a v-for="entry in featured" :key="entry.slug" :href="href(entry)" class="featured-entry">
      <img v-if="image(entry)" :src="withBase(image(entry))" :alt="label(entry)" width="56" height="56" />
      <span>{{ label(entry) }}</span>
    </a>
  </div>
  <p v-else class="featured-empty">
    {{ props.lang === 'en' ? 'Featured pages will appear here after review.' : '经过完整审阅的精选页面将在这里出现。' }}
  </p>
</template>

<style scoped>
.featured-entries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}
.featured-entry {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  font-weight: 600;
  text-decoration: none;
}
.featured-entry img {
  width: 56px;
  height: 56px;
  object-fit: contain;
  image-rendering: pixelated;
}
.featured-empty {
  color: var(--vp-c-text-2);
}
</style>
