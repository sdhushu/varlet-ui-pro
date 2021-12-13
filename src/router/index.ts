import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import tabBar from './tabBar'
import pages from './pages'

const routes = [tabBar, ...pages]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
