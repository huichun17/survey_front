import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePage.vue'
import FrontEndView from '../views/FrontEnd.vue'
import FillOutPageView from '../views/FillOutPage.vue'
import ReviewPageView from '../views/ReviewPage.vue'
import StatisticsPageView from '../views/StatisticsPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FrontEndView',
      component: FrontEndView
    },{
      path: '/HomePageView',
      name: 'HomePageView',
      component: HomePageView
    },{
      path: '/FillOutPageView',
      name: 'FillOutPageView',
      component: FillOutPageView
    },{
      path: '/ReviewPageView',
      name: 'ReviewPageView',
      component: ReviewPageView
    },{
      path: '/StatisticsPageView',
      name: 'StatisticsPageView',
      component: StatisticsPageView
    },
    
  ]
})

export default router
