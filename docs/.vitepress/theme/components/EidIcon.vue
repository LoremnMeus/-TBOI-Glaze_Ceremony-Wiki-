<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/icon-catalog.json'
import WikiEntryIcon from './WikiEntryIcon.vue'

const props = defineProps({
  name: { type: String, required: true },
})

const COLLECTIBLE = /^Collectible(\d+)$/i
const TRINKET = /^Trinket(\d+)$/i
const WIKI_ENTRY = /^(?:Item|Trinket|Card|Character|Challenge|Wiki)[:/]/i
const QING_PLAYER = /^QingPlayer[:/]\s*(.+)$/i

const wikiEntry = computed(() => WIKI_ENTRY.test(props.name))
const qingPlayerKey = computed(() => {
  const match = props.name.match(QING_PLAYER)
  return match ? match[1].trim() : ''
})

const byName = computed(() => {
  const map = {}
  for (const icon of catalog.eid?.icons || []) {
    map[icon.name] = icon
  }
  return map
})

const collectibleFile = computed(() => {
  const match = props.name.match(COLLECTIBLE)
  if (!match) return null
  return catalog.collectiblesById?.[match[1]] || null
})

const qingItemFile = computed(() => {
  const match = props.name.match(/^QingCollectible[:/]\s*(.+)$/i)
  if (!match) return null
  const token = match[1].trim()
  return catalog.qingCollectiblesByKey?.[token] || catalog.qingCollectiblesByXmlId?.[token] || null
})

const trinketFile = computed(() => {
  const match = props.name.match(TRINKET)
  if (!match) return null
  return catalog.trinketsById?.[match[1]] || null
})

const itemSrc = computed(() => {
  if (qingItemFile.value) {
    return withBase(`/icons/qing/collectibles/${qingItemFile.value}`)
  }
  if (collectibleFile.value) {
    return withBase(`/icons/vanilla/collectibles/${collectibleFile.value}`)
  }
  if (trinketFile.value) {
    return withBase(`/icons/vanilla/trinkets/${trinketFile.value}`)
  }
  return null
})

const inline = computed(() => {
  if (qingPlayerKey.value) {
    return catalog.qingPlayers?.[qingPlayerKey.value] || byName.value[`QingPlayer:${qingPlayerKey.value}`] || null
  }
  return byName.value[props.name] || null
})

const ICON_SCALE = 2

function displayScale(crop) {
  const x = ((crop?.xScale ?? 100) / 100) * ICON_SCALE
  const y = ((crop?.yScale ?? 100) / 100) * ICON_SCALE
  return { x, y }
}

const style = computed(() => {
  const crop = inline.value?.crop
  if (!crop) return null
  const scale = displayScale(crop)
  return {
    width: `${crop.w}px`,
    height: `${crop.h}px`,
    backgroundImage: `url(${withBase(inline.value.sheet)})`,
    backgroundPosition: `-${crop.x}px -${crop.y}px`,
    transform: `scale(${scale.x}, ${scale.y})`,
  }
})

const wrapStyle = computed(() => {
  const crop = inline.value?.crop
  if (!crop) return null
  const scale = displayScale(crop)
  return {
    width: `${crop.w * scale.x}px`,
    height: `${crop.h * scale.y}px`,
  }
})
</script>

<template>
  <WikiEntryIcon v-if="wikiEntry" :name="name" />
  <img
    v-else-if="itemSrc"
    class="eid-item-icon"
    :src="itemSrc"
    :alt="name"
    :title="name"
    width="32"
    height="32"
    decoding="async"
  />
  <span
    v-else-if="style"
    class="eid-icon-wrap"
    :style="wrapStyle"
    :title="name"
    role="img"
    :aria-label="name"
  >
    <span class="eid-icon" :style="style" />
  </span>
  <code v-else class="eid-missing" :title="name">{{ name }}</code>
</template>

<style scoped>
.eid-icon-wrap {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin: 0 0.15em;
  overflow: hidden;
}
.eid-icon {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  transform-origin: top left;
}
.eid-item-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  image-rendering: pixelated;
  margin: 0 0.15em;
}
.eid-missing {
  font-size: 0.8em;
}
</style>
