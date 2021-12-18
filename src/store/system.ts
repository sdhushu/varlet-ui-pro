import { defineStore } from 'pinia'
import theme from '@/static/theme'
import { StyleProvider } from '@varlet/ui'

export const useSystemStore = defineStore('system', {
  state: () => ({
    lang: localStorage.getItem('lang') || 'zh-CN',
    pageTheme: '',
    theme: localStorage.getItem('theme') ||''
  }),
  getters: {
    getLang: (state) => state.lang,
    getTheme: (state) => state.theme,
    getThemeConfig:()=>{
      return (themeMode:string):Record<string, string>|null => theme[themeMode]
    }
  },
  actions: {
    changeLang(lang: string) {
      this.lang = lang
      localStorage.setItem('lang', lang)
    },
    changeDarkTheme(){
      if(this.theme ==='dark'){
        this.changeTheme(this.pageTheme||'')
      }else {
        this.changeTheme('dark')
      }
    },
    changeTheme(theme:string){
      this.theme = theme
      localStorage.setItem('theme', theme)
      StyleProvider(this.getThemeConfig(theme))
    },
    changePageTheme(theme:string) {
      this.pageTheme = theme
      if(this.theme!=='dark'){
        this.theme = theme
      }
      this.changeTheme(this.theme)
    }
  }
})
