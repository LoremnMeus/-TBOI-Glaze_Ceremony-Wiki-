<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import EidIcon from './EidIcon.vue'
import iconCatalog from '../../../generated/icon-catalog.json'
import entriesCatalog from '../../../generated/entries.json'

const { page, lang, isDark } = useData()

const ICON_GROUPS = [
  {
    id: 'stats',
    zh: '属性',
    en: 'Stats',
    icons: ['Damage', 'Tears', 'Speed', 'Range', 'Shotspeed', 'Luck', 'DamageSmall', 'TearsSmall', 'Tearsize'],
  },
  {
    id: 'hearts',
    zh: '心',
    en: 'Hearts',
    icons: ['Heart', 'HalfHeart', 'SoulHeart', 'BlackHeart', 'BoneHeart', 'EternalHeart', 'RottenHeart', 'BrokenHeart', 'EmptyHeart', 'GoldenHeart', 'HealingRed'],
  },
  {
    id: 'resources',
    zh: '资源',
    en: 'Pickups',
    icons: ['Coin', 'Bomb', 'Key', 'Battery', 'Card', 'Pill', 'Rune', 'Trinket', 'PoopPickup', 'GrabBag'],
  },
  {
    id: 'rooms',
    zh: '房间',
    en: 'Rooms',
    icons: ['TreasureRoom', 'Shop', 'BossRoom', 'DevilRoom', 'AngelRoom', 'SecretRoom', 'SuperSecretRoom', 'Planetarium', 'SacrificeRoom', 'DiceRoom', 'CursedRoom', 'Library'],
  },
  {
    id: 'status',
    zh: '状态',
    en: 'Status',
    icons: ['Warning', 'Timer', 'Poison', 'Burning', 'Fear', 'Slow', 'Charm', 'Confusion', 'HolyMantle', 'ArrowUp', 'ArrowDown', 'Chargeable'],
  },
  {
    id: 'compat',
    zh: '兼容',
    en: 'Compat',
    icons: ['Seija', 'SeijaB', 'ThothCard', 'ThothCard2', 'Dullize'],
  },
  {
    id: 'quality',
    zh: '品质',
    en: 'Quality',
    icons: ['Quality0', 'Quality1', 'Quality2', 'Quality3', 'Quality4'],
  },
]

const SNIPPETS = [
  { zh: '效果', en: 'Effect', textZh: '### 效果\n\n', textEn: '### Effect\n\n' },
  { zh: '触发', en: 'Trigger', textZh: '### 触发与消耗\n\n', textEn: '### Triggers and cost\n\n' },
  { zh: '数值', en: 'Numbers', textZh: '### 数值\n\n', textEn: '### Numbers\n\n' },
  { zh: '联动', en: 'Synergy', textZh: '### 联动\n\n', textEn: '### Synergies\n\n' },
  { zh: '注意', en: 'Notes', textZh: '### 注意\n\n', textEn: '### Notes\n\n' },
  { zh: '版本', en: 'Version', textZh: '### 版本\n\n', textEn: '### Version\n\n' },
  { zh: '粗体', en: 'Bold', textZh: '**文字**', textEn: '**text**' },
  { zh: '斜体', en: 'Italic', textZh: '*文字*', textEn: '*text*' },
  { zh: '警告', en: 'Warning', textZh: '{{Warning}} ', textEn: '{{Warning}} ' },
  { zh: '计时', en: 'Timer', textZh: '{{Timer}} ', textEn: '{{Timer}} ' },
  { zh: '公式', en: 'Math', textZh: '$x$', textEn: '$x$' },
  { zh: '列表', en: 'List', textZh: '- \n- \n', textEn: '- \n- \n' },
]

const english = computed(() => String(lang.value || '').startsWith('en'))
const relativePath = computed(() => String(page.value?.relativePath || '').replace(/\\/g, '/'))
const cheatsheetHref = computed(() => (english.value ? '/en/markup-cheatsheet' : '/markup-cheatsheet'))

const enabled = ref(false)
const open = ref(false)
const mode = ref('split')
const loading = ref(false)
const saving = ref(false)
const dirty = ref(false)
const error = ref('')
const status = ref('')
const body = ref('')
const savedBody = ref('')
const hasMechanics = ref(false)
const iconTab = ref('stats')
const iconQuery = ref('')
const textareaEl = ref(null)

const canEdit = computed(() => enabled.value && hasMechanics.value)

watch(relativePath, () => {
  dirty.value = false
  error.value = ''
  status.value = ''
  loadPage()
})

watch(mode, () => {
  document.body.classList.toggle('wiki-dev-open', open.value && mode.value !== 'render')
  document.body.classList.toggle('wiki-dev-source', open.value && mode.value === 'source')
})

watch(open, () => {
  document.body.classList.toggle('wiki-dev-open', open.value && mode.value !== 'render')
  document.body.classList.toggle('wiki-dev-source', open.value && mode.value === 'source')
})

onMounted(async () => {
  try {
    const res = await fetch('/__wiki_dev/status')
    const data = await res.json()
    enabled.value = Boolean(data?.enabled)
  } catch {
    enabled.value = false
  }
  if (enabled.value) await loadPage()
})

onUnmounted(() => {
  document.body.classList.remove('wiki-dev-open', 'wiki-dev-source')
})

async function loadPage() {
  if (!enabled.value || !relativePath.value.endsWith('.md')) {
    hasMechanics.value = false
    body.value = ''
    return
  }
  loading.value = true
  error.value = ''
  try {
    const res = await fetch(`/__wiki_dev/page?path=${encodeURIComponent(relativePath.value)}`)
    const data = await res.json()
    hasMechanics.value = Boolean(data?.hasMechanics)
    body.value = data?.body || ''
    savedBody.value = body.value
    dirty.value = false
    if (!data?.ok && data?.error !== 'missing') error.value = data?.error || 'load failed'
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'load failed'
  } finally {
    loading.value = false
  }
}

async function savePage() {
  if (!canEdit.value) return
  saving.value = true
  error.value = ''
  status.value = ''
  try {
    const res = await fetch('/__wiki_dev/page', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: relativePath.value, body: body.value }),
    })
    const data = await res.json()
    if (!data?.ok) {
      error.value = data?.error || 'save failed'
      return
    }
    savedBody.value = body.value
    dirty.value = false
    status.value = english.value ? 'Saved. The rendered page will refresh.' : '已保存，上方渲染会随后刷新。'
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'save failed'
  } finally {
    saving.value = false
  }
}

function onInput(event) {
  body.value = event.target.value
  dirty.value = body.value !== savedBody.value
}

function insertText(snippet) {
  const el = textareaEl.value
  if (!el) {
    body.value += snippet
    dirty.value = true
    return
  }
  const start = el.selectionStart ?? body.value.length
  const end = el.selectionEnd ?? start
  body.value = body.value.slice(0, start) + snippet + body.value.slice(end)
  dirty.value = body.value !== savedBody.value
  nextTick(() => {
    el.focus()
    const pos = start + snippet.length
    el.setSelectionRange(pos, pos)
  })
}

function insertIcon(name) {
  insertText(`{{${name}}} `)
}

const qingEntries = computed(() => {
  const rows = entriesCatalog.entries || []
  const q = iconQuery.value.trim().toLowerCase()
  return rows
    .filter((row) => ['collectible', 'trinket', 'card', 'character', 'challenge'].includes(row.kind))
    .filter((row) => {
      if (!q) return true
      const blob = [row.slug, row.internalKey, row.names?.zh, row.names?.en].join(' ').toLowerCase()
      return blob.includes(q)
    })
    .slice(0, 60)
})

const eidHits = computed(() => {
  const q = iconQuery.value.trim().toLowerCase()
  if (!q) return []
  return (iconCatalog.eid?.names || []).filter((name) => name.toLowerCase().includes(q)).slice(0, 40)
})

function entryMark(row) {
  const prefix = {
    collectible: 'Item',
    trinket: 'Trinket',
    card: 'Card',
    character: 'Character',
    challenge: 'Challenge',
  }[row.kind]
  return `${prefix}:${row.slug}`
}

function label(row) {
  return english.value ? row.names?.en || row.names?.zh || row.slug : row.names?.zh || row.names?.en || row.slug
}

function snippetText(item) {
  return english.value ? item.textEn : item.textZh
}
</script>

<template>
  <div v-if="enabled && canEdit" class="wiki-dev" :class="{ 'wiki-dev--open': open, 'wiki-dev--dark': isDark }">
    <div class="wiki-dev__bar">
      <button type="button" class="wiki-dev__toggle" @click="open = !open">
        {{ open ? (english ? 'Close editor' : '关闭编辑') : (english ? 'Edit mechanics' : '编辑机制说明') }}
      </button>
      <template v-if="open">
        <button type="button" :class="{ active: mode === 'source' }" @click="mode = 'source'">
          {{ english ? 'Source' : '源码' }}
        </button>
        <button type="button" :class="{ active: mode === 'render' }" @click="mode = 'render'">
          {{ english ? 'Render' : '渲染' }}
        </button>
        <button type="button" :class="{ active: mode === 'split' }" @click="mode = 'split'">
          {{ english ? 'Split' : '分栏' }}
        </button>
        <button type="button" :disabled="saving || !dirty" @click="savePage">
          {{ saving ? (english ? 'Saving…' : '保存中…') : (english ? 'Save' : '保存') }}
        </button>
        <a class="wiki-dev__link" :href="cheatsheetHref">{{ english ? 'Cheatsheet' : '格式参考' }}</a>
      </template>
      <span v-if="status" class="wiki-dev__ok">{{ status }}</span>
      <span v-if="error" class="wiki-dev__err">{{ error }}</span>
    </div>
    <div v-if="open && mode !== 'render'" class="wiki-dev__panel">
      <div class="wiki-dev__tools">
        <div class="wiki-dev__row">
          <button v-for="item in SNIPPETS" :key="item.zh" type="button" @click="insertText(snippetText(item))">
            {{ english ? item.en : item.zh }}
          </button>
        </div>
        <div class="wiki-dev__row">
          <button
            v-for="group in ICON_GROUPS"
            :key="group.id"
            type="button"
            :class="{ active: iconTab === group.id }"
            @click="iconTab = group.id"
          >
            {{ english ? group.en : group.zh }}
          </button>
          <button type="button" :class="{ active: iconTab === 'qing' }" @click="iconTab = 'qing'">
            {{ english ? 'Qing entries' : '本模组条目' }}
          </button>
        </div>
        <input
          v-model="iconQuery"
          class="wiki-dev__search"
          :placeholder="english ? 'Search icons / entries' : '搜索图标或条目名'"
        />
        <div v-if="iconTab !== 'qing'" class="wiki-dev__icons">
          <button
            v-for="name in (ICON_GROUPS.find((g) => g.id === iconTab)?.icons || [])"
            :key="name"
            type="button"
            class="wiki-dev__icon"
            :title="name"
            @click="insertIcon(name)"
          >
            <EidIcon :name="name" />
            <code>{{ name }}</code>
          </button>
        </div>
        <div v-else class="wiki-dev__icons">
          <button
            v-for="row in qingEntries"
            :key="row.slug"
            type="button"
            class="wiki-dev__icon"
            :title="entryMark(row)"
            @click="insertIcon(entryMark(row))"
          >
            <EidIcon :name="entryMark(row)" />
            <span>{{ label(row) }}</span>
          </button>
        </div>
        <div v-if="eidHits.length" class="wiki-dev__icons">
          <button
            v-for="name in eidHits"
            :key="'hit-' + name"
            type="button"
            class="wiki-dev__icon"
            :title="name"
            @click="insertIcon(name)"
          >
            <EidIcon :name="name" />
            <code>{{ name }}</code>
          </button>
        </div>
      </div>
      <textarea
        ref="textareaEl"
        class="wiki-dev__source"
        :value="body"
        :disabled="loading"
        spellcheck="false"
        @input="onInput"
      />
    </div>
  </div>
</template>

<style scoped>
.wiki-dev {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  background: var(--vp-c-bg-elv);
  border-top: 1px solid var(--vp-c-divider);
  box-shadow: 0 -8px 24px rgb(0 0 0 / 12%);
}
.wiki-dev__bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
  padding: 0.45rem 0.75rem;
}
.wiki-dev button {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 6px;
  padding: 0.15rem 0.55rem;
  font-size: 0.82rem;
  cursor: pointer;
}
.wiki-dev button.active,
.wiki-dev__toggle {
  border-color: var(--vp-c-brand-1);
}
.wiki-dev button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
.wiki-dev__link {
  font-size: 0.82rem;
}
.wiki-dev__ok {
  color: var(--vp-c-green-1, #3caf6e);
  font-size: 0.8rem;
}
.wiki-dev__err {
  color: var(--vp-c-danger-1, #cb3a3a);
  font-size: 0.8rem;
}
.wiki-dev__panel {
  display: grid;
  grid-template-columns: minmax(16rem, 22rem) 1fr;
  gap: 0.75rem;
  height: min(42vh, 28rem);
  padding: 0 0.75rem 0.75rem;
}
.wiki-dev__tools {
  overflow: auto;
  min-width: 0;
}
.wiki-dev__row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.4rem;
}
.wiki-dev__search {
  width: 100%;
  margin-bottom: 0.45rem;
  padding: 0.25rem 0.45rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.wiki-dev__icons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
}
.wiki-dev__icon {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  max-width: 100%;
}
.wiki-dev__icon code,
.wiki-dev__icon span {
  font-size: 0.72rem;
}
.wiki-dev__source {
  width: 100%;
  height: 100%;
  resize: none;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.85rem;
  line-height: 1.45;
  padding: 0.6rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
@media (max-width: 900px) {
  .wiki-dev__panel {
    grid-template-columns: 1fr;
    height: min(58vh, 36rem);
  }
}
</style>
