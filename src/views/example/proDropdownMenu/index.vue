<script setup lang="ts">
import { pack } from "@/locale"
const option = [
    [
        '全部商品',
        '活动商品',
        '新款商品'
    ],

    [
        '默认排序',
        '好评排序',
        '新款排序'
    ]

]
</script>

<template>
  <div>
    <h4>{{ pack.searchBar?.basicUsage }}</h4>
    <proDropdownMenu :option="option"></proDropdownMenu>
  </div>

    <div>
    <h4>{{ pack.searchBar?.basicUsage }}</h4>
    <proDropdownMenu :option="option" card></proDropdownMenu>
  </div>
</template>


<style lang='less' scoped>
@import "../../../static/css/example";
</style>