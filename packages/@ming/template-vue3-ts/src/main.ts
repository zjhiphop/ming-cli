import { createApp, h } from 'vue'
import App from './App.vue'
import components from './common/components'
import store from './store/store'
;(async () => {
  const routerPromise = await import('./routers')

  const routes = await routerPromise.default

  console.log('routes', routes)

  const app = createApp(App, { ...store })

  app.use(routes).use(components).mount('#app')
})()
