import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllBlog from '../views/blog/AllBlog.vue'
import AllContact from '../views/AllContact.vue'
import AllSubscriber from '../views/AllSubscriber.vue'

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
      path: '/blog',
      name: 'blog',
      component: AllBlog
    },
    {
      path: '/contact',
      name: 'contact',
      component: AllContact
    },
    {
      path: '/subscriber',
      name: 'subscriber',
      component: AllSubscriber
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
