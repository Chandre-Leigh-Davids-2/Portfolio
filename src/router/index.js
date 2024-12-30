import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import CertificatesView from '@/views/Certificates.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/certificates',
    name:'certificates',
    component: CertificatesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router