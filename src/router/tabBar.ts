import { RouteRecordRaw } from 'vue-router'
import Tabbar from '../layout/Tabbar.vue'

const tabBar: RouteRecordRaw = {
  path: '/',
  name: 'index',
  component: Tabbar,
  children: [
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/example/index.vue'),
      meta: {
        icon: 'notebook',
        title: 'example',
        theme: 'purple'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      meta: {
        icon: 'home-outline',
        title: 'template',
        theme: 'seaGreen'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/index.vue'),
      meta: {
        icon: 'account-circle-outline',
        title: 'profile'
      }
    }
  ]
}

export default tabBar
