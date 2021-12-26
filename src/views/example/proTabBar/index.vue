<script setup lang='ts'>
import { pack } from "@/locale"

let active1 = $ref(0)
let tabList1 = $ref([
  {
    text: "tab1"
  },
  {
    text: "tab2"
  },
  {
    text: "tab3"
  }
])
let active2 = $ref(0)
let tabList2 = $ref([
  {
    icon: "home-outline",
    text: "tab1"
  },
  {
    icon: "cart",
    text: "tab2"
  },
  {
    icon: "star",
    text: "tab3"
  },
  {
    icon: "account-circle-outline",
    text: "tab4"
  }
])

</script>

<template>
  <div>
    <h4>{{ pack.tabbar?.basicUsage }}</h4>
    <pro-tab-bar v-model:active='active1' :tabList='tabList1'></pro-tab-bar>
  </div>

  <div>
    <h4>{{ pack.tabbar?.customIcon }}</h4>
    <pro-tab-bar v-model:active='active2' :tabList='tabList2'></pro-tab-bar>
  </div>

  <div>
    <h4>{{ pack.tabbar?.showBadge }}</h4>
    <pro-tab-bar v-model:active='active2' :tabList='tabList2'></pro-tab-bar>
  </div>

</template>

<style scoped lang='less'>
h4 {
  margin-bottom: 14px;
  display: block;
}

div {
  margin-bottom: 30px;
}

.pro-searchBar__camera {
  margin-right: 6px;
}
</style>