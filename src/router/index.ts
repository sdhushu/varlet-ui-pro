import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import tabBar from './tabBar'
import pages from './pages'
import example from './example'

const routes = [tabBar, ...pages, ...example]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
