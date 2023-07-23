// import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnalyticalDashboard from '../views/dashboard/Anaylitics.vue'

// Vue.use(VueRouter)

const router = createRouter({
    history: createWebHashHistory(),
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
