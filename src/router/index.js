import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
    path: '/introduction',
    name: 'Introduction',
    component: () => import(/* webpackChunkName: "about" */ '../views/Introduction.vue')
    path: '/intro',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Intro.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
