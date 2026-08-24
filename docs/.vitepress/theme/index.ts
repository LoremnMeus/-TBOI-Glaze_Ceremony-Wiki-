import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PublicEntry from './components/PublicEntry.vue'
import EntryGrid from './components/EntryGrid.vue'
import HomeCatalog from './components/HomeCatalog.vue'
import MissingTranslation from './components/MissingTranslation.vue'
import EidIcon from './components/EidIcon.vue'
import EidMarkup from './components/EidMarkup.vue'
import IconInventory from './components/IconInventory.vue'
import IconRatios from './components/IconRatios.vue'
import WikiEntryIcon from './components/WikiEntryIcon.vue'
import WikiDevDock from './components/WikiDevDock.vue'
import WikiHome from './components/WikiHome.vue'
import FeaturedEntries from './components/FeaturedEntries.vue'
import CategoryLanding from './components/CategoryLanding.vue'
import VanillaEntity from './components/VanillaEntity.vue'
import AnnaSpecialInteractions from './components/AnnaSpecialInteractions.vue'
import TecroSpecialInteractions from './components/TecroSpecialInteractions.vue'
import TecrorunRouteScaling from './components/TecrorunRouteScaling.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'layout-bottom': () => (import.meta.env.DEV ? h(WikiDevDock) : null),
    }),
  enhanceApp({ app }) {
    app.component('PublicEntry', PublicEntry)
    app.component('EntryGrid', EntryGrid)
    app.component('HomeCatalog', HomeCatalog)
    app.component('MissingTranslation', MissingTranslation)
    app.component('EidIcon', EidIcon)
    app.component('EidMarkup', EidMarkup)
    app.component('IconInventory', IconInventory)
    app.component('IconRatios', IconRatios)
    app.component('WikiEntryIcon', WikiEntryIcon)
    app.component('WikiHome', WikiHome)
    app.component('FeaturedEntries', FeaturedEntries)
    app.component('CategoryLanding', CategoryLanding)
    app.component('VanillaEntity', VanillaEntity)
    app.component('AnnaSpecialInteractions', AnnaSpecialInteractions)
    app.component('TecroSpecialInteractions', TecroSpecialInteractions)
    app.component('TecrorunRouteScaling', TecrorunRouteScaling)
  },
}
