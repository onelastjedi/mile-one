import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Join.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Pay.vue')
  },
  {
    path: '/reserve',
    name: 'Reserve',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Reserve.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
