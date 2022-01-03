import vue from "@vitejs/plugin-vue"
import components from "unplugin-vue-components/vite"
import { VarletUIResolver } from "unplugin-vue-components/resolvers"
import { defineConfig } from "vite"

const { resolve } = require("path")


export default defineConfig({
  base: "./",
  plugins: [
    vue({
      // @ts-ignore
      reactivityTransform: true
    }),
    components({
      resolvers: [VarletUIResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
})
