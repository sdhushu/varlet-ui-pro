import { RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

const tabBar: RouteRecordRaw = {
  path: '/',
  name: 'index',
  component: Layout,
  redirect: '/home',
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      meta: {
        icon: 'home-outline',
        title: '首页',
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
