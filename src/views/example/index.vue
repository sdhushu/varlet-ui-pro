<script setup lang='ts' >
import config from '@/static/config.json'
import {useSystemStore} from '@/store/system'

const system = useSystemStore()
const { github,logo,title } = (config as Record<string, any>).header
import { StyleProvider } from '@varlet/ui'
import dark from '@varlet/ui/es/themes/dark'
let showMenu = $ref(false)

const languages = (config as Record<string, any>).header.i18n
let darkMode:Record<string, string> | null = $ref(null)
const toGithub = () => {
    window.location.href = github
}
const changeLanguage = (lang:string)=>{
  system.changeLang(lang)
  showMenu = false
}
const toggleTheme = () => {
  darkMode = darkMode ? null : dark
  StyleProvider(darkMode)

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
                :class="[system.lang === key && 'pro-language-cell--active']"
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
  <div class="logo">
    <h1 class="varlet-home__title">
      <img class="varlet-home__image" :src="logo" />
<!--      <span>{{ title[system.lang] }}</span>-->
    </h1>
<!--    <h2 class="varlet-home__desc">{{ description[system.lang] }}</h2>-->
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
</style>