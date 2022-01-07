<script setup lang="ts">
import { pack } from '@/locale'
import { Snackbar } from '@varlet/ui'

const active1 = $ref(0)
const tabList1 = $ref([
  {
    text: 'tab1'
  },
  {
    text: 'tab2'
  },
  {
    text: 'tab3'
  }
])
const active2 = $ref(0)
const tabList2 = $ref([
  {
    icon: 'home-outline',
    text: 'tab1'
  },
  {
    icon: 'cart',
    text: 'tab2'
  },
  {
    icon: 'star',
    text: 'tab3'
  },
  {
    icon: 'account-circle-outline',
    text: 'tab4'
  }
])
const active3 = $ref(0)
const tabList3 = $ref([
  {
    icon: 'home-outline',
    text: 'tab1'
  },
  {
    icon: 'cart',
    text: 'tab2'
  },
  {
    icon: 'star',
    text: 'tab3',
    dot: true
  },
  {
    icon: 'account-circle-outline',
    text: 'tab4',
    num: '99'
  }
])
const clickTabbar = (e: number) => {
  Snackbar.info(`You clicked tab${e + 1}`)
}
const active4 = $ref(0)
const tabList4 = $ref([
  {
    icon: 'home-outline',
    text: 'tab1'
  },
  {
    icon: 'cart',
    text: 'tab2'
  },
  {
    icon: 'plus-circle',
    big: true,
    text: 'tab'
  },
  {
    icon: 'star',
    text: 'tab3'
  },
  {
    icon: 'account-circle-outline',
    text: 'tab4'
  }
])
</script>

<template>
  <div>
    <h4>{{ pack.tabbar.basicUsage }}</h4>
    <pro-tab-bar v-model:active="active1" :tab-list="tabList1"></pro-tab-bar>
  </div>

  <div>
    <h4>{{ pack.tabbar.customIcon }}</h4>
    <pro-tab-bar v-model:active="active2" :tab-list="tabList2"></pro-tab-bar>
  </div>

  <div>
    <h4>{{ pack.tabbar.showBadge }}</h4>
    <pro-tab-bar
      v-model:active="active3"
      :tab-list="tabList3"
      @click="clickTabbar"
    ></pro-tab-bar>
  </div>

  <div>
    <h4>{{ pack.tabbar.bigIcon }}</h4>
    <pro-tab-bar
      v-model:active="active4"
      :tab-list="tabList4"
      @click="clickTabbar"
    ></pro-tab-bar>
  </div>
</template>

<style scoped lang="less">
@import '../../../static/css/example';

.pro-searchBar__camera {
  margin-right: 6px;
}
</style>
