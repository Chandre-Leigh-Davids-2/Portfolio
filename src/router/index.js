import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LearnMore from '@/views/LearnMore.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/LearnMore',
    name:'LearnMore',
    component: LearnMore
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router