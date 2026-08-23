<script setup>
import { computed } from 'vue'
import catalog from '../../../generated/icon-catalog.json'

const ratios = computed(() => catalog.ratios || null)

const eidSizes = computed(() => ratios.value?.eidInline?.sizes || computeEidFallback())
const notes = computed(() => ratios.value?.notes || [])

function computeEidFallback() {
  const map = new Map()
  for (const icon of catalog.eid?.icons || []) {
    const w = icon.crop?.w
    const h = icon.crop?.h
    if (!w || !h) continue
    const key = `${w}×${h}`
    const row = map.get(key) || { size: key, width: w, height: h, aspect: aspect(w, h), count: 0, examples: [] }
    row.count += 1
    if (row.examples.length < 4 && icon.name) row.examples.push(icon.name)
    map.set(key, row)
  }
  return [...map.values()].sort((a, b) => b.count - a.count)
}

function gcd(a, b) {
  while (b) {
    const t = b
    b = a % b
    a = t
  }
  return Math.abs(a) || 1
}

function aspect(w, h) {
  const g = gcd(w, h)
  return `${w / g}:${h / g}`
}

function dirRows(key) {
  return ratios.value?.[key] || null
}
</script>

<template>
  <div class="icon-ratios">
    <p v-for="note in notes" :key="note">{{ note }}</p>
    <p v-if="!notes.length">
      EID 行内图标按 ANM2 裁切盒统计。道具 PNG 多为 32×32；Wiki 条目标题图会被生成器收成 32/64 方图。
    </p>

    <h3>EID 行内裁切</h3>
    <p>
      已解析标记 {{ catalog.eid?.names?.length || 0 }} 个；
      有裁切 {{ ratios?.eidInline?.total || eidSizes.reduce((n, row) => n + row.count, 0) }} 个。
    </p>
    <table>
      <thead>
        <tr>
          <th>像素</th>
          <th>比例</th>
          <th>数量</th>
          <th>例子</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in eidSizes" :key="row.size">
          <td><code>{{ row.size }}</code></td>
          <td>{{ row.aspect }}</td>
          <td>{{ row.count }}</td>
          <td>{{ (row.examples || []).join(', ') }}</td>
        </tr>
      </tbody>
    </table>

    <h3>道具 / 饰品 PNG</h3>
    <table>
      <thead>
        <tr>
          <th>类别</th>
          <th>清单数量</th>
          <th>抽样</th>
          <th>实际像素</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="key in ['vanillaCollectibles', 'vanillaTrinkets', 'qingCollectibles', 'qingTrinkets']" :key="key">
          <td><code>{{ key }}</code></td>
          <td>{{ dirRows(key)?.listed ?? '—' }}</td>
          <td>{{ dirRows(key)?.sampled ?? '—' }}</td>
          <td>
            <span v-for="size in dirRows(key)?.sizes || []" :key="size.size">
              {{ size.size }} ({{ size.aspect }}) ×{{ size.count }}
            </span>
            <span v-if="!(dirRows(key)?.sizes || []).length">未抽样（可能还没跑图标导出）</span>
          </td>
        </tr>
      </tbody>
    </table>

    <h3>本模组角色头像（EID）</h3>
    <ul v-if="(ratios?.qingPlayers || []).length">
      <li v-for="row in ratios.qingPlayers" :key="row.name">
        <code>{{ row.name }}</code> {{ row.size }}（{{ row.aspect }}）
      </li>
    </ul>
    <p v-else>跑 <code>export_wiki_data.py</code> 后会写入 <code>icon-catalog.json</code> 的 <code>ratios</code>。</p>

    <h3>Wiki 条目缩略图</h3>
    <p>{{ ratios?.wikiThumbs?.note || '条目页 thumb32 / thumb64 / atlas 被强制收成正方形。' }}</p>
  </div>
</template>

<style scoped>
.icon-ratios table {
  width: 100%;
  font-size: 0.9rem;
}
.icon-ratios td span + span::before {
  content: '、';
}
</style>
