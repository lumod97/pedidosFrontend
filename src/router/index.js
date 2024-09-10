import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import('../views/Companies/CompaniesMainView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Categories/CategoriesMainView.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('../views/Tables/TablesMainView.vue')
    }
  ]
})

export default router
