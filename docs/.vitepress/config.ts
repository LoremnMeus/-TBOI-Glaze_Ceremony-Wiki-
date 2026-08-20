import { defineConfig } from 'vitepress'
import { eidMarkupPlugin } from './eidMarkupPlugin'

const chineseSidebar = {
  '/icons': [
    {
      text: '素材',
      items: [{ text: '图标清单', link: '/icons' }],
    },
  ],
  '/items/': [
    {
      text: '道具',
      items: [
        { text: '索引', link: '/items/' },
        { text: '福音', link: '/items/gospel' },
        { text: '蓝图', link: '/items/blue-print' },
        { text: '贤者之石', link: '/items/philosophers-stone' },
      ],
    },
  ],
  '/characters/': [
    {
      text: '角色',
      items: [
        { text: '索引', link: '/characters/' },
        { text: '泽伊斯托斯', link: '/characters/zeis' },
        { text: '泽伊兹', link: '/characters/zeiz' },
      ],
    },
  ],
  '/troubleshooting/': [
    {
      text: '排障',
      items: [
        { text: '索引', link: '/troubleshooting/' },
        { text: '进入后黑屏', link: '/troubleshooting/black-screen' },
      ],
    },
  ],
}

const englishSidebar = {
  '/en/icons': [
    {
      text: 'Assets',
      items: [{ text: 'Icon inventory', link: '/en/icons' }],
    },
  ],
  '/en/items/': [
    {
      text: 'Items',
      items: [
        { text: 'Index', link: '/en/items/' },
        { text: 'Gospel', link: '/en/items/gospel' },
        { text: 'Blueprint', link: '/en/items/blue-print' },
        { text: "Philosopher's Stone", link: '/en/items/philosophers-stone' },
      ],
    },
  ],
  '/en/characters/': [
    {
      text: 'Characters',
      items: [
        { text: 'Index', link: '/en/characters/' },
        { text: 'Zeis', link: '/en/characters/zeis' },
        { text: 'Zeiz', link: '/en/characters/zeiz' },
      ],
    },
  ],
  '/en/troubleshooting/': [
    {
      text: 'Troubleshooting',
      items: [
        { text: 'Index', link: '/en/troubleshooting/' },
        { text: 'Black screen after launch', link: '/en/troubleshooting/black-screen' },
      ],
    },
  ],
}

export default defineConfig({
  title: '琉璃仪式',
  description: 'Glaze Ceremony: Promised Land Wiki',
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
          { text: '角色', link: '/characters/' },
          { text: '排障', link: '/troubleshooting/' },
          { text: '图标', link: '/icons' },
          { text: '编辑说明', link: '/editing' },
        ],
        sidebar: chineseSidebar,
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
          { text: 'Characters', link: '/en/characters/' },
          { text: 'Troubleshooting', link: '/en/troubleshooting/' },
          { text: 'Icons', link: '/en/icons' },
          { text: 'Editing', link: '/en/editing' },
        ],
        sidebar: englishSidebar,
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
    search: { provider: 'local' },
    outline: [2, 3],
  },
})
