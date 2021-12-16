

import { RouteRecordRaw } from 'vue-router'


const files = import.meta.globEager('../views/demo/***/*.vue')

let demo: Array<RouteRecordRaw> = []


for (let key in files) {
  let path = key.replace(/(\..\/views\/demo\/|\.vue)/g, '')
  demo.push({
    path:`/${path}`,
    component: () => import(/* @vite-ignore */key)
  })
}

export default demo
