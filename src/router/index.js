import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnalyticalDashboard from '../views/dashboard/Anaylitics.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticalDashboard
    },
  ]
})

export default router
