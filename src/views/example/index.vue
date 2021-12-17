<script setup lang='ts' >
import config from '@/static/config.json'
import {useSystemStore} from '@/store/system'
import { pack,use } from './locale'

const system = useSystemStore()

const {header,title,description} = config as Record<string, any>
const { github,logo,i18n } = header
import { StyleProvider } from '@varlet/ui'
import dark from '@varlet/ui/es/themes/dark'
import { computed } from 'vue'
import router from '@/router'
let showMenu = $ref(false)

const lang = computed(()=> system.lang)

const languages = i18n
let darkMode:Record<string, string> | null = $ref(null)
const toGithub = () => {
    window.location.href = github
}
const changeLanguage = (lang:string)=>{
  system.changeLang(lang)
  use(lang)
  showMenu = false
}
const toggleTheme = () => {
  darkMode = darkMode ? null : dark
  StyleProvider(darkMode)
}

const exampleList = computed(()=>{
  return router.getRoutes().filter(v=>{
    return v.path.includes(('/example/'))
  })
})

const toExample = (path:string)=>{
  router.push(path)
}

</script>

<template>
  <header>
    <var-app-bar
      class="app-bar"
      title-position="left"
    >
      <template #left>
        <var-button
          style="margin-left: 2px;"
          text
          round
          color="transparent"
          text-color="#fff"
          @click="toGithub"
        >
          <var-icon name="github" :size="28" style="margin-top: 1px;" />
        </var-button>
      </template>
      <template #right>
        <var-button
          text
          round
          color="transparent"
          text-color="#fff"
          @click="toggleTheme"
        >
          <var-icon
            size="24px"
            color="#fff"
            :name="darkMode ? 'weather-night':'white-balance-sunny'"
          />
        </var-button>

        <var-menu :offset-y="36" v-model:show="showMenu">
          <var-button
            style="padding-right: 6px"
            text
            text-color="#fff"
            @click.stop="showMenu = true"
          >
            <var-icon name="translate" :size="24" />
            <var-icon name="chevron-down" :size="22" />
          </var-button>
          <template #menu>
            <div class="cell-list">
              <var-cell
                :class="[lang === key && 'pro-language-cell--active']"
                class='pro-language-cell'
                v-for="(val,key) in languages"
                @click="changeLanguage(key)"
                :key='key'>{{val}}</var-cell>
            </div>
          </template>
        </var-menu>
      </template>
    </var-app-bar>
  </header>
  <div class='mainContent'>
    <div class="logo">
      <h1 class="pro-home__title">
        <img class="pro-home__image" :src="logo" />
        <span>{{ title }}</span>
      </h1>
      <h2 class="pro-home__desc">{{ description[lang] }}</h2>
    </div>
    <var-cell
      v-for="example in exampleList"
      :key="example.name"
      @click="toExample(example.path)"
      v-ripple
    >
      <template #extra>
        <var-icon name="chevron-right" size="14" />
      </template>
      <template #default>
        {{ pack[example.name]}}
      </template>
    </var-cell>
  </div>
</template>

<style lang='less' scoped>
header{
  font-weight: bold;
}
.pro-language-cell {
  color: #555;
  background: #fff;
  cursor: pointer;

  &--active {
    color: #3a7afe;
    background: #edf5ff;
  }

}
.mainContent{
  padding: 0 12px  54px 12px;

  .logo {
    height: 100px;
    padding-top: 30px;
    margin-bottom: 20px;
  }

  .pro-home__title {
    margin: 0 0 16px;
    font-size: 32px;
  }

  .pro-home__title,
  .pro-home__desc {
    padding: 0 12px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
  }

  .pro-home__desc {
    margin: 0 0 40px;
    color: #888;
    font-size: 14px;
  }

  .pro-home__image {
    width: 32px;
    height: 32px;
  }

  .pro-home__image,
  .pro-home__title span {
    display: inline-block;
    vertical-align: middle;
  }

  .pro-home__title span {
    margin-left: 16px;
  }
}

</style>