<script setup lang="ts">
import tabBar from '@/router/tabBar'
import { useRouter, RouteMeta } from 'vue-router'
import { pack } from '@/locale'

const routeList = tabBar.children || []
const router = useRouter()
const active = $ref(router.currentRoute.value.name)

const routeTo = (path: string) => {
  router.push(path)
}

const getRouteTitle = (meta: RouteMeta | undefined) =>
  pack.value.layout?.[meta?.title as string]

routeList
active
routeTo
getRouteTitle
</script>

<template>
  <div class="view">
    <router-view />
  </div>
  <var-tabs
    v-model:active="active"
    class="home-bar"
    elevation
    item-direction="vertical"
    fixed-bottom
    indicator-color="#00000000"
  >
    <var-tab
      v-for="route in routeList"
      :key="route.name"
      :name="route.name"
      @click="routeTo(route.path)"
    >
      <var-icon class="icon" :name="route.meta?.icon" />
      <div>{{ getRouteTitle(route.meta) }}</div>
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
