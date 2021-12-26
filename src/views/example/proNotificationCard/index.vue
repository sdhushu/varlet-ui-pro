<script setup lang='ts'>
import { ref } from 'vue'
</script>

<template>
  <proNotificationCard :contents="['我是火猫', '你是小周']" :loop="false" :autoplay="0">
    <template #extra>
      <var-icon name="information" />
    </template>
  </proNotificationCard>
</template>

<style lang="less" scoped>
.swipe {
  height: 40px;
}

.var-swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
}

:deep(.var-swipe--indicators-vertical) {
  display: none;
}
</style>