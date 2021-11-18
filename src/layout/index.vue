<script setup lang="ts">
import tabBar from '@/router/tabBar'
import { useRouter } from 'vue-router'

const menuList = tabBar.children
const router = useRouter()
let active = $ref(0)

const routeTo = (path) => {
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
    <var-tab v-for="v in menuList" :key="v.name" @click="routeTo(v.path)">
      <var-icon class="icon" :name="v.meta.icon" />
      <div>{{ v.meta.title }}</div>
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
