import './assets/main.css'
import 'vant/lib/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter, router } from './router'
import { setupPinia } from './stores/index'
import { setupPlugins } from './plugins/index'
const setupApp = async () => {
  const app = createApp(App)

  setupRouter(app)

  setupPinia(app)

  setupPlugins(app)

  await router.isReady()

  app.mount('#app')
}

setupApp()
