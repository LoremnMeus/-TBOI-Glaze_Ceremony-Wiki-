<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'
import FeaturedEntries from './FeaturedEntries.vue'
import HomeCatalog from './HomeCatalog.vue'
import WikiGameLogo from './WikiGameLogo.vue'
import WikiTitleMarquee from './WikiTitleMarquee.vue'

const props = defineProps({
  lang: { type: String, default: 'zh' },
})

const english = computed(() => props.lang === 'en')
const prefix = computed(() => (english.value ? '/en' : ''))

const categories = computed(() => [
  {
    title: english.value ? 'Characters' : '角色',
    subtitle: english.value ? 'Characters' : 'Characters',
    link: '/characters/',
  },
  {
    title: english.value ? 'Items' : '道具',
    subtitle: english.value ? 'Items' : 'Items',
    link: '/items/',
  },
  {
    title: english.value ? 'Cards' : '卡牌',
    subtitle: english.value ? 'Cards' : 'Cards',
    link: '/cards/',
  },
  {
    title: english.value ? 'Challenges' : '挑战',
    subtitle: english.value ? 'Challenges' : 'Challenges',
    link: '/challenges/',
  },
  {
    title: english.value ? 'Core Systems' : '核心系统',
    subtitle: english.value ? 'Systems' : 'Systems',
    link: '/systems/',
  },
])

const systems = computed(() => [
  {
    title: english.value ? 'Glaze' : '琉璃',
    text: english.value
      ? 'A core content family spanning pickups, items, and more.'
      : '贯穿掉落物、道具与其他内容的核心系列。',
    link: '/systems/glaze',
  },
  {
    title: english.value ? 'Thoth Cards' : '透特牌',
    text: english.value
      ? 'An independent tarot family with upright and reversed faces.'
      : '拥有正位与逆位的独立塔罗牌体系。',
    link: '/systems/thoth-cards',
  },
  {
    title: english.value ? 'Special Destinations' : '特殊目的地',
    text: english.value
      ? 'Shared rules for destinations outside the normal floor layout.'
      : '通往楼层地图之外区域的统一目的地规则。',
    link: '/systems/special-destinations',
  },
  {
    title: english.value ? 'Rainbow' : '彩虹',
    text: english.value
      ? 'A visual and design family connected by mental states and shared motifs.'
      : '以精神状态与共同意象相连的视觉和设计分类。',
    link: '/systems/rainbow',
  },
  {
    title: english.value ? 'Blueprint & Fleet' : '蓝图与机群',
    text: english.value
      ? 'Build, refit, deploy, and command an independent fleet.'
      : '制造、改装、编队并指挥独立作战机群。',
    link: '/systems/blueprint-air-flight',
  },
  {
    title: english.value ? 'Control Hub' : '控制中枢',
    text: english.value
      ? 'Appoint administrators whose Follies continuously reshape the world.'
      : '任命管理员，让他们的愚见持续改变世界。',
    link: '/systems/control-hub',
  },
  {
    title: english.value ? 'Knowledge & Reverie' : '知识与遐想',
    text: english.value
      ? 'Store items as knowledge, then realize a nearby reverie floor by floor.'
      : '将道具保存为知识，并按楼层让附近的遐想成为现实。',
    link: '/systems/death-certificate-knowledge',
  },
  {
    title: english.value ? 'Permanent Effects' : '永久',
    text: english.value
      ? 'Long-lived changes that carry across runs until gameplay clears them.'
      : '会跨局保留、直到被对应机制消费或清除的长期变化。',
    link: '/systems/permanent-effects',
  },
])

function local(path) {
  return withBase(`${prefix.value}${path}`)
}
</script>

<template>
  <div class="wiki-home">
    <section class="wiki-home-hero">
      <h1 class="wiki-home-sr-title">
        {{ english ? 'Glaze Ceremony: Promised Land Wiki' : '琉璃圣典：应许之地 Wiki' }}
      </h1>

      <ClientOnly>
        <WikiGameLogo />
        <WikiTitleMarquee />
      </ClientOnly>

      <div class="wiki-home-hero__identity">
        <p class="wiki-home-hero__wiki-title">
          {{ english ? 'Glaze Ceremony Wiki' : '琉璃圣典 Wiki' }}
        </p>
        <p class="wiki-home-hero__subtitle">
          {{ english ? 'Promised Land' : '应许之地' }}
        </p>
        <p class="wiki-home-hero__description">
          {{
            english
              ? 'The official player Wiki for the Glaze Ceremony content mod for The Binding of Isaac: Repentance+.'
              : '《The Binding of Isaac: Repentance+》大型内容模组的官方玩家 Wiki。'
          }}
        </p>

        <div class="wiki-home-hero__actions">
          <a class="wiki-home-button wiki-home-button--primary" :href="local('/items/')">
            {{ english ? 'Browse Content' : '浏览全部内容' }}
          </a>
          <a class="wiki-home-button" :href="local('/guide/install')">
            {{ english ? 'Install & Download' : '安装与下载' }}
          </a>
        </div>

        <p class="wiki-home-hero__meta">
          v{{ catalog.version }} · Repentance+ / REPENTOGON
        </p>
      </div>
    </section>

    <section class="wiki-home-section">
      <h2>{{ english ? 'Browse' : '主要内容' }}</h2>
      <div class="wiki-category-grid">
        <a
          v-for="card in categories"
          :key="card.link"
          class="wiki-category-tile"
          :href="local(card.link)"
        >
          <strong>{{ card.title }}</strong>
          <span>{{ card.subtitle }}</span>
        </a>
      </div>
    </section>

    <section class="wiki-home-section">
      <h2>{{ english ? 'Featured' : '精选内容' }}</h2>
      <FeaturedEntries :lang="lang" />
    </section>

    <section class="wiki-home-section">
      <h2>{{ english ? 'Core Systems' : '核心系统' }}</h2>
      <div class="wiki-system-grid">
        <a
          v-for="system in systems"
          :key="system.link"
          class="wiki-system-tile"
          :href="local(system.link)"
        >
          <strong>{{ system.title }}</strong>
          <span>{{ system.text }}</span>
        </a>
      </div>
    </section>

    <section id="browse" class="wiki-home-section">
      <h2>{{ english ? 'Browse All Content' : '浏览全部内容' }}</h2>
      <HomeCatalog :lang="lang" />
    </section>

    <footer class="wiki-home-footer">
      <span>v{{ catalog.version }}</span>
      <span aria-hidden="true">·</span>
      <a href="https://github.com/LoremnMeus/-TBOI-Glaze_Ceremony-RGON-/releases">GitHub Release</a>
      <span aria-hidden="true">·</span>
      <a :href="local('/guide/install')">
        {{ english ? 'Installation & Requirements' : '安装与要求' }}
      </a>
    </footer>
  </div>
</template>

<style scoped>
.wiki-home {
  width: 100%;
  display: grid;
  gap: 2.4rem;
}

.wiki-home-hero {
  position: relative;
  width: min(100%, 980px);
  margin-inline: auto;
  padding: clamp(1.5rem, 4vw, 2.8rem) 0 clamp(1rem, 3vw, 1.8rem);
  text-align: center;
}

.wiki-home-hero::before {
  content: '';
  position: absolute;
  inset: 0% 8% 20%;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center top,
    color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent),
    transparent 70%
  );
  z-index: 0;
}

.wiki-home-hero > :deep(*) {
  position: relative;
  z-index: 1;
}

.wiki-home-sr-title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.wiki-home-hero__identity {
  margin-top: 1rem;
  display: grid;
  gap: 0.35rem;
  justify-items: center;
}

.wiki-home-hero__wiki-title {
  margin: 0;
  font-size: clamp(1.35rem, 2.4vw, 1.75rem);
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.wiki-home-hero__subtitle {
  margin: 0;
  font-size: 1rem;
  color: var(--vp-c-text-2);
}

.wiki-home-hero__description {
  margin: 0.45rem 0 0;
  max-width: 40rem;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.wiki-home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  justify-content: center;
  margin-top: 1rem;
}

.wiki-home-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.35rem;
  padding: 0.45rem 0.95rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
  box-shadow: inset 0 1px 0 color-mix(in srgb, #fff 12%, transparent);
  transition:
    transform 150ms ease,
    border-color 150ms ease,
    background-color 150ms ease;
}

.wiki-home-button:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 45%, var(--vp-c-divider));
  background: color-mix(in srgb, var(--vp-c-bg-soft) 82%, var(--vp-c-brand-1));
}

.wiki-home-button--primary {
  color: var(--vp-button-brand-text);
  background: var(--vp-button-brand-bg);
  border-color: transparent;
}

.wiki-home-hero__meta {
  margin: 0.85rem 0 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.wiki-home-section {
  display: grid;
  gap: 0.85rem;
}

.wiki-home-section h2 {
  margin: 0;
  font-size: 1.25rem;
}

.wiki-category-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.7rem;
}

.wiki-category-tile {
  display: grid;
  align-content: center;
  gap: 0.2rem;
  min-height: 88px;
  max-height: 140px;
  padding: 0.85rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  text-align: center;
  transition:
    transform 150ms ease,
    border-color 150ms ease,
    background-color 150ms ease;
}

.wiki-category-tile strong {
  color: var(--vp-c-text-1);
  font-size: 1.02rem;
}

.wiki-category-tile span {
  color: var(--vp-c-text-2);
  font-size: 0.82rem;
}

.wiki-category-tile:hover,
.wiki-system-tile:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 40%, var(--vp-c-divider));
  background: color-mix(in srgb, var(--vp-c-bg-soft) 88%, var(--vp-c-brand-1));
}

.wiki-system-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;
}

.wiki-system-tile {
  display: grid;
  gap: 0.25rem;
  align-content: start;
  min-height: 70px;
  max-height: 100px;
  padding: 0.7rem 0.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  overflow: hidden;
  transition:
    transform 150ms ease,
    border-color 150ms ease,
    background-color 150ms ease;
}

.wiki-system-tile strong {
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
}

.wiki-system-tile span {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.wiki-home-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.55rem;
  align-items: center;
  padding-top: 0.35rem;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.wiki-home-footer a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.wiki-home-footer a:hover {
  color: var(--vp-c-brand-1);
}

@media (max-width: 1100px) {
  .wiki-category-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 860px) {
  .wiki-system-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .wiki-home-hero__actions {
    width: 100%;
  }

  .wiki-home-button {
    flex: 1 1 calc(50% - 0.65rem);
  }

  .wiki-category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wiki-system-grid {
    grid-template-columns: 1fr;
  }

  .wiki-system-tile {
    max-height: none;
  }
}

@media (max-width: 380px) {
  .wiki-category-grid {
    grid-template-columns: 1fr;
  }

  .wiki-home-button {
    flex: 1 1 100%;
  }
}
</style>
