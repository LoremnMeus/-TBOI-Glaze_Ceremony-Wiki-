<script setup>
import EidMarkup from './EidMarkup.vue'
import VanillaEntity from './VanillaEntity.vue'

defineProps({
  birthright: { type: Object, required: true },
  lang: { type: String, default: 'zh' },
})
</script>

<template>
  <section v-if="birthright.description?.[lang]" class="character-birthright">
    <h2><VanillaEntity entity-type="collectible" :entity-id="619" /></h2>
    <EidMarkup :text="birthright.description[lang]" />
  </section>
</template>
