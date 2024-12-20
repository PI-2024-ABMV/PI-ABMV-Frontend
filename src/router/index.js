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
          // redirect: '/'
          name: 'filmee',
          component: () => import('../views/FilmeView.vue')

        },
        {
          path: '/filme/:id',
          name: 'filme',
          component: () => import('../views/FilmeView.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/UserView.vue')
        },
        {
          path: '/edituser',
          name: 'edituser',
          component: () => import('../views/EditUserView.vue')
        },
        {
          path: '/tipoingresso',
          name: 'tipoingresso',
          component: () => import('../views/TipoIngressoView.vue')
        },
        {
          path: '/selecaoassento' ,
          name: 'selecaoassento',
          component: () => import('../views/SelecaoAssentoView.vue')
        },
        {
          path: '/meusingressos',
          name: 'ingressos',
          component: () => import('../views/IngressoView.vue')
        },
        {
          path: '/pagamento',
          name: 'pagamento',
          component: () => import('../views/FormaDePagamentoView.vue')
        }
      ]
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
})

export default router
