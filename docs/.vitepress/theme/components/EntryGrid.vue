<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'
import { tagLabel } from '../tagLabels'

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

const ITEM_TYPE_LABELS = {
  active: { zh: '主动', en: 'Active' },
  passive: { zh: '被动', en: 'Passive' },
  familiar: { zh: '跟班', en: 'Familiar' },
}

const en = computed(() => props.lang === 'en')
const query = ref('')
const qualityFilter = ref('all')
const tagFilter = ref('all')
const typeFilter = ref('all')

const allRows = computed(() =>
  (catalog.entries || []).filter((entry) => !props.kind || entry.kind === props.kind),
)

const isCollectibleIndex = computed(() => props.kind === 'collectible')

const questRows = computed(() =>
  isCollectibleIndex.value
    ? allRows.value.filter((entry) => (entry.tags || []).includes('quest'))
    : [],
)

const normalPool = computed(() =>
  isCollectibleIndex.value
    ? allRows.value.filter((entry) => !(entry.tags || []).includes('quest'))
    : allRows.value,
)

const availableTags = computed(() => {
  const set = new Set()
  for (const entry of normalPool.value) {
    for (const tag of entry.tags || []) {
      if (tag && tag !== 'quest') set.add(tag)
    }
  }
  return [...set].sort((a, b) => tagLabel(a, props.lang).localeCompare(tagLabel(b, props.lang), props.lang === 'en' ? 'en' : 'zh'))
})

const availableQualities = computed(() => {
  const set = new Set()
  for (const entry of normalPool.value) {
    if (entry.quality != null) set.add(Number(entry.quality))
  }
  return [...set].sort((a, b) => a - b)
})

function matchesFilters(entry) {
  if (qualityFilter.value !== 'all' && Number(entry.quality) !== Number(qualityFilter.value)) return false
  if (typeFilter.value !== 'all' && entry.itemType !== typeFilter.value) return false
  if (tagFilter.value !== 'all' && !(entry.tags || []).includes(tagFilter.value)) return false
  const q = query.value.trim().toLowerCase()
  if (!q) return true
  const hay = [
    entry.names?.zh,
    entry.names?.en,
    entry.slug,
    entry.internalKey,
    entry.xmlName,
    ...(entry.aliases?.zh || []),
    ...(entry.aliases?.en || []),
    ...(entry.tags || []).map((tag) => tagLabel(tag, 'zh')),
    ...(entry.tags || []).map((tag) => tagLabel(tag, 'en')),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  return hay.includes(q)
}

const filteredNormal = computed(() => normalPool.value.filter(matchesFilters))
const filteredQuest = computed(() => questRows.value.filter(matchesFilters))

const atlas = computed(() => catalog.atlas || null)

function href(entry) {
  const folder = KIND_DIR[entry.kind] || entry.kind
  const prefix = props.lang === 'en' ? '/en' : ''
  return withBase(`${prefix}/${folder}/${entry.slug}`)
}

function label(entry) {
  return entry.names?.[props.lang] || entry.names?.zh || entry.internalKey
}

function imageSrc(entry) {
  if (entry.kind === 'character') return entry.portrait || entry.icon || entry.thumb64
  if (entry.kind === 'challenge') return entry.thumb32 || entry.thumb64 || entry.icon
  return entry.thumb32 || entry.icon || entry.thumb64
}

function atlasStyle(entry) {
  if (entry.kind === 'character') return null
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

function resetFilters() {
  query.value = ''
  qualityFilter.value = 'all'
  tagFilter.value = 'all'
  typeFilter.value = 'all'
}
</script>

<template>
  <div class="entry-grid-wrap">
    <div v-if="isCollectibleIndex" class="entry-filters">
      <input
        v-model="query"
        class="entry-filters__search"
        type="search"
        :placeholder="en ? 'Search items…' : '搜索道具名称 / 别名 / 标签…'"
      />
      <select v-model="typeFilter" class="entry-filters__select" :aria-label="en ? 'Item type' : '道具类型'">
        <option value="all">{{ en ? 'All types' : '全部类型' }}</option>
        <option v-for="(row, key) in ITEM_TYPE_LABELS" :key="key" :value="key">
          {{ row[en ? 'en' : 'zh'] }}
        </option>
      </select>
      <select v-model="qualityFilter" class="entry-filters__select" :aria-label="en ? 'Quality' : '品质'">
        <option value="all">{{ en ? 'All qualities' : '全部品质' }}</option>
        <option v-for="q in availableQualities" :key="q" :value="String(q)">
          {{ en ? `Quality ${q}` : `品质 ${q}` }}
        </option>
      </select>
      <select v-model="tagFilter" class="entry-filters__select" :aria-label="en ? 'Tag' : '标签'">
        <option value="all">{{ en ? 'All tags' : '全部标签' }}</option>
        <option v-for="tag in availableTags" :key="tag" :value="tag">
          {{ tagLabel(tag, lang) }}
        </option>
      </select>
      <button type="button" class="entry-filters__reset" @click="resetFilters">
        {{ en ? 'Reset' : '重置' }}
      </button>
      <p class="entry-filters__count">
        {{ en
          ? `${filteredNormal.length} items` + (filteredQuest.length ? ` · ${filteredQuest.length} quest` : '')
          : `${filteredNormal.length} 件道具` + (filteredQuest.length ? ` · ${filteredQuest.length} 件任务道具` : '') }}
      </p>
    </div>

    <div class="entry-grid">
      <a
        v-for="entry in (isCollectibleIndex ? filteredNormal : allRows)"
        :key="entry.slug"
        class="entry-card"
        :class="{ 'entry-card--hidden': entry.hidden }"
        :href="href(entry)"
      >
        <span class="entry-card__icon">
          <span
            v-if="atlasStyle(entry)"
            class="entry-card__atlas"
            :style="atlasStyle(entry)"
            :aria-label="label(entry)"
          />
          <img
            v-else-if="imageSrc(entry)"
            :src="withBase(imageSrc(entry))"
            :alt="label(entry)"
            width="64"
            height="64"
            loading="lazy"
            decoding="async"
          />
        </span>
        <span class="entry-card__meta">
          <span class="entry-card__name">{{ label(entry) }}</span>
          <span v-if="entry.hidden" class="entry-card__badge">{{ en ? 'Hidden' : '隐藏' }}</span>
          <span v-else-if="entry.quality != null" class="entry-card__quality">Q{{ entry.quality }}</span>
        </span>
      </a>
      <p v-if="!(isCollectibleIndex ? filteredNormal : allRows).length">
        {{ en ? 'No matching entries.' : '没有符合条件的条目。' }}
      </p>
    </div>

    <section v-if="isCollectibleIndex && filteredQuest.length" class="entry-quest">
      <header>
        <h2>{{ en ? 'Quest items' : '任务道具' }}</h2>
        <p>{{ en ? 'Separated from the normal pool — usually unobtainable by rerolls or random generation.' : '从普通列表拆出；通常不会被重随或随机生成拿到。' }}</p>
      </header>
      <div class="entry-grid">
        <a
          v-for="entry in filteredQuest"
          :key="entry.slug"
          class="entry-card entry-card--quest"
          :class="{ 'entry-card--hidden': entry.hidden }"
          :href="href(entry)"
        >
          <span class="entry-card__icon">
            <span
              v-if="atlasStyle(entry)"
              class="entry-card__atlas"
              :style="atlasStyle(entry)"
              :aria-label="label(entry)"
            />
            <img
              v-else-if="imageSrc(entry)"
              :src="withBase(imageSrc(entry))"
              :alt="label(entry)"
              width="64"
              height="64"
              loading="lazy"
              decoding="async"
            />
          </span>
          <span class="entry-card__meta">
            <span class="entry-card__name">{{ label(entry) }}</span>
            <span class="entry-card__badge entry-card__badge--quest">{{ en ? 'Quest' : '任务' }}</span>
            <span v-if="entry.hidden" class="entry-card__badge">{{ en ? 'Hidden' : '隐藏' }}</span>
          </span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.entry-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  align-items: center;
  margin-bottom: 1rem;
}
.entry-filters__search {
  flex: 1 1 14rem;
  min-width: 10rem;
  padding: 0.45rem 0.65rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}
.entry-filters__select,
.entry-filters__reset {
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}
.entry-filters__reset {
  cursor: pointer;
}
.entry-filters__count {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}
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
  text-decoration: none;
  color: inherit;
}
.entry-card--hidden {
  border-style: dashed;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 80%, transparent);
}
.entry-card--quest {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 35%, var(--vp-c-divider));
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
.entry-card img {
  object-fit: contain;
}
.entry-card__atlas {
  display: block;
  width: 32px;
  height: 32px;
  transform: scale(2);
  transform-origin: top left;
}
.entry-card__meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}
.entry-card__name {
  line-height: 1.25;
}
.entry-card__badge,
.entry-card__quality {
  align-self: flex-start;
  padding: 0.05rem 0.4rem;
  border-radius: 999px;
  font-size: 0.72rem;
  line-height: 1.35;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.entry-card__badge--quest {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 50%, var(--vp-c-divider));
  color: var(--vp-c-brand-1);
}
.entry-quest {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--vp-c-divider);
}
.entry-quest header {
  margin-bottom: 0.9rem;
}
.entry-quest h2 {
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
}
.entry-quest p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
}
</style>
