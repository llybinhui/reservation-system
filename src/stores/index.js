import { createPinia } from 'pinia'

export const setupPinia = (app) => {
  const store = createPinia()
  app.use(store)
}
