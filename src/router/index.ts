import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import tabBar from './tabBar'
import pages from './pages'
import example from './example'

// import theme from '@/static/theme'
//
// import { StyleProvider } from '@varlet/ui'



const routes = [tabBar, ...pages, ...example]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

// router.beforeEach((to, from, next)=>{
//   let pageTheme = to?.meta?.theme as string || ''
//   StyleProvider(pageTheme?theme[pageTheme]:null)
//   next();
// })

export default router
