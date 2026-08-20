<script setup>
import { computed } from 'vue'
import EidIcon from './EidIcon.vue'

const props = defineProps({
  text: { type: String, default: '' },
})

const parts = computed(() => {
  const source = props.text || ''
  const tokens = []
  const mark = /\{\{([^{}]+)\}\}/g
  let last = 0
  let match
  while ((match = mark.exec(source))) {
    if (match.index > last) {
      tokens.push({ type: 'text', value: source.slice(last, match.index) })
    }
    const name = match[1].trim()
    last = match.index + match[0].length
    if (!name || /^Color/i.test(name) || name === 'CR' || name === 'NoLB') {
      continue
    }
    tokens.push({ type: 'icon', value: name })
  }
  if (last < source.length) {
    tokens.push({ type: 'text', value: source.slice(last) })
  }
  return tokens
})
</script>

<template>
  <p class="eid-markup">
    <template v-for="(part, index) in parts" :key="index">
      <EidIcon v-if="part.type === 'icon'" :name="part.value" />
      <span v-else>{{ part.value }}</span>
    </template>
  </p>
</template>

<style scoped>
.eid-markup {
  white-space: pre-wrap;
  line-height: 1.7;
}
</style>
