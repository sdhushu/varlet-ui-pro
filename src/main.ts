import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/static/css/reset.css'
import '@varlet/ui/es/style'

const app = createApp(App)

app.use(router)

app.mount('#app')
