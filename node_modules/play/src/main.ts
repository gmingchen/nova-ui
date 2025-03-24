import { createApp, Plugin } from 'vue'
import App from './App.vue'

import * as components from '@nova-ui/components'
import '@nova-ui/theme-chalk/src/index.scss'

const app = createApp(App)

for (const key in components) {
  if (Object.prototype.hasOwnProperty.call(components, key)) {
    if (key.startsWith('N')) {
      const element = components[key as keyof typeof components]
      app.use(element as Plugin<[]>)
    }
  }
}

app.mount('#app')
