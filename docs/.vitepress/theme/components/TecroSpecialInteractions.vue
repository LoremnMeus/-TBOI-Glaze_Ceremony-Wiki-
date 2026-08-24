<script setup>
import catalog from '../../../generated/entries.json'
import VanillaEntity from './VanillaEntity.vue'

const tecro = (catalog.entries || []).find((row) => row.kind === 'character' && row.internalKey === 'Tecro')
const rows = tecro?.tecroSpecialInteractions || []
</script>

<template>
  <details v-if="rows.length" class="special-interactions">
    <summary>查看特殊交互（{{ rows.length }}）</summary>
    <table>
      <thead>
        <tr><th>道具</th><th>Tecro 专属称呼</th><th>专属提示</th></tr>
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
</style>
