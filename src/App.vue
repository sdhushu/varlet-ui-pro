<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useSystemStore } from '@/store/system'
const router = useRouter()

console.log(router.getRoutes())

const system = useSystemStore()
import { use } from './locale'
use(system.getLang)
</script>

<template>
  <router-view />
</template>

<style>
#app {
  height: 100vh;
  transition: background-color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
