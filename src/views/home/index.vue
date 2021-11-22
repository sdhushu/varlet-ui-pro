<script setup lang="ts">
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'
let current = null
const changeMode = () => {
  console.log(11)
  current = current?null:dark
  StyleProvider(current)
}
</script>

<template>
  <div>home</div>
  <var-button @click='changeMode'>test dark</var-button>
</template>

<style>

</style>
