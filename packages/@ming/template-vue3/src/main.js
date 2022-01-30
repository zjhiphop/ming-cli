import { createApp, h } from 'vue'
import App from './App.vue'
import components from "./common/components/"

(async () => {
  const routerPromise = await import('./routers');

  const routes = await routerPromise.default

  console.log("routes", routes)

  const app = createApp(App)

  app.use(routes).use(components).mount('#app')
})();
