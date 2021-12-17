import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/static/css/common.less'
import '@varlet/ui/es/style'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())


app.mount('#app')
