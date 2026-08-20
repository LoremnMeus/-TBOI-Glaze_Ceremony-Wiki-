<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/icon-catalog.json'

const props = defineProps({
  name: { type: String, required: true },
})

const COLLECTIBLE = /^Collectible(\d+)$/i
const TRINKET = /^Trinket(\d+)$/i

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

const trinketFile = computed(() => {
  const match = props.name.match(TRINKET)
  if (!match) return null
  return catalog.trinketsById?.[match[1]] || null
})

const itemSrc = computed(() => {
  if (collectibleFile.value) {
    return withBase(`/icons/vanilla/collectibles/${collectibleFile.value}`)
  }
  if (trinketFile.value) {
    return withBase(`/icons/vanilla/trinkets/${trinketFile.value}`)
  }
  return null
})

const inline = computed(() => byName.value[props.name] || null)

const style = computed(() => {
  const crop = inline.value?.crop
  if (!crop) return null
  return {
    width: `${crop.w}px`,
    height: `${crop.h}px`,
    backgroundImage: `url(${withBase(inline.value.sheet)})`,
    backgroundPosition: `-${crop.x}px -${crop.y}px`,
  }
})
</script>

<template>
  <img
    v-if="itemSrc"
    class="eid-item-icon"
    :src="itemSrc"
    :alt="name"
    :title="name"
  />
  <span
    v-else-if="style"
    class="eid-icon"
    :style="style"
    :title="name"
    role="img"
    :aria-label="name"
  />
  <code v-else class="eid-missing" :title="name">{{ name }}</code>
</template>

<style scoped>
.eid-icon {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  margin: 0 0.15em;
}
.eid-item-icon {
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
