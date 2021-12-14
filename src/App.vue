<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router.getRoutes())

</script>

<template>
  <router-view />
</template>

<style>
#app {
  height: 100vh;
  transition: background-color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
