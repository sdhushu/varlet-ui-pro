<script lang="ts" setup>
import { pack } from '@/views/example/locale'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const routerName = computed(() => router.currentRoute.value.name)

const back = () => {
  router.go(-1)
}
</script>

<template>
  <header>
    <var-app-bar class="app-bar" title-position="left" :title="pack[routerName]">
      <template #left>
        <var-button text round @click="back" color="transparent" text-color="#fff">
          <var-icon name="chevron-left" :size="28" style="margin-top: 1px" />
        </var-button>
      </template>
    </var-app-bar>
  </header>
</template>

<style lang="less" scoped>
header {
  font-weight: bold;
}
</style>
