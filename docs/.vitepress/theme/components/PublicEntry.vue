<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'
import MissingTranslation from './MissingTranslation.vue'
import EidMarkup from './EidMarkup.vue'
import EidIcon from './EidIcon.vue'

const props = defineProps({
  slug: { type: String, required: true },
  lang: { type: String, default: 'zh' },
})

const english = computed(() => props.lang === 'en')

const KIND_LABEL = {
  collectible: { zh: '道具', en: 'Item' },
  trinket: { zh: '饰品', en: 'Trinket' },
  card: { zh: '卡牌', en: 'Card' },
  character: { zh: '角色', en: 'Character' },
  challenge: { zh: '挑战', en: 'Challenge' },
  pickup: { zh: '掉落物', en: 'Pickup' },
  slot: { zh: '可互动实体', en: 'Slot' },
}

const ITEM_TYPE_LABEL = {
  active: { zh: '主动', en: 'Active' },
  passive: { zh: '被动', en: 'Passive' },
  familiar: { zh: '跟班', en: 'Familiar' },
}

const CHARGE_TYPE_LABEL = {
  timed: { zh: '计时充能', en: 'Timed charge' },
  special: { zh: '特殊充能', en: 'Special charge' },
  room: { zh: '房间充能', en: 'Room charge' },
}

const STAGE_LABEL = {
  1: { zh: '地下室 I', en: 'Basement I' },
  2: { zh: '地下室 II', en: 'Basement II' },
  3: { zh: '洞穴 I', en: 'Caves I' },
  4: { zh: '洞穴 II', en: 'Caves II' },
  5: { zh: '深牢 I', en: 'Depths I' },
  6: { zh: '深牢 II', en: 'Depths II' },
  7: { zh: '子宫 I', en: 'Womb I' },
  8: { zh: '子宫 II / 妈妈', en: 'Womb II / Mom' },
  9: { zh: '??? / 蓝子宫', en: '??? / Blue Womb' },
  10: { zh: '阴间 / 教堂', en: 'Sheol / Cathedral' },
  11: { zh: '暗室 / 箱子', en: 'Dark Room / Chest' },
  12: { zh: '虚空', en: 'Void' },
  13: { zh: '家', en: 'Home' },
}

const ROOM_LABEL = {
  1: { zh: '普通房', en: 'Normal' },
  2: { zh: '商店', en: 'Shop' },
  3: { zh: '错误房', en: 'Error' },
  4: { zh: '宝箱房', en: 'Treasure' },
  5: { zh: 'Boss', en: 'Boss' },
  6: { zh: '小 Boss', en: 'Miniboss' },
  7: { zh: '隐藏房', en: 'Secret' },
  8: { zh: '超级隐藏', en: 'Super Secret' },
  9: { zh: '街机', en: 'Arcade' },
  10: { zh: '诅咒房', en: 'Curse' },
  11: { zh: '挑战房', en: 'Challenge' },
  12: { zh: '图书馆', en: 'Library' },
  13: { zh: '献祭房', en: 'Sacrifice' },
  14: { zh: '恶魔房', en: 'Devil' },
  15: { zh: '天使房', en: 'Angel' },
  16: { zh: '夹层', en: 'Dungeon' },
  17: { zh: 'Boss Rush', en: 'Boss Rush' },
  21: { zh: '骰子房', en: 'Dice' },
}

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
  nolostbr: { zh: '游魂无长子权', en: 'No Lost BR' },
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
const iconSrc = computed(() => {
  const src = entry.value?.kind === 'character'
    ? entry.value?.portrait || entry.value?.icon
    : entry.value?.thumb64 || entry.value?.icon || entry.value?.portrait
  return src ? withBase(src) : ''
})

function t(map, key, fallback) {
  const row = map[key]
  if (!row) return fallback ?? key
  return english.value ? row.en : row.zh
}

const kindLabel = computed(() => t(KIND_LABEL, entry.value?.kind, entry.value?.kind))

const quality = computed(() => {
  const value = entry.value?.quality
  return value === 0 || value ? Number(value) : null
})

const tags = computed(() => (entry.value?.tags || []).filter(Boolean))

const charge = computed(() => {
  const row = entry.value
  if (!row || row.itemType !== 'active') return null
  const type = (row.chargeType || 'room').toLowerCase()
  const max = row.maxCharges
  const amount = max === 0 || max ? Number(max) : 1
  return {
    type,
    label: t(CHARGE_TYPE_LABEL, type, type),
    amount,
    init: row.initCharge == null ? null : Number(row.initCharge),
    instant: amount === 0,
  }
})

const challengeBits = computed(() => {
  const row = entry.value
  if (!row || row.kind !== 'challenge') return []
  const bits = []
  if (row.displayCharacter) {
    bits.push({ kind: 'character', value: row.displayCharacter })
  } else if (row.playerType != null) {
    bits.push({ kind: 'player', value: row.playerType })
  }
  if (row.endStage != null) {
    bits.push({
      kind: 'text',
      value: `${english.value ? 'Ends' : '终点'} ${t(STAGE_LABEL, row.endStage, `stage ${row.endStage}`)}`,
    })
  }
  if (row.canShoot === false) {
    bits.push({ kind: 'text', value: english.value ? 'Cannot shoot' : '无法射击' })
  }
  if (row.megaSatan) {
    bits.push({ kind: 'text', value: english.value ? 'Mega Satan' : '超级撒旦' })
  }
  if (row.altPath) {
    bits.push({ kind: 'text', value: english.value ? 'Alt path' : '忏悔路线' })
  }
  for (const id of row.startingItems || []) {
    bits.push({ kind: 'collectible', value: id })
  }
  for (const id of row.startingTrinkets || []) {
    bits.push({ kind: 'trinket', value: id })
  }
  for (const id of row.roomFilter || []) {
    bits.push({
      kind: 'text',
      value: `${english.value ? 'No' : '无'} ${t(ROOM_LABEL, id, `#${id}`)}`,
    })
  }
  return bits
})
</script>

<template>
  <div v-if="entry" class="public-entry">
    <div class="public-entry__header">
      <img
        v-if="iconSrc"
        :class="['public-entry__icon', { 'public-entry__icon--portrait': entry.kind === 'character' }]"
        :src="iconSrc"
        :alt="name"
        width="64"
        height="64"
        decoding="async"
      />
      <div class="public-entry__heading">
        <p class="public-entry__meta">
          <span>{{ kindLabel }}</span>
          <template v-if="entry.xmlId != null">
            <span>· XML {{ entry.xmlId }}</span>
          </template>
          <template v-if="entry.pickupVariant != null && entry.pickupSubType != null">
            <span>· 5.{{ entry.pickupVariant }}.{{ entry.pickupSubType }}</span>
          </template>
          <template v-if="entry.pseudoPickup">
            <span>· {{ english ? 'Pseudo pickup' : '伪拾取物' }}</span>
          </template>
          <template v-if="entry.itemType">
            <span>· {{ t(ITEM_TYPE_LABEL, entry.itemType, entry.itemType) }}</span>
          </template>
          <template v-if="quality != null">
            <span class="public-entry__quality">
              · <EidIcon :name="'Quality' + quality" /> {{ english ? 'Quality' : '品质' }} {{ quality }}
            </span>
          </template>
          <template v-if="charge">
            <span class="public-entry__charge">
              · <EidIcon name="Battery" />
              {{ charge.label }}
              <template v-if="charge.instant">{{ english ? ' (none)' : '（无）' }}</template>
              <template v-else> ×{{ charge.amount }}</template>
              <template v-if="charge.init != null && charge.init !== charge.amount">
                {{ english ? ` start ${charge.init}` : ` 开局 ${charge.init}` }}
              </template>
            </span>
          </template>
        </p>
        <h1>{{ name }}</h1>
        <p v-if="desc" class="public-entry__pickup">{{ desc }}</p>
        <p class="public-entry__keys">
          <code>{{ entry.internalKey }}</code>
          <code>{{ entry.slug }}</code>
          <span>v{{ catalog.version }}</span>
        </p>
        <p v-if="tags.length" class="public-entry__tags">
          <span v-for="tag in tags" :key="tag" class="public-entry__tag" :title="tag">
            {{ t(TAG_LABEL, tag, tag) }}
          </span>
        </p>
        <p v-if="challengeBits.length" class="public-entry__challenge">
          <template v-for="(bit, index) in challengeBits" :key="index">
            <EidIcon v-if="bit.kind === 'player'" :name="'Player' + bit.value" />
            <WikiEntryIcon v-else-if="bit.kind === 'character'" :name="'Character:' + bit.value" />
            <EidIcon v-else-if="bit.kind === 'collectible'" :name="'Collectible' + bit.value" />
            <EidIcon v-else-if="bit.kind === 'trinket'" :name="'Trinket' + bit.value" />
            <span v-else class="public-entry__chip">{{ bit.value }}</span>
          </template>
        </p>
      </div>
    </div>
    <section v-if="eid || seijaBuff || seijaNerf">
      <h2>EID</h2>
      <EidMarkup v-if="eid" :text="eid" />
      <EidMarkup v-if="seijaBuff" :text="seijaBuff" />
      <EidMarkup v-if="seijaNerf" :text="seijaNerf" />
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
  display: block;
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  image-rendering: pixelated;
}
.public-entry__icon--portrait {
  width: 144px;
  height: 144px;
  flex-basis: 144px;
  object-fit: contain;
}
.public-entry__heading {
  min-width: 0;
  flex: 1;
}
.public-entry__heading h1 {
  margin: 0.15rem 0 0.35rem;
}
.public-entry__meta,
.public-entry__keys,
.public-entry__challenge {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
.public-entry__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem 0.35rem;
  align-items: center;
  margin: 0;
}
.public-entry__quality,
.public-entry__charge {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  white-space: nowrap;
}
.public-entry__pickup {
  margin: 0 0 0.45rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}
.public-entry__keys {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
}
.public-entry__tags,
.public-entry__challenge {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  margin: 0.45rem 0 0;
}
.public-entry__tag,
.public-entry__chip {
  display: inline-flex;
  align-items: center;
  padding: 0.05rem 0.45rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 0.78rem;
  line-height: 1.4;
}
</style>
