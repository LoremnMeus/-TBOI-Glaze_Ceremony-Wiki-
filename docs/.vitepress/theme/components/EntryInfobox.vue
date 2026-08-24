<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import EidIcon from './EidIcon.vue'
import EidMarkup from './EidMarkup.vue'
import VanillaEntity from './VanillaEntity.vue'
import catalog from '../../../generated/entries.json'

const props = defineProps({
  entry: { type: Object, required: true },
  lang: { type: String, default: 'zh' },
  name: { type: String, required: true },
  iconSrc: { type: String, default: '' },
  iconName: { type: String, default: '' },
})

const en = computed(() => props.lang === 'en')
const altName = computed(() => {
  const names = props.entry.names || {}
  return en.value ? names.zh : names.en
})

const KIND_LABELS = {
  collectible: ['道具', 'Item'], trinket: ['饰品', 'Trinket'], card: ['卡牌', 'Card'],
  character: ['角色', 'Character'], challenge: ['挑战', 'Challenge'], pickup: ['掉落物', 'Pickup'],
  slot: ['可互动实体', 'Slot'],
}
const ITEM_TYPE_LABELS = {
  active: ['主动', 'Active'], passive: ['被动', 'Passive'], familiar: ['跟班', 'Familiar'],
}
const CHARGE_TYPE_LABELS = {
  timed: ['计时充能', 'Timed charge'], special: ['特殊充能', 'Special charge'], room: ['房间充能', 'Room charge'],
}

const POOL_LABELS = {
  treasure: ['宝箱房', 'Treasure Room'], shop: ['商店', 'Shop'], boss: ['Boss 房', 'Boss Room'],
  devil: ['恶魔房', 'Devil Room'], angel: ['天使房', 'Angel Room'], secret: ['隐藏房', 'Secret Room'],
  library: ['图书馆', 'Library'], curse: ['诅咒房', 'Curse Room'], planetarium: ['星象房', 'Planetarium'],
  goldenChest: ['金箱', 'Golden Chest'], redChest: ['红箱', 'Red Chest'], beggar: ['乞丐', 'Beggar'],
  demonBeggar: ['恶魔乞丐', 'Demon Beggar'], keyMaster: ['钥匙大师', 'Key Master'], craneGame: ['抓娃娃机', 'Crane Game'],
  shellGame: ['赌博乞丐', 'Shell Game'], batteryBum: ['电池乞丐', 'Battery Bum'], momsChest: ['妈妈的箱子', "Mom's Chest"],
  greedTreasure: ['贪婪宝箱房', 'Greed Treasure Room'], greedBoss: ['贪婪 Boss 房', 'Greed Boss Room'],
  greedShop: ['贪婪商店', 'Greed Shop'], greedCurse: ['贪婪诅咒房', 'Greed Curse Room'],
  greedDevil: ['贪婪恶魔房', 'Greed Devil Room'], greedAngel: ['贪婪天使房', 'Greed Angel Room'],
  ultraSecret: ['究极隐藏房', 'Ultra Secret Room'], bombBum: ['炸弹乞丐', 'Bomb Bum'],
  oldChest: ['旧箱子', 'Old Chest'], babyShop: ['宝宝商店', 'Baby Shop'], woodenChest: ['木箱', 'Wooden Chest'],
  rottenBeggar: ['腐烂乞丐', 'Rotten Beggar'],
}
const HEALTH_ICONS = {
  red: 'Heart', soul: 'SoulHeart', black: 'BlackHeart', bone: 'BoneHeart',
  rotten: 'RottenHeart', broken: 'BrokenHeart', eternal: 'EternalHeart',
}
const ROOM_LABELS = {
  1: ['普通房', 'Normal'], 2: ['商店', 'Shop'], 3: ['错误房', 'Error'], 4: ['宝箱房', 'Treasure'],
  5: ['Boss 房', 'Boss'], 6: ['小 Boss 房', 'Miniboss'], 7: ['隐藏房', 'Secret'], 8: ['超级隐藏房', 'Super Secret'],
  9: ['街机', 'Arcade'], 10: ['诅咒房', 'Curse'], 11: ['挑战房', 'Challenge'], 12: ['图书馆', 'Library'],
  13: ['献祭房', 'Sacrifice'], 14: ['恶魔房', 'Devil'], 15: ['天使房', 'Angel'], 16: ['夹层', 'Dungeon'],
  17: ['Boss Rush', 'Boss Rush'], 21: ['骰子房', 'Dice'],
}
const STAGES = { 8: ['子宫 II / 妈妈', 'Womb II / Mom'], 9: ['蓝子宫', 'Blue Womb'], 10: ['阴间 / 教堂', 'Sheol / Cathedral'], 11: ['暗室 / 箱子', 'Dark Room / Chest'], 12: ['虚空', 'Void'], 13: ['家', 'Home'] }

const chargeInfo = computed(() => {
  const row = props.entry
  if (row.itemType !== 'active') return null
  const type = String(row.chargeType || 'room').toLowerCase()
  const max = row.maxCharges == null ? 1 : Number(row.maxCharges)
  const initial = row.initCharge == null ? max : Number(row.initCharge)
  return {
    type,
    max,
    initial,
    visualMax: Math.max(0, Math.min(12, Math.round(max))),
    visualInitial: Math.max(0, Math.min(12, Math.round(initial))),
  }
})

function poolName(id) {
  const row = POOL_LABELS[id]
  return row ? row[en.value ? 1 : 0] : id
}

function healthText(row) {
  const hearts = Number(row.halfHearts || 0) / 2
  return Number.isInteger(hearts) ? String(hearts) : hearts.toFixed(1)
}

function modEntry(raw) {
  if (!raw) return null
  const needle = String(raw).trim().toLowerCase()
  return (catalog.entries || []).find((row) =>
    String(row.xmlName || '').trim().toLowerCase() === needle
    || String(row.internalKey || '').trim().toLowerCase() === needle
  ) || null
}

function wikiKind(kind) {
  return kind === 'collectible' ? 'Item' : kind[0].toUpperCase() + kind.slice(1)
}
</script>

<template>
  <aside class="entry-infobox" :aria-label="en ? 'Game object facts' : '游戏对象资料卡'">
    <div class="entry-infobox__title">
      <span v-if="iconName" class="entry-infobox__title-eid"><EidIcon :name="iconName" /></span>
      <img v-else-if="iconSrc" :src="withBase(iconSrc)" :alt="name" decoding="async" />
      <div>
        <strong>{{ name }}</strong>
        <small v-if="altName && altName !== name">{{ altName }}</small>
        <em v-if="entry.desc?.[lang]">{{ entry.desc[lang] }}</em>
      </div>
    </div>

    <dl class="entry-infobox__facts">
      <dt>{{ en ? 'Type' : '类型' }}</dt>
      <dd>
        {{ KIND_LABELS[entry.kind]?.[en ? 1 : 0] || entry.kind }}
        <template v-if="entry.itemType"> · {{ ITEM_TYPE_LABELS[entry.itemType]?.[en ? 1 : 0] || entry.itemType }}</template>
        <template v-if="entry.pseudoPickup"> · {{ en ? 'Pseudo pickup' : '伪拾取物' }}</template>
      </dd>

      <template v-if="entry.quality != null">
        <dt>{{ en ? 'Quality' : '品质' }}</dt>
        <dd class="entry-infobox__quality"><EidIcon :name="'Quality' + entry.quality" /> {{ entry.quality }}</dd>
      </template>

      <template v-if="chargeInfo">
        <dt>{{ en ? 'Charge' : '充能' }}</dt>
        <dd class="entry-infobox__charge">
          <div class="entry-infobox__charge-label">
            <EidIcon name="Battery" />
            <span>{{ CHARGE_TYPE_LABELS[chargeInfo.type]?.[en ? 1 : 0] || chargeInfo.type }}</span>
            <strong v-if="chargeInfo.max > 0">{{ chargeInfo.initial }}/{{ chargeInfo.max }}</strong>
            <strong v-else>{{ en ? 'None' : '无需充能' }}</strong>
          </div>
          <div v-if="chargeInfo.visualMax" class="entry-infobox__charge-bar" :style="{ gridTemplateColumns: `repeat(${chargeInfo.visualMax}, minmax(0, 1fr))` }" :aria-label="`${chargeInfo.initial}/${chargeInfo.max}`">
            <i v-for="index in chargeInfo.visualMax" :key="index" :class="{ filled: index <= chargeInfo.visualInitial }" />
          </div>
          <small v-if="chargeInfo.initial !== chargeInfo.max">{{ en ? `Starts with ${chargeInfo.initial}` : `开局 ${chargeInfo.initial} 格` }}</small>
        </dd>
      </template>

      <template v-if="entry.pools?.length">
        <dt>{{ en ? 'Item pools' : '道具池' }}</dt>
        <dd class="entry-infobox__chips">
          <span v-for="pool in entry.pools" :key="`${pool.id}:${pool.weight}`" :title="`Weight ${pool.weight}; DecreaseBy ${pool.decreaseBy}; RemoveOn ${pool.removeOn}`">
            {{ poolName(pool.id) }}<small v-if="pool.weight !== 1"> ×{{ pool.weight }}</small>
          </span>
        </dd>
      </template>

      <template v-if="entry.series">
        <dt>{{ en ? 'Series' : '所属系列' }}</dt><dd>{{ entry.series.names?.[lang] || entry.series.names?.zh || entry.series.slug }}</dd>
      </template>
      <template v-if="entry.related?.length">
        <dt>{{ en ? 'Related' : '相关内容' }}</dt>
        <dd class="entry-infobox__icons"><WikiEntryIcon v-for="row in entry.related" :key="row.slug" :name="`Wiki:${row.slug}`" /></dd>
      </template>
      <template v-if="entry.kind === 'pickup' && entry.randomDrop != null">
        <dt>{{ en ? 'Random drop' : '普通随机生成' }}</dt><dd>{{ entry.randomDrop ? (en ? 'Yes' : '是') : (en ? 'No' : '否') }}</dd>
      </template>
      <template v-if="entry.kind === 'slot' && entry.slotInteraction?.payment">
        <dt>{{ en ? 'Payment' : '支付资源' }}</dt><dd>{{ entry.slotInteraction.payment }}</dd>
      </template>
      <template v-if="entry.kind === 'slot' && entry.slotInteraction">
        <dt>{{ en ? 'Properties' : '交互性质' }}</dt>
        <dd>{{ entry.slotInteraction.singleUse ? (en ? 'Single use' : '一次性') : (en ? 'Reusable' : '可重复使用') }} · {{ entry.slotInteraction.bombable ? (en ? 'Bombable' : '可被炸毁') : (en ? 'Not bombable' : '不可炸毁') }}</dd>
      </template>

      <template v-if="entry.unlock">
        <dt>{{ en ? 'Unlock' : '解锁条件' }}</dt>
        <dd>{{ entry.unlock.text?.[lang] || entry.unlock.conditionKey }}</dd>
      </template>

      <template v-if="entry.kind === 'challenge' && entry.challengeBase?.number">
        <dt>{{ en ? 'Challenge no.' : '挑战编号' }}</dt><dd>#{{ entry.challengeBase.number }}</dd>
      </template>
      <template v-if="entry.kind === 'challenge' && entry.displayCharacter">
        <dt>{{ en ? 'Character' : '使用角色' }}</dt>
        <dd class="entry-infobox__character">
          <EidIcon v-if="modEntry(entry.displayCharacter)" :name="`QingPlayer:${modEntry(entry.displayCharacter).internalKey}`" />
          <a :href="withBase(`${en ? '/en' : ''}/characters/${entry.displayCharacter}`)">
            {{ modEntry(entry.displayCharacter)?.names?.[lang] || modEntry(entry.displayCharacter)?.names?.zh || entry.displayCharacter }}
          </a>
        </dd>
      </template>
      <template v-else-if="entry.kind === 'challenge' && entry.playerType != null">
        <dt>{{ en ? 'Character' : '使用角色' }}</dt><dd><EidIcon :name="'Player' + entry.playerType" /></dd>
      </template>
      <template v-if="entry.kind === 'challenge' && entry.startingItems?.length">
        <dt>{{ en ? 'Starting items' : '初始道具' }}</dt><dd class="entry-infobox__icons"><VanillaEntity v-for="id in entry.startingItems" :key="id" entity-type="collectible" :entity-id="id" /></dd>
      </template>
      <template v-if="entry.kind === 'challenge' && entry.startingTrinkets?.length">
        <dt>{{ en ? 'Starting trinkets' : '初始饰品' }}</dt><dd class="entry-infobox__icons"><VanillaEntity v-for="id in entry.startingTrinkets" :key="id" entity-type="trinket" :entity-id="id" /></dd>
      </template>
      <template v-if="entry.kind === 'challenge' && entry.challengeBase?.startingCard != null && entry.challengeBase.startingCard !== 0">
        <dt>{{ en ? 'Starting card' : '初始卡牌' }}</dt><dd><VanillaEntity entity-type="card" :entity-id="entry.challengeBase.startingCard" /></dd>
      </template>
      <template v-if="entry.kind === 'challenge' && entry.roomFilter?.length">
        <dt>{{ en ? 'Unavailable rooms' : '禁用房间' }}</dt>
        <dd>{{ entry.roomFilter.map((id) => ROOM_LABELS[id]?.[en ? 1 : 0] || `#${id}`).join(' · ') }}</dd>
      </template>
      <template v-if="entry.kind === 'challenge' && (entry.megaSatan || entry.altPath)">
        <dt>{{ en ? 'Route' : '路线' }}</dt>
        <dd>{{ [entry.megaSatan ? (en ? 'Mega Satan' : '超级撒旦') : '', entry.altPath ? (en ? 'Alt path' : '忏悔路线') : ''].filter(Boolean).join(' · ') }}</dd>
      </template>
      <template v-if="entry.kind === 'challenge' && entry.endStage != null">
        <dt>{{ en ? 'Goal' : '终点' }}</dt><dd>{{ STAGES[entry.endStage]?.[en ? 1 : 0] || `Stage ${entry.endStage}` }}</dd>
      </template>
      <template v-if="entry.kind === 'challenge' && entry.rewards?.length">
        <dt>{{ en ? 'Rewards' : '通关奖励' }}</dt>
        <dd class="entry-infobox__icons"><WikiEntryIcon v-for="reward in entry.rewards" :key="reward.slug" :name="`${reward.kind === 'collectible' ? 'Item' : reward.kind}:${reward.slug}`" /></dd>
      </template>
      <template v-if="entry.kind === 'challenge'">
        <dt>{{ en ? 'Normal shooting' : '普通射击' }}</dt><dd>{{ entry.canShoot === false ? (en ? 'Disabled' : '禁用') : (en ? 'Allowed' : '允许') }}</dd>
      </template>

      <template v-if="entry.characterBase?.startingHealth?.length">
        <dt>{{ en ? 'Starting health' : '初始生命' }}</dt>
        <dd class="entry-infobox__icons">
          <span v-for="row in entry.characterBase.startingHealth" :key="row.type">
            <EidIcon :name="HEALTH_ICONS[row.type] || 'Heart'" /> ×{{ healthText(row) }}
          </span>
        </dd>
      </template>

      <template v-if="entry.characterBase?.startingItems?.length">
        <dt>{{ en ? 'Starting items' : '初始道具' }}</dt>
        <dd class="entry-infobox__icons">
          <template v-for="raw in entry.characterBase.startingItems" :key="raw">
            <VanillaEntity v-if="/^\d+$/.test(String(raw))" entity-type="collectible" :entity-id="Number(raw)" />
            <WikiEntryIcon v-else-if="modEntry(raw)" :name="`${wikiKind(modEntry(raw).kind)}:${modEntry(raw).slug}`" />
            <span v-else>{{ raw }}</span>
          </template>
        </dd>
      </template>

      <template v-if="entry.characterBase?.startingTrinkets?.length">
        <dt>{{ en ? 'Starting trinkets' : '初始饰品' }}</dt>
        <dd class="entry-infobox__icons">
          <template v-for="raw in entry.characterBase.startingTrinkets" :key="raw">
            <VanillaEntity v-if="/^\d+$/.test(String(raw))" entity-type="trinket" :entity-id="Number(raw)" />
            <WikiEntryIcon v-else-if="modEntry(raw)" :name="`${wikiKind(modEntry(raw).kind)}:${modEntry(raw).slug}`" />
            <span v-else>{{ raw }}</span>
          </template>
        </dd>
      </template>

      <template v-if="entry.characterBase?.pocketActive">
        <dt>{{ en ? 'Pocket active' : '口袋主动' }}</dt>
        <dd>
          <WikiEntryIcon v-if="modEntry(entry.characterBase.pocketActive)" :name="`${wikiKind(modEntry(entry.characterBase.pocketActive).kind)}:${modEntry(entry.characterBase.pocketActive).slug}`" />
          <span v-else>{{ entry.characterBase.pocketActive }}</span>
        </dd>
      </template>

      <template v-if="entry.baseStats">
        <dt>{{ en ? 'Base stats' : '基础属性' }}</dt>
        <dd class="entry-infobox__stats">
          <span v-if="entry.baseStats.damage != null"><EidIcon name="Damage" /> {{ entry.baseStats.damage }}</span>
          <span v-if="entry.baseStats.tears != null"><EidIcon name="Tears" /> {{ entry.baseStats.tears }}</span>
          <span v-if="entry.baseStats.speed != null"><EidIcon name="Speed" /> {{ entry.baseStats.speed }}</span>
          <span v-if="entry.baseStats.range != null"><EidIcon name="Range" /> {{ entry.baseStats.range }}</span>
          <span v-if="entry.baseStats.shotSpeed != null"><EidIcon name="Shotspeed" /> {{ entry.baseStats.shotSpeed }}</span>
          <span v-if="entry.baseStats.luck != null"><EidIcon name="Luck" /> {{ entry.baseStats.luck }}</span>
        </dd>
      </template>

      <template v-if="entry.characterBase?.startingResources && Object.keys(entry.characterBase.startingResources).length">
        <dt>{{ en ? 'Resources' : '初始资源' }}</dt>
        <dd class="entry-infobox__icons">
          <span v-if="entry.characterBase.startingResources.coins"><EidIcon name="Coin" /> ×{{ entry.characterBase.startingResources.coins }}</span>
          <span v-if="entry.characterBase.startingResources.bombs"><EidIcon name="Bomb" /> ×{{ entry.characterBase.startingResources.bombs }}</span>
          <span v-if="entry.characterBase.startingResources.keys"><EidIcon name="Key" /> ×{{ entry.characterBase.startingResources.keys }}</span>
        </dd>
      </template>

      <template v-if="entry.characterBase">
        <dt>{{ en ? 'Can shoot' : '可否射击' }}</dt>
        <dd>{{ entry.characterBase.canShoot ? (en ? 'Yes' : '是') : (en ? 'No' : '否') }}</dd>
      </template>

      <template v-if="entry.kind === 'character' && entry.characterBase?.birthright?.description?.[lang]">
        <dt><VanillaEntity entity-type="collectible" :entity-id="619" /></dt>
        <dd><EidMarkup :text="entry.characterBase.birthright.description[lang]" /></dd>
      </template>
    </dl>

    <details class="entry-infobox__technical">
      <summary>{{ en ? 'Technical data' : '技术信息' }}</summary>
      <dl>
        <dt>internalKey</dt><dd><code>{{ entry.internalKey }}</code></dd>
        <dt>slug</dt><dd><code>{{ entry.slug }}</code></dd>
        <template v-if="entry.xmlId != null"><dt>XML ID</dt><dd>{{ entry.xmlId }}</dd></template>
        <template v-if="entry.pickupVariant != null"><dt>Variant / SubType</dt><dd>{{ entry.pickupVariant }} / {{ entry.pickupSubType }}</dd></template>
      </dl>
    </details>
  </aside>
</template>

<style scoped>
.entry-infobox { width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 10px; overflow: hidden; background: var(--vp-c-bg-soft); font-size: .88rem; }
.entry-infobox__title { display: grid; grid-template-columns: 72px minmax(0, 1fr); gap: .75rem; align-items: center; padding: .85rem; background: color-mix(in srgb, var(--vp-c-brand-1) 10%, var(--vp-c-bg-soft)); }
.entry-infobox__title img { width: 72px; height: 72px; object-fit: contain; image-rendering: pixelated; }
.entry-infobox__title-eid { display: flex; width: 72px; height: 72px; align-items: center; justify-content: center; }
.entry-infobox__title strong, .entry-infobox__title small, .entry-infobox__title em { display: block; }
.entry-infobox__title strong { font-size: 1.05rem; }
.entry-infobox__title small { color: var(--vp-c-text-2); }
.entry-infobox__title em { margin-top: .35rem; color: var(--vp-c-text-2); font-size: .8rem; }
.entry-infobox dl { display: grid; grid-template-columns: 6rem minmax(0, 1fr); margin: 0; }
.entry-infobox dt, .entry-infobox dd { margin: 0; padding: .48rem .65rem; border-top: 1px solid var(--vp-c-divider); }
.entry-infobox dt { color: var(--vp-c-text-2); font-weight: 600; }
.entry-infobox__chips, .entry-infobox__icons, .entry-infobox__stats { display: flex; flex-wrap: wrap; gap: .3rem .45rem; }
.entry-infobox__quality, .entry-infobox__charge-label { display: flex; align-items: center; gap: .3rem; }
.entry-infobox__character { display: flex; align-items: center; gap: .25rem; }
.entry-infobox__charge strong { margin-left: auto; }
.entry-infobox__charge-bar { display: grid; gap: 2px; margin-top: .35rem; }
.entry-infobox__charge-bar i { grid-column: span 1; height: 7px; border: 1px solid color-mix(in srgb, var(--vp-c-text-2) 45%, transparent); border-radius: 2px; background: var(--vp-c-bg); }
.entry-infobox__charge-bar i.filled { border-color: color-mix(in srgb, var(--vp-c-yellow-1, #d8a72d) 75%, var(--vp-c-divider)); background: var(--vp-c-yellow-1, #d8a72d); }
.entry-infobox__charge small { display: block; margin-top: .25rem; color: var(--vp-c-text-2); }
.entry-infobox__chips > span { padding: 0 .35rem; border: 1px solid var(--vp-c-divider); border-radius: 999px; }
.entry-infobox__technical { border-top: 1px solid var(--vp-c-divider); }
.entry-infobox__technical summary { cursor: pointer; padding: .55rem .65rem; color: var(--vp-c-text-2); }
.entry-infobox__technical dl { border-top: 1px solid var(--vp-c-divider); }
</style>
