<script setup>
import { computed } from 'vue'
import EidIcon from './EidIcon.vue'
import { splitMarks } from '../../eidMarks'

const props = defineProps({
  text: { type: String, default: '' },
})

const lines = computed(() => {
  const source = props.text || ''
  return source
    .split('#')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => splitMarks(line))
})
</script>

<template>
  <div class="eid-markup">
    <p v-for="(parts, lineIndex) in lines" :key="lineIndex" class="eid-line">
      <template v-for="(part, index) in parts" :key="index">
        <EidIcon v-if="part.type === 'icon'" :name="part.value" />
        <span v-else>{{ part.value }}</span>
      </template>
    </p>
  </div>
</template>

<style scoped>
.eid-markup {
  line-height: 2;
}
.eid-line {
  margin: 0.2rem 0;
}
</style>
