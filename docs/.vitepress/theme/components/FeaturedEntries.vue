<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { homeFeatured } from '../data/homeFeatured.js'
import { resolveHomeEntry, homeEntryName, homeEntryPath, homeEntryImage } from '../data/homeEntries.js'

const props = defineProps({ lang: { type: String, default: 'zh' } })
const featured = computed(() => homeFeatured.map(resolveHomeEntry))
</script>

<template>
  <div v-if="featured.length" class="featured-list">
    <a v-for="entry in featured" :key="`${entry.kind}:${entry.slug}`"
      class="featured-entry" :class="{ 'featured-entry--character': entry.kind === 'character' }"
      :href="withBase(homeEntryPath(entry, props.lang))">
      <img v-if="homeEntryImage(entry)" :src="withBase(homeEntryImage(entry))"
        :alt="homeEntryName(entry, props.lang)" />
      <span>{{ homeEntryName(entry, props.lang) }}</span>
    </a>
  </div>
</template>

<style scoped>
.featured-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: .7rem; }
.featured-entry { display: flex; align-items: center; gap: .75rem; min-height: 84px;
  padding: .75rem; border: 1px solid var(--vp-c-divider); border-radius: 10px;
  background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); text-decoration: none; font-weight: 600; }
.featured-entry:hover { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); }
.featured-entry img { width: 64px; height: 64px; flex: none; object-fit: contain; image-rendering: pixelated; }
.featured-entry--character img { width: 82px; height: 82px; }
@media (max-width: 640px) {
  .featured-list { grid-template-columns: 1fr; }
}
</style>
