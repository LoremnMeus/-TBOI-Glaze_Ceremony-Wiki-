<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'
import MissingTranslation from './MissingTranslation.vue'
import EidMarkup from './EidMarkup.vue'

const props = defineProps({
  slug: { type: String, required: true },
  lang: { type: String, default: 'zh' },
})

const entry = computed(() =>
  (catalog.entries || []).find((row) => row.slug === props.slug) || null,
)

const name = computed(() => {
  if (!entry.value) return props.slug
  return entry.value.names?.[props.lang] || entry.value.names?.zh || entry.value.internalKey
})

const desc = computed(() => entry.value?.desc?.[props.lang] || '')
const eid = computed(() => entry.value?.eid?.[props.lang] || '')
const missingEnglish = computed(
  () => props.lang === 'en' && (!desc.value || !eid.value),
)
</script>

<template>
  <div v-if="entry" class="public-entry">
    <div class="public-entry__header">
      <img
        v-if="entry.icon"
        class="public-entry__icon"
        :src="withBase(entry.icon)"
        :alt="name"
      />
      <div>
        <p class="public-entry__meta">
          {{ entry.kind }}
          <template v-if="entry.xmlId != null"> · XML {{ entry.xmlId }}</template>
          <template v-if="entry.itemType"> · {{ entry.itemType }}</template>
        </p>
        <h1>{{ name }}</h1>
        <p class="public-entry__keys">
          <code>{{ entry.internalKey }}</code>
          <code>{{ entry.slug }}</code>
          <span>v{{ catalog.version }}</span>
        </p>
      </div>
    </div>
    <section v-if="desc">
      <h2>{{ lang === 'en' ? 'Pickup subtitle' : '拾取副标题' }}</h2>
      <p>{{ desc }}</p>
    </section>
    <section v-if="eid">
      <h2>EID</h2>
      <EidMarkup :text="eid" />
    </section>
    <MissingTranslation v-if="missingEnglish" />
  </div>
  <p v-else>Missing generated entry for <code>{{ slug }}</code>. Re-run <code>export_wiki_data.py</code>.</p>
</template>

<style scoped>
.public-entry__header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}
.public-entry__icon {
  width: 64px;
  height: 64px;
  image-rendering: pixelated;
}
.public-entry__meta,
.public-entry__keys {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
.public-entry__keys {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}
</style>
