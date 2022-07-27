import { createApp } from 'vue'
import App from './App.vue'


import Icon from "@liu-peng/components/icon"

const plugins = [
    Icon
]

const app = createApp(App)
plugins.forEach(plugin=>app.use(plugin))

app.mount('#app')
