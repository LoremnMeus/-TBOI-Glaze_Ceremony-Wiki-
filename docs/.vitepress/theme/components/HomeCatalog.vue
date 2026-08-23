<script setup>
import { computed } from 'vue'
import catalog from '../../../generated/entries.json'
import EntryGrid from './EntryGrid.vue'

const props = defineProps({
  lang: { type: String, default: 'zh' },
})

const english = computed(() => props.lang === 'en')

const GROUPS = [
  { kind: 'collectible', zh: '道具', en: 'Items', open: true },
  { kind: 'trinket', zh: '饰品', en: 'Trinkets', open: false },
  { kind: 'card', zh: '卡牌', en: 'Cards', open: false },
  { kind: 'character', zh: '角色', en: 'Characters', open: false },
  { kind: 'challenge', zh: '挑战', en: 'Challenges', open: false },
  { kind: 'pickup', zh: '掉落物', en: 'Pickups', open: false },
  { kind: 'slot', zh: '可互动实体', en: 'Slots', open: false },
]

const counts = computed(() => {
  const map = {}
  for (const entry of catalog.entries || []) {
    map[entry.kind] = (map[entry.kind] || 0) + 1
  }
  return map
})

function title(group) {
  return english.value ? group.en : group.zh
}
</script>

<template>
  <div class="home-catalog">
    <details
      v-for="group in GROUPS"
      :key="group.kind"
      class="home-catalog__group"
      :open="group.open"
    >
      <summary>
        <span class="home-catalog__title">{{ title(group) }}</span>
        <span class="home-catalog__count">{{ counts[group.kind] || 0 }}</span>
      </summary>
      <EntryGrid :lang="lang" :kind="group.kind" />
    </details>
  </div>
</template>

<style scoped>
.home-catalog {
  display: grid;
  gap: 0.75rem;
  margin-top: 0.5rem;
}
.home-catalog__group {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  padding: 0.15rem 0.85rem 0.85rem;
}
.home-catalog__group[open] {
  padding-bottom: 1rem;
}
.home-catalog__group summary {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  cursor: pointer;
  list-style: none;
  padding: 0.7rem 0;
  font-weight: 600;
  font-size: 1.05rem;
}
.home-catalog__group summary::-webkit-details-marker {
  display: none;
}
.home-catalog__group summary::before {
  content: '▸';
  color: var(--vp-c-text-2);
  width: 1rem;
}
.home-catalog__group[open] summary::before {
  content: '▾';
}
.home-catalog__count {
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 0.9rem;
  margin-left: auto;
}
.home-catalog :deep(.entry-grid) {
  margin-top: 0.15rem;
}
</style>
