<script setup lang='ts' >
// import {ComputedRef,computed} from 'vue'
import config from '@/static/config.json'
const { github } = (config as Record<string, any>).header
import { StyleProvider } from '@varlet/ui'
import dark from '@varlet/ui/es/themes/dark'
let showMenu = $ref(true)
const languages = (config as Record<string, any>).header.i18n
let darkMode:Record<string, string> | null = $ref(null)
const toGithub = () => {
    window.location.href = github
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

          @click='toggleTheme'
        >
          <var-icon
            size="24px"
            color="#fff"
            :name="darkMode ? 'white-balance-sunny' : 'weather-night'"
          />
        </var-button>
        <var-button
          style="padding-right: 6px"
          text
          color="transparent"
          text-color="#fff"
          @click.stop="showMenu = true"
          v-if="languages"
        >
          <var-icon name="translate" :size="24" />
          <var-icon name="chevron-down" :size="22" />
        </var-button>
      </template>
    </var-app-bar>
  </header>
</template>

<style></style>