<script lang="ts" setup>
import { proProps } from './props'

const props = defineProps(proProps)

const value = $ref(props.value)

const handleInput = (v: string, e: Event) => {
  props['onUpdate:value']?.(v)
  props.onInput?.(v, e)
}

const handleChange = (v: string, e: Event) => {
  props.onChange?.(v, e)
}
</script>

<template>
  <div class="pro-search-bar">
    <slot name="prepend"></slot>
    <var-input
      v-model="value"
      :class="props.round ? 'pro-search-bar__round' : 'pro-search-bar__common'"
      :hint="false"
      :line="false"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="handleInput"
      @change="handleChange"
    >
      <template #prepend-icon>
        <var-icon class="pro-search-bar__icon" name="magnify" />
      </template>
    </var-input>
    <slot name="append" class="append"></slot>
  </div>
</template>

<style scoped lang="less">
.pro-search-bar {
  display: flex;
  align-items: center;
  box-sizing: border-box;

  .var-input {
    border: 1px solid #ccc;
  }

  &__icon {
    margin: 0 5px;
  }

  &__common {
    border-radius: 4px;
  }

  &__round {
    border-radius: 16px;
  }
}
</style>
