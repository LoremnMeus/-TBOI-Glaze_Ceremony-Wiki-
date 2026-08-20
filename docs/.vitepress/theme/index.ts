import DefaultTheme from 'vitepress/theme'
import PublicEntry from './components/PublicEntry.vue'
import EntryGrid from './components/EntryGrid.vue'
import MissingTranslation from './components/MissingTranslation.vue'
import EidIcon from './components/EidIcon.vue'
import EidMarkup from './components/EidMarkup.vue'
import IconInventory from './components/IconInventory.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PublicEntry', PublicEntry)
    app.component('EntryGrid', EntryGrid)
    app.component('MissingTranslation', MissingTranslation)
    app.component('EidIcon', EidIcon)
    app.component('EidMarkup', EidMarkup)
    app.component('IconInventory', IconInventory)
  },
}
