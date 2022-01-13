<script setup lang="ts">
import { pack } from '@/locale'

const content1 = '我是火猫'
const icon1 = 'bell-outline'
const content2 = [
  {
    noticeIcon: 'bell-outline',
    text: '我是火猫'
  },
  {
    noticeIcon: 'heart',
    text: '你是小周'
  }
]
</script>

<template>
  <div>
    <h4>{{ pack.notice?.basis }}</h4>
    <proNotificationCard :contents="content1" />
  </div>

  <div>
    <h4>{{ pack.notice?.slot }}</h4>
    <proNotificationCard
      :contents="content1"
      :notice-icon="icon1"
      :arrow="false"
    >
      <template #extra>
        <span style="width: 30px">查看</span>
      </template>
    </proNotificationCard>
  </div>

  <div>
    <h4>{{ pack.notice?.swipe }}</h4>
    <proNotificationCard :contents="content2" />
  </div>

  <div>
    <h4>{{ pack.notice?.interval }}</h4>
    <proNotificationCard :contents="content2" :autoplay="2000" />
  </div>
</template>

<style lang="less" scoped>
@import '../../../static/css/example';

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
