<script lang="ts" setup>
import { proProps } from './props'
import { $ref } from 'vue/macros'
import { computed, onMounted, onUnmounted } from 'vue'

const props = defineProps(proProps)
let offsetY = $ref(false)
let clickSelf = $ref(false)

let active = $ref(props.active)

const selectItem = (value: number | string | boolean) => {
  active = value
  offsetY = false
  clickSelf = false
  props['onUpdate:active']?.(active)
  props.onChange?.(value)
}

const showMenu = () => {
  offsetY = true
  clickSelf = true
}

onMounted(() => {
  document.addEventListener('click', handleMenuClose)
})
const handleMenuClose = () => {
  if (clickSelf) {
    clickSelf = false
    return
  }

  if (!offsetY) {
    return
  }
  offsetY = false
  clickSelf = false
}
onUnmounted(() => {
  document.removeEventListener('click', handleMenuClose)
})

const title = computed(() => {
  return (
    props.menu.find((item: unknown) => item.value == active)?.label || // eslint-disable-line
    props.menu[0].label
  )
})
</script>

<template>
  <div class="pro-dropmenu-item">
    <div :class="offsetY ? 'pro-dropmenu-item__active' : ''" @click="showMenu">
      {{ title }}
      <var-icon :name="offsetY ? 'menu-up' : 'menu-down'" />
    </div>
    <div v-show="offsetY" class="cell-list var-elevation--3">
      <var-cell
        v-for="(item, index) in props.menu"
        :key="item.value"
        :border="index !== props.menu.length - 1"
        :class="item.value === active ? 'pro-dropmenu-item__active' : ''"
        :title="item.label"
        @click="selectItem(item.value)"
      >
        <template #extra>
          <var-icon
            v-if="item.value === active"
            name="check"
            color="#2979ff"
            class="var-icons"
          />
        </template>
      </var-cell>
    </div>
  </div>
</template>

<style scoped lang="less">
.pro-dropmenu-item {
  width: 100%;

  &__active {
    color: var(--color-primary);
  }

  .cell-list {
    position: absolute;
    width: 100%;
    left: 0;
    transform: translateY(5px);
    background: var(--color-input-bg);
    z-index: 2000;
    transition: opacity 5s;

    .var-cell {
      display: flex;
      justify-content: space-between;

      :deep(.var-cell__title) {
        text-align: left;
      }
    }
  }
}
</style>
