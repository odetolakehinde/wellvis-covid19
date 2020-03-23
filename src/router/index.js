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
    path: '/question1',
    name: 'question1',
    component: () => import('../views/Questions/Question1.vue')
  },
  {
    path: '/question2',
    name: 'question2',
    component: () => import('../views/Questions/Question2.vue')
  },
  {
    path: '/question3',
    name: 'question3',
    component: () => import('../views/Questions/Question3.vue')
  },
  {
    path: '/question4',
    name: 'question4',
    component: () => import('../views/Questions/Question4.vue')
  },
  {
    path: '/question5',
    name: 'question5',
    component: () => import('../views/Questions/Question5.vue')
  },
  {
    path: '/question6',
    name: 'question6',
    component: () => import('../views/Questions/Question6.vue')
  },
  {
    path: '/question7',
    name: 'question7',
    component: () => import('../views/Questions/Question7.vue')
  },
  {
    path: '/low-risk',
    name: 'lowrisk',
    component: () => import('../views/FinalPages/LowRisk.vue')
  },
  {
    path: '/medium-risk',
    name: 'mediumrisk',
    component: () => import('../views/FinalPages/MediumRisk.vue')
  },
  {
    path: '/high-risk',
    name: 'highrisk',
    component: () => import('../views/FinalPages/HighRisk.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
