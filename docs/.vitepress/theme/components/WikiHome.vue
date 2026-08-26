<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import catalog from '../../../generated/entries.json'
import FeaturedEntries from './FeaturedEntries.vue'
import HomeCatalog from './HomeCatalog.vue'

const props = defineProps({
  lang: { type: String, default: 'zh' },
})

const english = computed(() => props.lang === 'en')
const prefix = computed(() => (english.value ? '/en' : ''))

const startCards = computed(() => [
  { title: english.value ? 'Characters' : '角色', text: english.value ? 'Explore characters with custom attacks and independent resource systems.' : '从拥有特殊攻击方式与独立资源系统的角色开始。', link: '/characters/' },
  { title: english.value ? 'Items' : '道具', text: english.value ? 'Browse active, passive, familiar, and synergy-driven content.' : '浏览主动、被动、跟班及其特殊联动。', link: '/items/' },
  { title: english.value ? 'Core Systems' : '核心系统', text: english.value ? 'Learn the shared systems that connect multiple entries.' : '了解跨越多个角色、道具与卡牌的玩法系统。', link: '/systems/' },
  { title: english.value ? 'Challenges' : '挑战', text: english.value ? 'See how challenges replace or reshape normal character rules.' : '查看挑战如何替换或重构普通角色的玩法规则。', link: '/challenges/' },
])

const systems = computed(() => [
  { title: english.value ? 'Glaze' : '琉璃', text: english.value ? 'A core content family spanning pickups, items, and more.' : '贯穿掉落物、道具与其他内容的核心系列。', link: '/systems/glaze' },
  { title: english.value ? 'Thoth Cards' : '透特牌', text: english.value ? 'An independent tarot family with upright and reversed faces.' : '拥有正位与逆位的独立塔罗牌体系。', link: '/systems/thoth-cards' },
  { title: english.value ? 'Rainbow' : '彩虹', text: english.value ? 'A visual and design family connected by mental states and shared motifs.' : '以精神状态与共同意象相连的视觉和设计分类。', link: '/systems/rainbow' },
  { title: english.value ? 'Blueprint & Fleet' : '蓝图与机群', text: english.value ? 'Build, refit, deploy, and command an independent fleet.' : '制造、改装、编队并指挥独立作战机群。', link: '/systems/blueprint-air-flight' },
  { title: english.value ? 'Control Hub' : '控制中枢', text: english.value ? 'Appoint administrators whose Follies continuously reshape the world.' : '任命管理员，让他们的愚见持续改变世界。', link: '/systems/control-hub' },
  { title: english.value ? 'Knowledge & Reverie' : '知识与遐想', text: english.value ? 'Store items as knowledge, then realize a nearby reverie floor by floor.' : '将道具保存为知识，并按楼层让附近的遐想成为现实。', link: '/systems/death-certificate-knowledge' },
  { title: english.value ? 'Permanent Effects' : '永久', text: english.value ? 'Items that write cross-run data to your save profile—and how to reset them in ImGui.' : '会写入存档档案、跨局保留的道具效果，以及 ImGui 中的调整入口。', link: '/systems/permanent-effects' },
])

function local(path) {
  return withBase(`${prefix.value}${path}`)
}
</script>

<template>
  <div class="wiki-home">
    <section class="wiki-hero">
      <p class="wiki-hero__eyebrow">Glaze Ceremony / Qing Remaster</p>
      <h1>{{ english ? 'Glaze Ceremony: Promised Land' : '琉璃圣典' }}</h1>
      <p>{{ english
        ? 'The official player Wiki for a large Repentance+ content mod with original characters, items, cards, challenges, pickups, and independent gameplay systems.'
        : '面向玩家的官方 Wiki：收录原创角色、道具、卡牌、挑战、特殊掉落物与多套独立玩法系统。' }}</p>
      <div class="wiki-hero__actions">
        <a class="wiki-button wiki-button--primary" :href="local('/items/')">{{ english ? 'Browse Content' : '浏览内容' }}</a>
        <a class="wiki-button" :href="local('/systems/')">{{ english ? 'Core Systems' : '查看核心系统' }}</a>
      </div>
      <p class="wiki-hero__meta">v{{ catalog.version }} · Repentance+ / REPENTOGON</p>
    </section>

    <section>
      <h2>{{ english ? 'Start Here' : '从这里开始' }}</h2>
      <div class="wiki-home-grid">
        <a v-for="card in startCards" :key="card.link" class="wiki-home-card" :href="local(card.link)">
          <strong>{{ card.title }}</strong>
          <span>{{ card.text }}</span>
        </a>
      </div>
    </section>

    <section>
      <h2>{{ english ? 'Core Systems' : '核心系统' }}</h2>
      <div class="wiki-system-links">
        <a v-for="system in systems" :key="system.link" :href="local(system.link)">
          <strong>{{ system.title }}</strong>
          <span>{{ system.text }}</span>
        </a>
      </div>
    </section>

    <section>
      <h2>{{ english ? 'Featured Entries' : '精选内容' }}</h2>
      <FeaturedEntries :lang="lang" />
    </section>

    <section>
      <h2>{{ english ? 'Browse All Content' : '浏览全部内容' }}</h2>
      <HomeCatalog :lang="lang" />
    </section>

    <section class="wiki-home-links">
      <span>{{ english ? `Current Wiki data: v${catalog.version}` : `当前 Wiki 数据：v${catalog.version}` }}</span>
      <a href="https://github.com/LoremnMeus/-TBOI-Glaze_Ceremony-RGON-/releases">GitHub Release</a>
      <a :href="local('/guide/install')">{{ english ? 'Installation & Requirements' : '安装与要求' }}</a>
    </section>
  </div>
</template>

<style scoped>
.wiki-home {
  display: grid;
  gap: 2.25rem;
}
.wiki-hero {
  padding: clamp(1.4rem, 5vw, 3rem);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--vp-c-brand-1) 14%, var(--vp-c-bg)), var(--vp-c-bg-soft));
}
.wiki-hero h1 { margin: 0.2rem 0 0.6rem; }
.wiki-hero__eyebrow, .wiki-hero__meta { color: var(--vp-c-text-2); }
.wiki-hero__actions { display: flex; flex-wrap: wrap; gap: 0.7rem; margin: 1.1rem 0; }
.wiki-button {
  display: inline-flex;
  padding: 0.55rem 0.95rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
}
.wiki-button--primary { color: var(--vp-button-brand-text); background: var(--vp-button-brand-bg); border-color: transparent; }
.wiki-home-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.8rem; }
.wiki-home-card {
  display: grid;
  gap: 0.35rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
}
.wiki-home-card span { color: var(--vp-c-text-2); }
.wiki-system-links { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.8rem; }
.wiki-system-links a { display: grid; gap: 0.3rem; padding: 0.9rem 1rem; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); text-decoration: none; }
.wiki-system-links span { color: var(--vp-c-text-2); }
.wiki-home-links { display: flex; flex-wrap: wrap; gap: 0.5rem 1rem; padding-top: 1rem; border-top: 1px solid var(--vp-c-divider); color: var(--vp-c-text-2); }
@media (max-width: 640px) {
  .wiki-home-grid, .wiki-system-links { grid-template-columns: 1fr; }
}
</style>
