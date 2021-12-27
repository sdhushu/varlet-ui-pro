<script setup lang='ts'>
import { proProps } from "./props"
import { computed, ComputedRef } from "vue"

const props = defineProps(proProps)

const stringContents: ComputedRef<boolean> = computed(() => typeof props.contents === "string")

</script>

<template>
  <var-cell class='var-elevation--1 pro-notice-card'>
    <template #icon v-if='props.noticeIcon'>
      <var-icon :name='props.noticeIcon' />
    </template>
    <template #default>
      <div class='pro-notice-card__content'>
        <div v-if='stringContents' class='var--ellipsis'>{{ props.contents }}</div>
        <var-swipe class='pro-notice-card__swipe' v-else :loop='props.loop' vertical :autoplay='props.autoplay'
                   :touchable='props.touchable'>
          <var-swipe-item v-for='content in props.contents' :key='content.text'>
            <var-icon v-if='content.noticeIcon' :name='content.noticeIcon' />
            <div class='var--ellipsis'>{{ content.text }}</div>
          </var-swipe-item>
        </var-swipe>
      </div>
    </template>
    <template #extra>
      <div class='pro-notice-card__extra'>
        <slot name='extra' />
        <var-icon name='chevron-right' v-if='props.arrow' />
      </div>
    </template>
  </var-cell>
</template>

<style lang='less' scoped>
.pro-notice-card {
  padding: 0 4px 0 6px;

  .var-swipe-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center;

    .var-icon {
      margin-right: var(--cell-icon-right);
    }
  }

  &__swipe {
    height: 40px;
  }

  &__extra {
    display: flex;
    //flex-direction: row;
    align-items: center;
  }
}

//.swipe {
//  height: 40px;
//}
//
//
//:deep(.var-swipe--indicators-vertical) {
//  display: none;
//}
</style>