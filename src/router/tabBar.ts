import { RouteRecordRaw } from 'vue-router'
import Tabbar from '../layout/tabbar.vue'

const tabBar: RouteRecordRaw = {
  path: '/',
  name: 'index',
  component: Tabbar,
  redirect: '/example',
  children: [
    {
      path:'/example',
      name:'example',
      component:()=>import('../views/example/index.vue'),
      meta: {
        icon: 'notebook',
        title: 'example',
        theme:'purple'
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      meta: {
        icon: 'home-outline',
        title: '首页',
        theme: 'seaGreen'
      },
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/index.vue'),
      meta: {
        icon: 'account-circle-outline',
        title: '我的',
      },
    },
  ],
}

export default tabBar
