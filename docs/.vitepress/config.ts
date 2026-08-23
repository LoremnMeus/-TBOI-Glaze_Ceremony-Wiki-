import { defineConfig } from 'vitepress'
import { eidMarkupPlugin } from './eidMarkupPlugin'
import { wikiDevPlugin } from './wikiDevPlugin'
import generatedSidebar from '../generated/sidebar.json'
import { tokenizeWikiSearch } from './searchTokenize'
import { renderWikiSearchHtml } from './searchIndexRender'

const searchTranslationsZh = {
  button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
  modal: {
    displayDetails: '显示详细列表',
    resetButtonTitle: '清除查询',
    backButtonTitle: '关闭搜索',
    noResultsText: '没有结果',
    footer: {
      selectText: '选择',
      navigateText: '切换',
      closeText: '关闭',
    },
  },
}

export default defineConfig({
  title: '琉璃圣典',
  description: '琉璃圣典：应许之地 Wiki',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  base: process.env.GITHUB_PAGES_BASE || '/',
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '道具', link: '/items/' },
          { text: '饰品', link: '/trinkets/' },
          { text: '卡牌', link: '/cards/' },
          { text: '角色', link: '/characters/' },
          { text: '挑战', link: '/challenges/' },
          { text: '掉落物', link: '/pickups/' },
          { text: '可互动实体', link: '/slots/' },
          { text: '排障', link: '/troubleshooting/' },
          { text: '图标', link: '/icons' },
          { text: '标注', link: '/markup' },
          { text: '格式参考', link: '/markup-cheatsheet' },
          { text: '编辑说明', link: '/editing' },
        ],
        sidebar: generatedSidebar.zh,
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Items', link: '/en/items/' },
          { text: 'Trinkets', link: '/en/trinkets/' },
          { text: 'Cards', link: '/en/cards/' },
          { text: 'Characters', link: '/en/characters/' },
          { text: 'Challenges', link: '/en/challenges/' },
          { text: 'Pickups', link: '/en/pickups/' },
          { text: 'Slots', link: '/en/slots/' },
          { text: 'Troubleshooting', link: '/en/troubleshooting/' },
          { text: 'Icons', link: '/en/icons' },
          { text: 'Markup', link: '/en/markup' },
          { text: 'Cheatsheet', link: '/en/markup-cheatsheet' },
          { text: 'Editing', link: '/en/editing' },
        ],
        sidebar: generatedSidebar.en,
      },
    },
  },
  markdown: {
    math: true,
    config(md) {
      md.use(eidMarkupPlugin)
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { translations: searchTranslationsZh },
          zh: { translations: searchTranslationsZh },
        },
        _render: renderWikiSearchHtml,
        miniSearch: {
          options: {
            tokenize: tokenizeWikiSearch,
            processTerm: (term: string) => term.toLowerCase(),
          },
          searchOptions: {
            prefix: true,
            fuzzy: 0,
            combineWith: 'AND',
            tokenize: tokenizeWikiSearch,
          },
        },
      },
    },
    outline: [2, 3],
  },
  vite: {
    plugins: [wikiDevPlugin()],
  },
})
