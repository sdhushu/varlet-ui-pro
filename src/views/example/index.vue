<script setup lang="ts">
import config from '@/static/config.json'
import { useSystemStore } from '@/store/system'
import { computed } from 'vue'
import { pack, use } from '@/locale'

import router from '@/router'
import example from '@/router/example'
const { header, title, description } = config as Record<string, any>

const exampleList = computed(() => {
  return example.children
})

const system = useSystemStore()

const { github, logo, i18n } = header

let showMenu = $ref(false)

const lang = computed(() => system.getLang)

const languages = i18n

const darkMode = computed(() => {
  return system.getTheme === 'dark'
})

const toGithub = () => {
  window.location.href = github
}
const changeLanguage = (lang: string) => {
  system.changeLang(lang)
  use(lang)
  showMenu = false
}

const toggleTheme = () => {
  system.changeDarkTheme()
}

const toExample = (path: string) => {
  router.push(path)
}
</script>

<template>
  <header>
    <var-app-bar class="app-bar" title-position="left">
      <template #left>
        <var-button
          style="margin-left: 2px"
          text
          round
          color="transparent"
          text-color="#fff"
          @click="toGithub"
        >
          <var-icon name="github" :size="28" style="margin-top: 1px" />
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
            :name="darkMode ? 'weather-night' : 'white-balance-sunny'"
          />
        </var-button>

        <var-menu v-model:show="showMenu" :offset-y="36">
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
                v-for="(val, key) in languages"
                :key="key"
                :class="[lang === key && 'pro-language-cell--active']"
                class="pro-language-cell"
                @click="changeLanguage(key)"
                >{{ val }}</var-cell
              >
            </div>
          </template>
        </var-menu>
      </template>
    </var-app-bar>
  </header>
  <div class="pro-menu">
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
      v-ripple
      @click="toExample(example.path)"
    >
      <template #extra>
        <var-icon name="chevron-right" size="14" />
      </template>
      <template #default>
        {{ pack.example[example.name] }}
      </template>
    </var-cell>
  </div>
</template>

<style lang="less" scoped>
header {
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
.pro-menu {
  padding: 0 12px 54px 12px;

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
