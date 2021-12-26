<script setup lang='ts'>
import { proProps } from "./props"
import { ref } from "vue"

const props = defineProps(proProps)
</script>

<template>
  <div class='pro-cell'>
    <var-cell>
      <template #icon>
        <var-swipe class='swipe' :loop='props.loop' vertical :autoplay='props.autoplay' :touchable='false'>
          <var-swipe-item v-for='item in props.contents' :key='item'>
            <var-icon name='information' />
          </var-swipe-item>
        </var-swipe>
      </template>
      <template #default>
        <div class='pro-cell-default'>
          <var-swipe class='swipe' :loop='props.loop' vertical :autoplay='props.autoplay' :touchable='false'>
            <var-swipe-item v-for='item in props.contents' :key='item'>
              {{ item }}
            </var-swipe-item>
          </var-swipe>
        </div>
      </template>
      <template #extra>
        <slot name='extra' />
      </template>
    </var-cell>
  </div>
</template>

<style lang='less' scoped>
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