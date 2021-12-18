

import { RouteRecordRaw } from 'vue-router'


const files = import.meta.globEager('../views/example/***/*.vue')

let example: Array<RouteRecordRaw> = []


for (let key in files) {
  let fileName = key.replace(/(\..\/views\/example\/|\/index.vue)/g, '')
  console.log(key)
  example.push({
    path:`/example/${fileName}`,
    name: fileName,
    component: files[key],
    meta:{
      theme:'purple'
    }
  })
}

export default example
