import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutFull from '@/layouts/LayoutFull.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/filme',
          redirect: '/'
        },
        {
          path: '/filme/:id',
          name: 'filme',
          component: () => import('../views/FilmeView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/cadastro',
          name: 'cadastro',
          component: () => import('../views/CadastroView.vue')
        }
      ]
    }
  ]
})

export default router
