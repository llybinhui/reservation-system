import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'reservation',
      component: () => import('../views/reservation/index.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/index.vue')
    }
  ]
})

export async function setupRouter(app) {
  app.use(router)
}
