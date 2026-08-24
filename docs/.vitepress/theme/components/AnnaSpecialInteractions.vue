<script setup>
import catalog from '../../../generated/entries.json'
import VanillaEntity from './VanillaEntity.vue'

const anna = (catalog.entries || []).find((row) => row.kind === 'character' && row.internalKey === 'Anna')
const rows = anna?.annaSpecialInteractions || []
</script>

<template>
  <table v-if="rows.length">
    <thead>
      <tr><th>道具</th><th>Anna 专属称呼</th><th>专属提示</th></tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td><VanillaEntity entity-type="collectible" :entity-id="row.id" /></td>
        <td>{{ row.name || '—' }}</td>
        <td>{{ row.description || '—' }}</td>
      </tr>
    </tbody>
  </table>
</template>
