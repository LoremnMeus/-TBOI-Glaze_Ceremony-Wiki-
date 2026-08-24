import { defineConfig } from 'vitepress'
import { eidMarkupPlugin } from './eidMarkupPlugin'
import { wikiDevPlugin } from './wikiDevPlugin'
import generatedSidebar from '../generated/sidebar.json'
import { tokenizeWikiSearch } from './searchTokenize'
import { renderWikiSearchHtml } from './searchIndexRender'

const isDev = process.env.NODE_ENV === 'development'

const systemSidebarZh = [
  {
    text: '核心系统',
    items: [
      { text: '系统索引', link: '/systems/' },
      { text: '琉璃', link: '/systems/glaze' },
      { text: '透特牌', link: '/systems/thoth-cards' },
      { text: '蓝图与 Air Flight', link: '/systems/blueprint-air-flight' },
      { text: '控制中枢', link: '/systems/control-hub' },
      { text: '知识与联想', link: '/systems/death-certificate-knowledge' },
    ],
  },
]

const systemSidebarEn = [
  {
    text: 'Core Systems',
    items: [
      { text: 'Systems Index', link: '/en/systems/' },
      { text: 'Glaze', link: '/en/systems/glaze' },
      { text: 'Thoth Cards', link: '/en/systems/thoth-cards' },
      { text: 'Blueprint & Air Flight', link: '/en/systems/blueprint-air-flight' },
      { text: 'Control Hub', link: '/en/systems/control-hub' },
      { text: 'Knowledge & Associations', link: '/en/systems/death-certificate-knowledge' },
    ],
  },
]

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
          {
            text: '内容',
            items: [
              { text: '道具', link: '/items/' },
              { text: '饰品', link: '/trinkets/' },
              { text: '卡牌', link: '/cards/' },
              { text: '掉落物', link: '/pickups/' },
              { text: '可互动实体', link: '/slots/' },
            ],
          },
          { text: '角色', link: '/characters/' },
          { text: '系统', link: '/systems/' },
          { text: '挑战', link: '/challenges/' },
          {
            text: '指南',
            items: [
              { text: '模组介绍', link: '/guide/about' },
              { text: '安装与要求', link: '/guide/install' },
              { text: '常见问题', link: '/guide/faq' },
              { text: '排障', link: '/troubleshooting/' },
            ],
          },
          { text: 'GitHub / Release', link: 'https://github.com/LoremnMeus/-TBOI-Glaze_Ceremony-RGON-/releases' },
          ...(isDev ? [{
            text: '开发',
            items: [
              { text: '图标', link: '/icons' },
              { text: '标注', link: '/markup' },
              { text: '格式参考', link: '/markup-cheatsheet' },
              { text: '编辑说明', link: '/editing' },
            ],
          }] : []),
        ],
        sidebar: { ...generatedSidebar.zh, '/systems/': systemSidebarZh },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Content',
            items: [
              { text: 'Items', link: '/en/items/' },
              { text: 'Trinkets', link: '/en/trinkets/' },
              { text: 'Cards', link: '/en/cards/' },
              { text: 'Pickups', link: '/en/pickups/' },
              { text: 'Slots', link: '/en/slots/' },
            ],
          },
          { text: 'Characters', link: '/en/characters/' },
          { text: 'Systems', link: '/en/systems/' },
          { text: 'Challenges', link: '/en/challenges/' },
          {
            text: 'Guide',
            items: [
              { text: 'About', link: '/en/guide/about' },
              { text: 'Installation & Requirements', link: '/en/guide/install' },
              { text: 'FAQ', link: '/en/guide/faq' },
              { text: 'Troubleshooting', link: '/en/troubleshooting/' },
            ],
          },
          { text: 'GitHub / Release', link: 'https://github.com/LoremnMeus/-TBOI-Glaze_Ceremony-RGON-/releases' },
          ...(isDev ? [{
            text: 'Development',
            items: [
              { text: 'Icons', link: '/en/icons' },
              { text: 'Markup', link: '/en/markup' },
              { text: 'Cheatsheet', link: '/en/markup-cheatsheet' },
              { text: 'Editing', link: '/en/editing' },
            ],
          }] : []),
        ],
        sidebar: { ...generatedSidebar.en, '/en/systems/': systemSidebarEn },
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
