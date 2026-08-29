<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import EidIcon from './EidIcon.vue'

const props = defineProps({
  name: { type: String, default: 'Seija' },
  /** When false, render icon only (for in-game EID blocks). */
  labeled: { type: Boolean, default: true },
})

const { lang } = useData()

const LABELS = {
  Seija: { zh: '正邪', en: 'Seija' },
  SeijaB: { zh: '正邪（里）', en: 'Tainted Seija' },
}

const mark = computed(() => (/^SeijaB$/i.test(props.name) ? 'SeijaB' : 'Seija'))
const language = computed(() =>
  String(lang.value || '').toLowerCase().startsWith('en') ? 'en' : 'zh',
)
const label = computed(() => LABELS[mark.value][language.value])
</script>

<template>
  <span v-if="labeled" class="seija-mark" :data-seija="mark" :title="label">
    <EidIcon :name="mark" />
    <span>{{ label }}</span>
  </span>
  <EidIcon v-else :name="mark" />
</template>

<style scoped>
.seija-mark {
  display: inline-flex;
  align-items: center;
  gap: 0.18em;
  white-space: nowrap;
  font-weight: 600;
  line-height: inherit;
  vertical-align: middle;
}
.seija-mark > span {
  line-height: inherit;
}
</style>
