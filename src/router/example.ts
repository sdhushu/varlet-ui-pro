import { RouteRecordRaw } from 'vue-router'

import AppBar from '@/layout/AppBar.vue'

const files = import.meta.globEager('../views/example/***/*.vue')

const example: RouteRecordRaw = {
  path: '',
  component: AppBar,
  children: [],
  redirect: '/example',
  meta: {
    icon: 'notebook',
    title: 'example',
    theme: 'purple'
  }
}

for (const key in files) {
  const fileName = key.replace(
    /(\..\/views\/example\/|\/index.vue)/g,
    ''
  ) as string
  ;(example.children as Array<RouteRecordRaw>).push({
    path: `/example/${fileName}`,
    name: fileName,
    component: () => import(`../views/example/${fileName}/index.vue`)
  })
}

export default example
