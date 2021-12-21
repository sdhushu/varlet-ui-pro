<script setup lang="ts">
import { pack } from '@/locale'
import { Snackbar } from '@varlet/ui'
let value = $ref('')

const doSearch = () => {

  Snackbar('Hello World！！')
}

</script>

<template>

  <div>
    <h4>{{ pack.searchBar?.basicUsage }}</h4>
    <search-bar :placeholder="pack.searchBar?.placeholder" v-model="value" />
  </div>

  <div>
    <h4>{{ pack.searchBar?.round }}</h4>
    <search-bar :placeholder="pack.searchBar?.placeholder" v-model="value" round />
  </div>

  <div>
    <h4>{{ pack.searchBar?.disabled }}</h4>
    <search-bar :placeholder="pack.searchBar?.placeholder" v-model="value" disabled />
  </div>

  <div>
    <h4>{{ pack.searchBar?.slot }}</h4>
    <search-bar :placeholder="pack.searchBar?.placeholder" v-model="value">
      <template #prepend>
        <var-icon name="camera-outline" class="pro-searchBar__camera" />
      </template>
      <template #append>
        <var-button text type="primary" @click='doSearch'>{{ pack.searchBar?.search }}</var-button>
      </template>
    </search-bar>
  </div>
</template>

<style scoped lang="less">
h4 {
  margin-bottom: 14px;
  display: block;
}
div {
  margin-bottom: 30px;
}
.pro-searchBar__camera{
  margin-right: 6px;
}
</style>
