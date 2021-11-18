import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import tabBar from './tabBar'
import pages from './pages'

const routes = [tabBar, ...pages]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
