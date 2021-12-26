<script setup lang="ts">
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'
import proCell from '../example/proCell/index.vue'
let current = $ref(null)
const changeMode = () => {
  current = current?null:dark
  StyleProvider(current)
}
</script>

<template>
  <div>home</div>
  <var-button type='primary' @click='changeMode'>test dark</var-button>
  <proCell :contents="['我是火猫', '你是小周']" :loop="false" :autoplay="0">
    <template #extra>
      <var-icon name="information" />
    </template>
  </proCell>
</template>

<style>

</style>
