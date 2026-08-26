<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import registry from '../../../generated/vanilla-entities.json'
import EidIcon from './EidIcon.vue'

const props = defineProps({
  entityType: { type: String, required: true },
  entityId: { type: [String, Number], required: true },
})
const { lang } = useData()

const row = computed(() => registry.entities?.[`vanilla:${props.entityType.toLowerCase()}:${Number(props.entityId)}`] || null)
const language = computed(() => String(lang.value || '').toLowerCase().startsWith('en') ? 'en' : 'zh')
const label = computed(() => row.value?.name?.[language.value] || row.value?.name?.en || `${props.entityType} ${props.entityId}`)
const iconMark = computed(() => `${props.entityType.charAt(0).toUpperCase()}${props.entityType.slice(1)}${Number(props.entityId)}`)
</script>

<template>
  <span v-if="row" class="vanilla-entity" :data-entity="`vanilla:${row.type}:${row.id}`" :title="`${row.name.en} · ${row.type} #${row.id}`">
    <EidIcon :name="iconMark" />
    <span>{{ label }}</span>
  </span>
  <code v-else class="eid-missing">vanilla:{{ entityType }}:{{ entityId }}</code>
</template>

<style scoped>
.vanilla-entity {
  display: inline-flex;
  align-items: center;
  gap: .18em;
  white-space: nowrap;
  font-weight: 600;
  line-height: inherit;
  vertical-align: middle;
}
.vanilla-entity > span { line-height: inherit; }
.eid-missing { color: var(--vp-c-danger-1); }
</style>
