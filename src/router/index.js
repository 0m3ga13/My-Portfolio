import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '../views/Projects.vue'
import ContactMe from '../views/ContactMe.vue'
import Download from '../views/Download.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/contact',
      name: 'ContactMe',
      component: ContactMe,
    },
    {
      path: '/Downloads',
      name: 'Downloads',
      component: Download,
    },
  
  ],scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: 'smooth' })
      }, 500)
    })
  },
})

export default router
