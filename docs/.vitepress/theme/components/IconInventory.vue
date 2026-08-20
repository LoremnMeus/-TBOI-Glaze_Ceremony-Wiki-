<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/icon-catalog.json'
import EidIcon from './EidIcon.vue'

const props = defineProps({
  section: { type: String, default: '' },
})

const show = computed(() => (name) => !props.section || props.section === name)

const eidIcons = computed(() => catalog.eid?.icons || [])
const vanillaUi = computed(() => catalog.vanillaUi || [])
const vanillaCollectibles = computed(() => catalog.vanillaCollectibleFiles || [])
const vanillaTrinkets = computed(() => catalog.vanillaTrinketFiles || [])
const qingCollectibles = computed(() => catalog.qingCollectibleFiles || [])
const qingTrinkets = computed(() => catalog.qingTrinketFiles || [])
</script>

<template>
  <div class="icon-inventory">
    <section v-if="show('eid')">
      <div class="icon-grid eid-grid">
        <div v-for="icon in eidIcons" :key="icon.name" class="icon-cell">
          <EidIcon :name="icon.name" />
          <code>{{ icon.name }}</code>
        </div>
      </div>
    </section>

    <section v-if="show('vanillaUi')">
      <div class="sheet-list">
        <figure v-for="name in vanillaUi" :key="name">
          <img :src="withBase(`/icons/vanilla/ui/${name}`)" :alt="name" />
          <figcaption><code>{{ name }}</code></figcaption>
        </figure>
      </div>
    </section>

    <section v-if="show('vanillaItems')">
      <h3>Collectibles</h3>
      <div class="item-grid">
        <img
          v-for="name in vanillaCollectibles"
          :key="name"
          :src="withBase(`/icons/vanilla/collectibles/${name}`)"
          :alt="name"
          :title="name"
        />
      </div>
      <h3>Trinkets</h3>
      <div class="item-grid">
        <img
          v-for="name in vanillaTrinkets"
          :key="name"
          :src="withBase(`/icons/vanilla/trinkets/${name}`)"
          :alt="name"
          :title="name"
        />
      </div>
    </section>

    <section v-if="show('qingItems')">
      <h3>Qing collectibles</h3>
      <div class="item-grid">
        <img
          v-for="name in qingCollectibles"
          :key="name"
          :src="withBase(`/icons/qing/collectibles/${name}`)"
          :alt="name"
          :title="name"
        />
      </div>
      <h3 v-if="qingTrinkets.length">Qing trinkets</h3>
      <div v-if="qingTrinkets.length" class="item-grid">
        <img
          v-for="name in qingTrinkets"
          :key="name"
          :src="withBase(`/icons/qing/trinkets/${name}`)"
          :alt="name"
          :title="name"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.4rem 0.75rem;
}
.icon-cell {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  min-height: 1.5rem;
}
.icon-cell code {
  font-size: 0.75rem;
}
.sheet-list {
  display: grid;
  gap: 1.25rem;
}
.sheet-list img {
  max-width: 100%;
  image-rendering: pixelated;
  background: #222;
}
.item-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.item-grid img {
  width: 32px;
  height: 32px;
  image-rendering: pixelated;
  background: #1a1a1a;
}
</style>
