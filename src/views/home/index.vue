<script setup lang="ts">
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider, StyleVars } from '@varlet/ui'
let current = $ref<StyleVars | null>(null)
const changeMode = () => {
  current = current ? null : dark
  StyleProvider(current)
}
</script>

<template>
  <div>home</div>
  <var-button type="primary" @click="changeMode">test dark</var-button>
</template>

<style></style>
