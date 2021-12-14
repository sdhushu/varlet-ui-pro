import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import tabBar from './tabBar'
import pages from './pages'
import demo from './demo'

const routes = [tabBar, ...pages, ...demo]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
