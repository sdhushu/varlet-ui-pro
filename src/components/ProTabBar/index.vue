<script lang='ts' setup>
import { proProps } from "./props"
import { computed, ComputedRef } from "vue"

const props = defineProps(proProps)

let active = $ref(props.active)

const tabList: ComputedRef<Array<Record<string, string>> | unknown> = computed(() => props.tabList)

const onTabClick = (tab: Record<string, string>, index: number) => {
  const currentActive = tab.name ?? index
  const { active, onChange, onClick } = props
  props["onUpdate:active"]?.(currentActive)
  onClick?.(currentActive)
  currentActive !== active && onChange?.(currentActive)
}
</script>

<template>
  <var-tabs v-model:active='active' :fixedBottom='props.fixedBottom' elevation indicator-size='0' class='pro-tabbar'>
    <var-tab v-for='(tab, index) in tabList' @click='onTabClick(tab, index)' :key='index'>
      <var-badge
        type='danger'
        position='right-top'
        :hidden='!tab.num && !tab.dot'
        :class="tab.dot ? 'pro-tabbar-dot' : 'pro-tabbar-content'"
        :dot='tab.dot'
        :value='tab.num'
      >
        <var-space
          direction='column'
          align='center'
          size='[0,0]'
          :class="[tab.big && tab.icon ? 'pro-tabbar-bigIcon' : null]"
          class='pro-tabbar-common'
        >
          <var-icon v-if='tab.icon' :name='tab.icon' />
          <div>{{ tab.text }}</div>
        </var-space>
      </var-badge>
    </var-tab>
  </var-tabs>
</template>

<style scoped lang='less'>
.var-tabs--layout-horizontal-padding {
  padding: 0;
}

.pro-tabbar {
  overflow: visible;
  height: 100%;

  :deep(*) {
    overflow: visible !important;
  }

  :deep(&-dot) {
    right: 0;
    transform: translateY(5%) translateX(70%);
  }

  :deep(&-content) {
    padding: 0 4px;
    transform: translateY(-5%) translateX(70%);
    z-index: 99;
  }

  &-common {
    margin: 6px 0;
  }

  &-bigIcon {
    position: absolute;
    top: -68px;
    left: -34px;

    .var-icon {
      font-size: 68px;
      z-index: 999;
      margin-bottom: -4px;
      color: var(--color-primary);
    }
  }
}
</style>
