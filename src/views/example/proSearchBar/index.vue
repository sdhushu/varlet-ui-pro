<script setup lang="ts">
import { pack } from '@/locale'
import { Snackbar } from '@varlet/ui'

const value = $ref('')

const clickSearch = () => {
  Snackbar('Hello World！！')
}
</script>

<template>
  <div>
    <h4>{{ pack.searchBar.basicUsage }}</h4>
    <pro-search-bar v-model="value" :placeholder="pack.searchBar.placeholder" />
  </div>

  <div>
    <h4>{{ pack.searchBar.round }}</h4>
    <pro-search-bar
      v-model="value"
      :placeholder="pack.searchBar.placeholder"
      round
    />
  </div>

  <div>
    <h4>{{ pack.searchBar.disabled }}</h4>
    <pro-search-bar
      v-model="value"
      :placeholder="pack.searchBar.placeholder"
      disabled
    />
  </div>

  <div>
    <h4>{{ pack.searchBar.slot }}</h4>
    <pro-search-bar v-model="value" :placeholder="pack.searchBar.placeholder">
      <template #prepend>
        <var-icon name="camera-outline" class="pro-searchBar__camera" />
      </template>
      <template #append>
        <var-button
          style="flex-shrink: 0"
          text
          type="primary"
          @click="clickSearch"
          >{{ pack.searchBar.search }}
        </var-button>
      </template>
    </pro-search-bar>
  </div>
</template>

<style scoped lang="less">
@import '../../../static/css/example';

.pro-searchBar__camera {
  margin-right: 6px;
}
</style>
