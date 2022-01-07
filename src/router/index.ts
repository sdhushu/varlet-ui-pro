import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import tabBar from './tabBar'
import pages from './pages'
import example from './example'

import { useSystemStore } from '@/store/system'

const routes = [tabBar, ...pages, example]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const system = useSystemStore()
  system.changePageTheme((to.meta?.theme as string) || '')
  next()
})

export default router
