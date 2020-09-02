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
    name: 'Mile One',
    component: () => import('@/views/MileOne.vue')
  },
  {
    path: '/laptop-bag',
    name: 'Laptop Bag',
    component: () => import('@/views/LaptopBag.vue')
  },
  {
    path: '/packing-qubes',
    name: 'Packing Qube',
    component: () => import('@/views/PackingQubes.vue')
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('@/views/Brand.vue')
  },
  {
    path: '/materials',
    name: 'Materials',
    component: () => import('@/views/Materials.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
