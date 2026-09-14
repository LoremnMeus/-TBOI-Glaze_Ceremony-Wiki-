<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'
import { homeFeatured } from '../data/homeFeatured.js'

const props = defineProps({
  lang: { type: String, default: 'zh' },
})

const folderByKind = {
  collectible: 'items',
  trinket: 'trinkets',
  card: 'cards',
  character: 'characters',
  challenge: 'challenges',
  pickup: 'pickups',
  slot: 'slots',
}

const systemLabels = {
  'thoth-cards': {
    zh: '透特牌',
    en: 'Thoth Cards',
  },
  'death-certificate-knowledge': {
    zh: '知识与遐想',
    en: 'Knowledge & Reverie',
  },
}

function resolveEntry(slug) {
  const entry = (catalog.entries || []).find((row) => row.slug === slug)
  if (!entry) {
    console.warn(`[FeaturedEntries] Unknown home featured slug: ${slug}`)
    return null
  }
  return entry
}

const featuredCharacters = computed(() =>
  (homeFeatured.characters || []).map(resolveEntry).filter(Boolean),
)

const featuredItems = computed(() =>
  (homeFeatured.items || []).map(resolveEntry).filter(Boolean),
)

const featuredCards = computed(() =>
  (homeFeatured.cards || []).map(resolveEntry).filter(Boolean),
)

const featuredChallenges = computed(() =>
  (homeFeatured.challenges || []).map(resolveEntry).filter(Boolean),
)

const featuredSystems = computed(() =>
  (homeFeatured.systems || []).map((system) => ({
    ...system,
    href: withBase(`${props.lang === 'en' ? '/en' : ''}${system.path}`),
  })),
)

const hasAny = computed(
  () =>
    featuredCharacters.value.length > 0
    || featuredItems.value.length > 0
    || featuredCards.value.length > 0
    || featuredChallenges.value.length > 0
    || featuredSystems.value.length > 0,
)

function label(entry) {
  return entry.names?.[props.lang] || entry.names?.zh || entry.internalKey
}

function systemLabel(system) {
  const labels = systemLabels[system.slug]
  if (!labels) {
    console.warn(`[FeaturedEntries] Missing system label for: ${system.slug}`)
    return system.slug
  }
  return labels[props.lang] || labels.zh || system.slug
}

function href(entry) {
  const prefix = props.lang === 'en' ? '/en' : ''
  return withBase(`${prefix}/${folderByKind[entry.kind] || entry.kind}/${entry.slug}`)
}

function characterImage(entry) {
  return entry.portrait || entry.icon || entry.thumb64 || entry.thumb32
}

function normalImage(entry) {
  return entry.thumb64 || entry.icon || entry.thumb32
}

function challengeImage(entry) {
  return entry.thumb64 || entry.thumb32 || entry.icon
}
</script>

<template>
  <div v-if="hasAny" class="featured-showcase">
    <section
      v-if="featuredCharacters.length"
      class="featured-group featured-group--characters"
    >
      <h3 class="featured-group__title">
        {{ props.lang === 'en' ? 'Signature Characters' : '代表角色' }}
      </h3>
      <div class="featured-character-grid">
        <a
          v-for="entry in featuredCharacters"
          :key="entry.slug"
          :href="href(entry)"
          class="featured-card featured-card--character"
        >
          <img
            v-if="characterImage(entry)"
            :src="withBase(characterImage(entry))"
            :alt="label(entry)"
            class="featured-card__portrait"
          />
          <span class="featured-card__name">{{ label(entry) }}</span>
        </a>
      </div>
    </section>

    <section
      v-if="featuredItems.length"
      class="featured-group featured-group--items"
    >
      <h3 class="featured-group__title">
        {{ props.lang === 'en' ? 'Signature Items' : '代表道具' }}
      </h3>
      <div class="featured-item-grid">
        <a
          v-for="entry in featuredItems"
          :key="entry.slug"
          :href="href(entry)"
          class="featured-card featured-card--item"
        >
          <img
            v-if="normalImage(entry)"
            :src="withBase(normalImage(entry))"
            :alt="label(entry)"
            class="featured-card__icon"
            width="64"
            height="64"
          />
          <span class="featured-card__name">{{ label(entry) }}</span>
        </a>
      </div>
    </section>

    <section
      v-if="featuredCards.length"
      class="featured-group featured-group--cards"
    >
      <h3 class="featured-group__title">
        {{ props.lang === 'en' ? 'Signature Cards' : '代表卡牌' }}
      </h3>
      <div class="featured-card-grid">
        <a
          v-for="entry in featuredCards"
          :key="entry.slug"
          :href="href(entry)"
          class="featured-card featured-card--card"
        >
          <img
            v-if="normalImage(entry)"
            :src="withBase(normalImage(entry))"
            :alt="label(entry)"
            class="featured-card__icon"
            width="64"
            height="64"
          />
          <span class="featured-card__name">{{ label(entry) }}</span>
        </a>
      </div>
    </section>

    <section
      v-if="featuredChallenges.length"
      class="featured-group featured-group--challenges"
    >
      <h3 class="featured-group__title">
        {{ props.lang === 'en' ? 'Featured Challenges' : '特色挑战' }}
      </h3>
      <div class="featured-challenge-grid">
        <a
          v-for="entry in featuredChallenges"
          :key="entry.slug"
          :href="href(entry)"
          class="featured-card featured-card--challenge"
        >
          <img
            v-if="challengeImage(entry)"
            :src="withBase(challengeImage(entry))"
            :alt="label(entry)"
            class="featured-card__icon"
            width="48"
            height="48"
          />
          <span class="featured-card__name">{{ label(entry) }}</span>
        </a>
      </div>
    </section>

    <section
      v-if="featuredSystems.length"
      class="featured-group featured-group--systems"
    >
      <h3 class="featured-group__title">
        {{ props.lang === 'en' ? 'Featured Systems' : '特色系统' }}
      </h3>
      <div class="featured-system-grid">
        <a
          v-for="system in featuredSystems"
          :key="system.slug"
          :href="system.href"
          class="featured-card featured-card--system"
        >
          <span class="featured-card__name">{{ systemLabel(system) }}</span>
          <span class="featured-card__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.featured-showcase {
  display: grid;
  gap: 1.35rem;
}

.featured-group__title {
  margin: 0 0 0.65rem;
  font-size: 0.95rem;
  font-weight: 650;
  color: var(--vp-c-text-2);
}

.featured-character-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.featured-item-grid,
.featured-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.featured-challenge-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.featured-system-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.featured-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.15s ease,
    border-color 0.15s ease,
    background-color 0.15s ease;
}

.featured-card:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 35%, var(--vp-c-divider));
  background: color-mix(in srgb, var(--vp-c-bg-soft) 88%, var(--vp-c-brand-soft));
}

.featured-card--character {
  padding: 1rem 0.85rem 0.9rem;
}

.featured-card--item,
.featured-card--card,
.featured-card--challenge {
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.75rem;
  padding: 0.8rem;
}

.featured-card--system {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0.9rem;
}

.featured-card__portrait {
  width: 100%;
  height: 170px;
  object-fit: contain;
  image-rendering: pixelated;
}

.featured-card__icon {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  object-fit: contain;
  image-rendering: pixelated;
}

.featured-card--challenge .featured-card__icon {
  width: 48px;
  height: 48px;
}

.featured-card__name {
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
}

.featured-card--item .featured-card__name,
.featured-card--card .featured-card__name,
.featured-card--challenge .featured-card__name,
.featured-card--system .featured-card__name {
  text-align: left;
}

.featured-card__arrow {
  color: var(--vp-c-text-3);
  font-size: 1.05rem;
  line-height: 1;
}

@media (max-width: 960px) {
  .featured-character-grid,
  .featured-item-grid,
  .featured-card-grid,
  .featured-challenge-grid,
  .featured-system-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .featured-character-grid,
  .featured-item-grid,
  .featured-card-grid,
  .featured-challenge-grid,
  .featured-system-grid {
    grid-template-columns: 1fr;
  }

  .featured-card__portrait {
    height: 150px;
  }
}
</style>
