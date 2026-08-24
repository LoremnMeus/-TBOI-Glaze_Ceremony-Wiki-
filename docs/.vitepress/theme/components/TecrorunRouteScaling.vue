<script setup>
import catalog from '../../../generated/entries.json'

const tecrorun = (catalog.entries || []).find((row) => row.kind === 'character' && row.internalKey === 'Tecrorun')
const scaling = tecrorun?.tecrorunRouteScaling || {}
const rows = scaling.segments || []
const percent = (value) => `${Math.round(Number(value || 0) * 100)}%`
</script>

<template>
  <div v-if="rows.length">
    <table>
      <thead>
        <tr><th>光段</th><th>伤害</th><th>命中宽度</th></tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.level">
          <td>{{ row.level === 0 ? '初始段' : `第 ${row.level} 次弹射后的光段` }}</td>
          <td>{{ row.damagePercent }}%</td>
          <td>{{ row.widthPercent }}%</td>
        </tr>
      </tbody>
    </table>
    <p>
      终点光爆造成 <strong>{{ percent(scaling.burstDamageBase) }} + 每次弹射 {{ percent(scaling.burstDamageStep) }}</strong> 的当前攻击伤害，
      半径为 <strong>{{ scaling.burstRadiusBase }} + 每次弹射 {{ scaling.burstRadiusStep }}</strong>。
    </p>
  </div>
</template>
