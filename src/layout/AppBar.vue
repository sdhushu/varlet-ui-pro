<script lang="ts" setup>
import { pack } from '@/locale'
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
    <var-app-bar
      class="app-bar"
      title-position="left"
      :title="pack.example[routerName]"
    >
      <template #left>
        <var-button
          text
          round
          color="transparent"
          text-color="#fff"
          @click="back"
        >
          <var-icon name="chevron-left" :size="28" style="margin-top: 1px" />
        </var-button>
      </template>
    </var-app-bar>
  </header>
  <div class="pro-router-view">
    <router-view />
  </div>
</template>

<style lang="less" scoped>
header {
  font-weight: bold;
}

.pro-router-view {
  padding: 12px 0;
}
</style>
