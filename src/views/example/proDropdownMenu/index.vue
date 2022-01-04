<script setup lang='ts'>
import { pack } from "@/locale"
import { $ref } from "vue/macros"

const menu1 = [
  { label: "全部商品", value: 0 },
  { label: "活动商品", value: 1 },
  { label: "新款商品", value: 2 }
]

const menu2 = [
  { label: "默认排序", value: 0 },
  { label: "好评排序", value: 1 },
  { label: "新款排序", value: 2 }
]

let active1 = $ref(0)
let active2 = $ref(0)


</script>

<template>
  <div>
    <h4>{{ pack.dropdownMenu.basicUsage }}</h4>
    <pro-dropdown-menu>
      <pro-dropdown-item :menu='menu1' v-model:active='active1' />
      <pro-dropdown-item :menu='menu2' v-model:active='active2' />
    </pro-dropdown-menu>
  </div>

  <!--  <div>-->
  <!--    <h4>{{ pack.searchBar?.basicUsage }}</h4>-->
  <!--    &lt;!&ndash;    <ProDropdownMenu :options='options'></ProDropdownMenu>&ndash;&gt;-->
  <!--  </div>-->
</template>


<style lang='less' scoped>
@import "../../../static/css/example";
</style>