import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },
    // {path: '/introduction',
    // name: 'Introduction',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Introduction.vue')},
  {
    path: '/intro',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Intro.vue')
  }, 
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/message.vue')
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
