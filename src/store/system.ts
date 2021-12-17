import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', {
  state:()=>({
    lang:localStorage.getItem('lang')||'zh-CN'
  }),

  actions:{
    changeLang(lang:string){
      this.lang = lang
      localStorage.setItem('lang',lang)
    }
  }
})
