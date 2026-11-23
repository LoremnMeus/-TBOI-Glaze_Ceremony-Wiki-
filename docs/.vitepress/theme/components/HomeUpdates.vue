<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { homeUpdates } from '../data/homeUpdates.js'
import { resolveHomeEntry, homeEntryName, homeEntryPath, homeEntryImage } from '../data/homeEntries.js'

const props = defineProps({ lang: { type: String, default: 'zh' } })

const KIND_LABELS = {
  collectible: { zh: '道具', en: 'Item' },
  trinket: { zh: '饰品', en: 'Trinket' },
  card: { zh: '卡牌', en: 'Card' },
  character: { zh: '角色', en: 'Character' },
  challenge: { zh: '挑战', en: 'Challenge' },
  pickup: { zh: '掉落物', en: 'Pickup' },
  slot: { zh: '乞丐 / 机器', en: 'Slot' },
}

const CHANGE_LABELS = {
  new: { zh: '新增', en: 'New' },
  updated: { zh: '更新', en: 'Updated' },
}

function formatDate(iso, lang) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '')
  if (!m) return iso || ''
  const year = Number(m[1])
  const month = Number(m[2])
  const day = Number(m[3])
  if (lang === 'en') {
    return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    })
  }
  return `${month}月${day}日`
}

// Keep generator order (new/updated soft-quota mix). Do not re-sort by date alone.
const updates = computed(() => homeUpdates
  .slice(0, 4)
  .map((update) => ({ ...update, entry: resolveHomeEntry(update) })))
</script>

<template>
  <div v-if="updates.length" class="home-updates">
    <a
      v-for="(update, index) in updates"
      :key="`${update.changeType}:${update.date}:${update.kind}:${update.slug}:${index}`"
      class="home-update"
      :href="withBase(homeEntryPath(update.entry, props.lang))"
    >
      <img
        v-if="homeEntryImage(update.entry)"
        :src="withBase(homeEntryImage(update.entry))"
        :alt="homeEntryName(update.entry, props.lang)"
      />
      <span class="home-update__body">
        <strong>{{ homeEntryName(update.entry, props.lang) }}</strong>
        <span
          class="home-update__badge"
          :data-kind="update.changeType === 'new' ? 'new' : 'updated'"
        >
          {{ CHANGE_LABELS[update.changeType]?.[props.lang] || CHANGE_LABELS.updated[props.lang] }}
        </span>
        <span class="home-update__meta">
          {{ KIND_LABELS[update.kind]?.[props.lang] || update.kind }}
          ·
          {{ formatDate(update.date, props.lang) }}
        </span>
      </span>
    </a>
  </div>
</template>

<style scoped>
.home-updates {
  display: grid;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}
.home-update {
  display: flex;
  align-items: center;
  gap: .8rem;
  padding: .65rem .85rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.home-update + .home-update { border-top: 1px solid var(--vp-c-divider); }
.home-update:hover { background: var(--vp-c-brand-soft); }
.home-update img {
  width: 48px;
  height: 48px;
  flex: none;
  object-fit: contain;
  image-rendering: pixelated;
}
.home-update__body { display: grid; min-width: 0; gap: .1rem; }
.home-update__badge {
  width: fit-content;
  font-size: .78rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: .02em;
}
.home-update__badge[data-kind='new'] { color: var(--vp-c-brand-1); }
.home-update__badge[data-kind='updated'] { color: var(--vp-c-text-2); }
.home-update__meta { color: var(--vp-c-text-2); font-size: .88rem; line-height: 1.4; }
@media (max-width: 640px) {
  .home-update { align-items: flex-start; }
}
</style>
