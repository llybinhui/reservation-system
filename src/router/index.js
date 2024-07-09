import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('../views/reservation/index.vue')
    },
    {
      path: '/my-reservation',
      name: 'my-reservation',
      component: () => import('../views/my-reservation/index.vue')
    }
  ]
})

export async function setupRouter(app) {
  app.use(router)
}
