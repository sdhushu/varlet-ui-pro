<script setup lang="ts">
import tabBar from '@/router/tabBar'
import { useRouter } from 'vue-router'
import { pack } from '@/locale'

const menuList = tabBar.children
const router = useRouter()

let active = $ref(router.currentRoute.value.name)

const routeTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="view"><router-view /></div>
  <var-tabs
    v-model:active="active"
    class="home-bar"
    elevation
    item-direction="vertical"
    fixed-bottom
    indicator-color="#00000000"
  >
    <var-tab v-for="v in menuList" :name="v.name" :key="v.name" @click="routeTo(v.path)">
      <var-icon class="icon" :name="v.meta.icon" />
      <div>{{pack.example?[v.meta.title] }}</div>
    </var-tab>
  </var-tabs>
</template>

<style lang="less" scoped>
.view {
  height: calc(100vh - var(--tabs-item-vertical-height));
}
.home-bar {
  .icon {
    margin-bottom: 5px;
  }
}
.var-tabs--layout-horizontal-padding {
  padding: 0;
}
</style>
