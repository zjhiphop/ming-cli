// .vitepress/theme/index.js

import { h } from 'vue'
import DefaultTheme from 'vitepress/dist/client/theme-default'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData` is a `ref` of current site-level metadata.
  }
}
