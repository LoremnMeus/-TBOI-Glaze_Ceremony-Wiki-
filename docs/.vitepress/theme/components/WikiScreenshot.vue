<script setup lang="ts">
withDefaults(defineProps<{
  src?: string
  alt: string
  caption?: string
  ready?: boolean
  placeholder?: string
  ratio?: string
}>(), {
  src: '', caption: '', ready: false, placeholder: '截图待补', ratio: '16 / 9',
})
</script>

<template>
  <figure class="wiki-screenshot">
    <img v-if="ready && src" :src="src" :alt="alt">
    <div v-else class="wiki-screenshot__placeholder" :style="{ aspectRatio: ratio }" role="img" :aria-label="alt">
      <strong>{{ placeholder }}</strong><span>{{ alt }}</span>
    </div>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.wiki-screenshot { margin: 1.25rem auto; max-width: 56rem; }
.wiki-screenshot img, .wiki-screenshot__placeholder { display: block; width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg-soft); box-shadow: var(--vp-shadow-2); }
.wiki-screenshot__placeholder { box-sizing: border-box; min-height: 12rem; padding: 2rem; align-content: center; text-align: center; color: var(--vp-c-text-2); }
.wiki-screenshot__placeholder strong, .wiki-screenshot__placeholder span { display: block; }
.wiki-screenshot__placeholder strong { margin-bottom: .4rem; color: var(--vp-c-text-1); }
.wiki-screenshot figcaption { margin-top: .55rem; color: var(--vp-c-text-2); font-size: .9rem; line-height: 1.55; text-align: center; }
</style>
