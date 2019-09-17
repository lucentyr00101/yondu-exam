import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/products',
      component: () => import('@/base/products'),
      children: [
        {
          path: '',
          name: 'products-index',
          component: () => import('@/views/products/products-index')
        }
      ]
    },
    {
      path: '/config',
      component: () => import('@/base/config'),
      children: [
        {
          path: '',
          name: 'config-home',
          component: () => import('@/views/config/config-home')
        }
      ]
    },
    {
      path: '/cart',
      component: () => import('@/views/cart'),
      name: 'cart'
    }
  ]
})
