import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state:()=>({
        token: '',
        userInfo: null
    })
})
