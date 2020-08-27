import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('@/views/Join.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import('@/views/Pay.vue')
  },
  {
    path: '/reserve',
    name: 'Reserve',
    component: () => import('@/views/Reserve.vue')
  },
  {
    path: '/mile-one',
    name: 'Product',
    component: () => import('@/views/Product.vue')
  },
  {
    path: '/packing-qubes',
    name: 'Qubes',
    component: () => import('@/views/Qubes.vue')
  }
  // {
  //   path: '*',
  //   name: '404',
  //   component: () => import('@/views/Home.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
