import { createApp, h } from 'vue'
import App from './App.vue'

(async () => {
  const routerPromise = await import('./routers');

  const routes = await routerPromise.default

  console.log("routes", routes)

  const app = createApp(App)

  app.use(routes)

  app.mount('#app')
})();
