<script setup>
import { computed } from 'vue'
import catalog from '../../../generated/entries.json'
import MissingTranslation from './MissingTranslation.vue'
import EidMarkup from './EidMarkup.vue'
import EntryInfobox from './EntryInfobox.vue'

const props = defineProps({
  slug: { type: String, required: true },
  lang: { type: String, default: 'zh' },
})

const english = computed(() => props.lang === 'en')

const TAG_LABEL = {
  summonable: { zh: '可召唤', en: 'Summonable' },
  offensive: { zh: '攻击性', en: 'Offensive' },
  devil: { zh: '恶魔', en: 'Devil' },
  angel: { zh: '天使', en: 'Angel' },
  book: { zh: '书', en: 'Book' },
  quest: { zh: '任务', en: 'Quest' },
  nogreed: { zh: '贪婪禁用', en: 'No greed' },
  noeden: { zh: '伊甸除外', en: 'No Eden' },
  lazarusshared: { zh: '拉萨路共享', en: 'Lazarus shared' },
  mushroom: { zh: '蘑菇', en: 'Mushroom' },
  baby: { zh: '宝宝', en: 'Baby' },
  syringe: { zh: '针筒', en: 'Syringe' },
  food: { zh: '食物', en: 'Food' },
  mom: { zh: '妈妈', en: 'Mom' },
  guppy: { zh: '加普', en: 'Guppy' },
  fly: { zh: '苍蝇', en: 'Fly' },
  tech: { zh: '科技', en: 'Tech' },
  unique: { zh: '独特', en: 'Unique' },
  teardrop: { zh: '泪滴', en: 'Tear' },
  nolostbr: { zh: '游魂无长子名分', en: 'No Lost BR' },
  dead: { zh: '死灵', en: 'Dead' },
  poop: { zh: '大便', en: 'Poop' },
  stars: { zh: '星星', en: 'Stars' },
  battery: { zh: '电池', en: 'Battery' },
  bob: { zh: '鲍勃', en: 'Bob' },
}

const entry = computed(() =>
  (catalog.entries || []).find((row) => row.slug === props.slug) || null,
)

const name = computed(() => {
  if (!entry.value) return props.slug
  return entry.value.names?.[props.lang] || entry.value.names?.zh || entry.value.internalKey
})

const desc = computed(() => entry.value?.desc?.[props.lang] || '')
const eid = computed(() => entry.value?.eid?.[props.lang] || '')
const seijaBuff = computed(() => {
  const raw = entry.value?.seijaBuff?.[props.lang] || ''
  return raw ? `{{Seija}} ${raw}` : ''
})
const seijaNerf = computed(() => {
  const raw = entry.value?.seijaNerf?.[props.lang] || ''
  return raw ? `{{Seija}} ${raw}` : ''
})
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
  if (entry.value?.kind !== 'challenge' || !displayCharacterEntry.value) return ''
  return `QingPlayer:${displayCharacterEntry.value.internalKey}`
})
const infoboxIconSrc = computed(() => {
  const row = entry.value
  if (!row || infoboxIconName.value) return ''
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
        <section v-if="eid || seijaBuff || seijaNerf" class="public-entry__eid" :aria-label="english ? 'In-game description' : '游戏内说明'">
          <strong class="public-entry__eid-label">{{ english ? 'In-game description' : '游戏内说明' }}</strong>
          <EidMarkup v-if="eid" :text="eid" />
          <EidMarkup v-if="seijaBuff" :text="seijaBuff" />
          <EidMarkup v-if="seijaNerf" :text="seijaNerf" />
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
