<script setup>
import { computed } from 'vue'
import EntryGrid from './EntryGrid.vue'

const props = defineProps({
  lang: { type: String, default: 'zh' },
  kind: { type: String, required: true },
})

const copy = {
  collectible: { zh: ['道具', '浏览琉璃圣典中的主动道具、被动道具与跟班。'], en: ['Items', 'Browse active items, passive items, and familiars in Glaze Ceremony.'] },
  trinket: { zh: ['饰品', '浏览提供持续效果或特殊规则的饰品。'], en: ['Trinkets', 'Browse trinkets with persistent effects and special rules.'] },
  card: { zh: ['卡牌', '浏览普通卡牌、透特牌与其他口袋道具。'], en: ['Cards', 'Browse cards, Thoth Cards, and other pocket items.'] },
  character: { zh: ['角色', '了解原创角色的核心玩法、操作与专属系统。'], en: ['Characters', 'Explore the core gameplay, controls, and systems of original characters.'] },
  challenge: { zh: ['挑战', '查看挑战目标，以及它们如何替换或重构角色规则。'], en: ['Challenges', 'Explore challenge goals and how they replace or reshape character rules.'] },
  pickup: { zh: ['掉落物', '浏览自定义拾取物及其所属内容家族。'], en: ['Pickups', 'Browse custom pickups and their related content families.'] },
  slot: { zh: ['可互动实体', '浏览老虎机、乞丐及其他可互动实体。'], en: ['Slots', 'Browse slots, beggars, and other interactive entities.'] },
}

const row = computed(() => copy[props.kind]?.[props.lang] || [props.kind, ''])
</script>

<template>
  <section class="category-landing">
    <header>
      <h1>{{ row[0] }}</h1>
      <p>{{ row[1] }}</p>
    </header>
    <EntryGrid :lang="lang" :kind="kind" />
  </section>
</template>

<style scoped>
.category-landing header { margin-bottom: 1.5rem; }
.category-landing header p { color: var(--vp-c-text-2); font-size: 1.05rem; }
</style>
