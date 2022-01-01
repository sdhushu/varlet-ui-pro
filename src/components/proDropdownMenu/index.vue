<script setup lang="ts">
    import { reactive, nextTick, computed, ComputedRef } from 'vue';
    import {proProps} from './props';
    const props = defineProps(proProps);
    let active = $ref(0);
    let menuStatus = reactive({
        // 菜单开合状态
        status: false,
        // 激活选项卡
        action: 0,
        icon: ["menu-down","menu-up"],
        // 首选项
        active_title : '',
        // 子菜单激活选项
        active_index : 0,
        change_title: '',
        init_list: []
    })
    let options:any = computed(()=>props.option[menuStatus.action]);
    let titles = ()=> {
        props.option?.forEach(item=>{
            return menuStatus.init_list.push(item[0]);
        })
    };
    titles();
    let MenuChange =  (index: number,title:string)=> {
        if (index === menuStatus.action) {
            menuStatus.status = menuStatus.status ? false: true
        }else {
            menuStatus.action = index
            menuStatus.active_index = options.value.indexOf(menuStatus.init_list[menuStatus.action]),menuStatus.init_list[menuStatus.action]
            menuStatus.status = true
        }
        menuStatus.action = index
    };


    let ItemChange = (title:string,index:number)=> {
        menuStatus.active_index = index
        menuStatus.init_list[menuStatus.action] = title
        menuStatus.status = false
    };
</script>

<template>
    <var-tabs v-model:active="active">
        <var-tab v-for="(title,index) in menuStatus.init_list" :key="index" @click="MenuChange(index,title)">{{ title }}<var-icon :name="menuStatus.status && index === menuStatus.action ? menuStatus.icon[1] : menuStatus.icon[0]" /></var-tab>
    </var-tabs>

    <var-card v-if="menuStatus.status && props.card">
        <template #title>
            <var-cell border v-ripple v-for="(title,index) in options" :key="index" @click="ItemChange(title,index)"> {{title}} <var-icon v-if="index===menuStatus.active_index" name="check" color="#2979ff" class="var-icons" /></var-cell>
        </template>    
    </var-card>

    <div v-if="menuStatus.status && !props.card">
        <var-cell border v-ripple v-for="(title,index) in options" :key="index" @click="ItemChange(title,index)"> {{title}} <var-icon v-if="index===menuStatus.active_index" name="check" color="#2979ff" class="var-icons" /></var-cell>
    </div>
    
</template>

<style lang="less" scoped>
.var-icons {
    position: absolute;
    right: 5%;
}
</style>