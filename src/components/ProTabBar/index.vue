<script lang='ts' setup>
import { proProps } from "./props"
import { computed, ComputedRef } from "vue"

const props = defineProps(proProps)
const fixedBottom: ComputedRef<boolean> = computed(() => props.fixedBottom)

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
  <var-tabs v-model:active='active' :fixed-bottom='fixedBottom' elevation indicator-size='0'>
    <var-tab v-for='(tab,index) in tabList' @click='onTabClick(tab,index)' :key='index'>
      <var-badge type='danger' position='right-top'>
        <var-icon v-if='tab.icon' :name='tab.icon' />
        <div>{{ tab.text }}</div>
      </var-badge>
    </var-tab>
  </var-tabs>
</template>

<style scoped lang='less'>
.var-tabs--layout-horizontal-padding {
  padding: 0;
}

//.var-badge {
//  width: 100%;
//  text-align: center;
//  //display: flex;
//  //flex-direction: column;
//  //align-items: center;
//
//  &--right-top {
//    transform: translateY(-20%) translateX(-10%);
//  }
//}
</style>