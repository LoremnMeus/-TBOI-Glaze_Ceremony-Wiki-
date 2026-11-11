<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { homeUpdates } from '../data/homeUpdates.js'
import { resolveHomeEntry, homeEntryName, homeEntryPath, homeEntryImage } from '../data/homeEntries.js'

const props = defineProps({ lang: { type: String, default: 'zh' } })
const updates = computed(() => [...homeUpdates]
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((update) => ({ ...update, entry: resolveHomeEntry(update) }))
  .slice(0, 4))
</script>

<template>
  <div v-if="updates.length" class="home-updates">
    <a v-for="(update, index) in updates" :key="`${update.date}:${update.kind}:${update.slug}:${index}`"
      class="home-update" :href="withBase(homeEntryPath(update.entry, props.lang))">
      <img v-if="homeEntryImage(update.entry)" :src="withBase(homeEntryImage(update.entry))"
        :alt="homeEntryName(update.entry, props.lang)" />
      <span class="home-update__body">
        <strong>{{ homeEntryName(update.entry, props.lang) }}</strong>
        <span class="home-update__meta">{{ update.date }} · {{ update.summary[props.lang] }}</span>
      </span>
    </a>
  </div>
</template>

<style scoped>
.home-updates { display: grid; border: 1px solid var(--vp-c-divider);
  border-radius: 10px; background: var(--vp-c-bg-soft); overflow: hidden; }
.home-update { display: flex; align-items: center; gap: .8rem; padding: .65rem .85rem;
  color: var(--vp-c-text-1); text-decoration: none; }
.home-update + .home-update { border-top: 1px solid var(--vp-c-divider); }
.home-update:hover { background: var(--vp-c-brand-soft); }
.home-update img { width: 48px; height: 48px; flex: none; object-fit: contain; image-rendering: pixelated; }
.home-update__body { display: grid; min-width: 0; gap: .12rem; }
.home-update__meta { color: var(--vp-c-text-2); font-size: .88rem; line-height: 1.4; }
@media (max-width: 640px) { .home-update { align-items: flex-start; } }
</style>
