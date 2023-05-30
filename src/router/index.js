import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePageView',
      component: HomePageView
    },
    
  ]
})

export default router
