<script setup>
import { computed } from 'vue'
import catalog from '../../../generated/entries.json'
import MissingTranslation from './MissingTranslation.vue'
import EidMarkup from './EidMarkup.vue'
import EntryInfobox from './EntryInfobox.vue'
import { TAG_LABEL } from '../tagLabels'

const props = defineProps({
  slug: { type: String, required: true },
  lang: { type: String, default: 'zh' },
})

const english = computed(() => props.lang === 'en')

const CONDITIONAL_EID_FIELDS = [
  { key: 'bookOfVirtues', prefix: '{{Collectible:584}}' },
  { key: 'bookOfBelial', prefix: '{{Collectible:34}}' },
  { key: 'abyssSynic', prefix: '{{Collectible:706}}' },
  { key: 'seijaBuff', prefix: '{{Seija}}' },
  { key: 'seijaNerf', prefix: '{{Seija}}' },
]

const entry = computed(() =>
  (catalog.entries || []).find((row) => row.slug === props.slug) || null,
)

const name = computed(() => {
  if (!entry.value) return props.slug
  return entry.value.names?.[props.lang] || entry.value.names?.zh || entry.value.internalKey
})

const desc = computed(() => entry.value?.desc?.[props.lang] || '')
const eid = computed(() => entry.value?.eid?.[props.lang] || '')

const conditionalEidLines = computed(() => {
  if (!entry.value) return []
  return CONDITIONAL_EID_FIELDS.flatMap(({ key, prefix }) => {
    const raw = entry.value?.[key]?.[props.lang] || ''
    if (!raw) return []
    return [`${prefix} ${raw}`]
  })
})

const hasEidSection = computed(() => Boolean(eid.value || conditionalEidLines.value.length))

const missingEnglish = computed(() => {
  if (props.lang !== 'en' || !entry.value) return false
  if (entry.value.kind === 'challenge' || entry.value.kind === 'pickup' || entry.value.kind === 'slot') {
    return !eid.value
  }
  return !desc.value || !eid.value
})
const tags = computed(() => (entry.value?.tags || []).filter(Boolean))
const displayCharacterEntry = computed(() => {
  const slug = entry.value?.displayCharacter
  if (!slug) return null
  return (catalog.entries || []).find((row) => row.kind === 'character' && row.slug === slug) || null
})
const infoboxIconName = computed(() => {
  if (entry.value?.kind === 'challenge' && entry.value?.portrait) return ''
  if (entry.value?.kind !== 'challenge' || !displayCharacterEntry.value) return ''
  return `QingPlayer:${displayCharacterEntry.value.internalKey}`
})
const infoboxIconSrc = computed(() => {
  const row = entry.value
  if (!row) return ''
  if (row.kind === 'challenge' && row.portrait) return row.portrait
  if (infoboxIconName.value) return ''
  return row.kind === 'character' ? (row.portrait || row.icon) : (row.thumb64 || row.icon || row.portrait)
})

</script>

<template>
  <div v-if="entry" class="public-entry">
    <div class="public-entry__overview">
      <div class="public-entry__main">
        <h1>{{ name }}</h1>
        <p v-if="tags.length" class="public-entry__tags">
          <span v-for="tag in tags" :key="tag" class="public-entry__tag" :title="tag">
            {{ TAG_LABEL[tag]?.[english ? 'en' : 'zh'] || tag }}
          </span>
        </p>
        <section v-if="hasEidSection" class="public-entry__eid" :aria-label="english ? 'In-game description' : '游戏内说明'">
          <strong class="public-entry__eid-label">{{ english ? 'In-game description' : '游戏内说明' }}</strong>
          <EidMarkup v-if="eid" :text="eid" :labeled-icons="false" />
          <details v-if="conditionalEidLines.length" class="public-entry__eid-conditions" open>
            <summary>
              {{ english ? 'Conditional lines' : '特定情况下显示' }}
              <span class="public-entry__eid-count">({{ conditionalEidLines.length }})</span>
            </summary>
            <EidMarkup
              v-for="(line, index) in conditionalEidLines"
              :key="index"
              :text="line"
              :labeled-icons="false"
            />
          </details>
        </section>
      </div>
      <EntryInfobox :entry="entry" :lang="lang" :name="name" :icon-src="infoboxIconSrc" :icon-name="infoboxIconName" />
    </div>
    <MissingTranslation v-if="missingEnglish" />
  </div>
  <p v-else>Missing generated entry for <code>{{ slug }}</code>. Re-run <code>export_wiki_data.py</code>.</p>
</template>

<style scoped>
.public-entry__overview { display: grid; grid-template-columns: minmax(0, 1fr) minmax(17rem, 19rem); gap: 1.5rem; align-items: start; margin-bottom: 1.5rem; }
.public-entry__main { min-width: 0; }
.public-entry__main h1 {
  margin: 0.15rem 0 0.35rem;
}
.public-entry__pickup {
  margin: 0 0 0.45rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}
.public-entry__eid { margin: 1rem 0 0; padding: .8rem 1rem; border-left: 3px solid var(--vp-c-brand-1); border-radius: 6px; background: var(--vp-c-bg-soft); }
.public-entry__eid-label { display: block; margin-bottom: .4rem; color: var(--vp-c-text-2); font-size: .78rem; letter-spacing: .04em; text-transform: uppercase; }
.public-entry__eid-conditions {
  margin-top: 0.55rem;
  padding-top: 0.45rem;
  border-top: 1px dashed var(--vp-c-divider);
}
.public-entry__eid-conditions > summary {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  list-style: none;
  color: var(--vp-c-text-2);
  font-size: 0.82rem;
  font-weight: 600;
  user-select: none;
}
.public-entry__eid-conditions > summary::-webkit-details-marker {
  display: none;
}
.public-entry__eid-conditions > summary::before {
  content: '▸';
  color: var(--vp-c-text-2);
  width: 0.85rem;
  flex: 0 0 auto;
}
.public-entry__eid-conditions[open] > summary::before {
  content: '▾';
}
.public-entry__eid-count {
  font-weight: 500;
}
.public-entry__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  margin: 0.45rem 0 0;
}
.public-entry__tag {
  display: inline-flex;
  align-items: center;
  padding: 0.05rem 0.45rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 0.78rem;
  line-height: 1.4;
}
@media (max-width: 820px) { .public-entry__overview { grid-template-columns: 1fr; } }
</style>
