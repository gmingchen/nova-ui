import { createApp } from 'vue'
import App from './App.vue'

import Icon from '@nova-ui/components/icon'
import '@nova-ui/theme-chalk/src/index.scss'

const plugins = [ Icon ]

const app = createApp(App)

plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
