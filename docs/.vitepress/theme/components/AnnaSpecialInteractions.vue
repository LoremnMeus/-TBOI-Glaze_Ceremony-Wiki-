<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import catalog from '../../../generated/entries.json'
import VanillaEntity from './VanillaEntity.vue'

const { lang } = useData()
const english = computed(() => String(lang.value || '').toLowerCase().startsWith('en'))

const anna = (catalog.entries || []).find((row) => row.kind === 'character' && row.internalKey === 'Anna')
const rows = anna?.annaSpecialInteractions || []

const summary = computed(() => english.value
  ? `View exclusive item text (${rows.length})`
  : `查看专属道具描述（${rows.length}）`)

const disclaimer = computed(() => english.value
  ? 'The entries below are Anna-exclusive display text only. They are not a full compatibility list and do not guarantee extra mechanics.'
  : '以下内容为 Anna 专属显示文本，不代表完整兼容列表，也不保证额外机制。')

const headers = computed(() => english.value
  ? ['Item', 'Anna name', 'Anna description']
  : ['道具', 'Anna 专属称呼', 'Anna 专属提示'])
</script>

<template>
  <details v-if="rows.length" class="special-interactions">
    <summary>{{ summary }}</summary>
    <p class="disclaimer">{{ disclaimer }}</p>
    <table>
      <thead>
        <tr>
          <th v-for="h in headers" :key="h">{{ h }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td><VanillaEntity entity-type="collectible" :entity-id="row.id" /></td>
          <td>{{ row.name || '—' }}</td>
          <td>{{ row.description || '—' }}</td>
        </tr>
      </tbody>
    </table>
  </details>
</template>

<style scoped>
.special-interactions > summary {
  cursor: pointer;
  font-weight: 600;
  margin: 0.5rem 0;
}
.disclaimer {
  margin: 0.5rem 0 0.75rem;
  color: var(--vp-c-text-2);
  font-size: 0.92em;
}
</style>
