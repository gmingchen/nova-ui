import DefaultTheme from 'vitepress/theme'

import * as components from '@nova-ui/components/index'
import '@nova-ui/theme-chalk/src/index.scss'
import * as customComponents from '../components/index'
import './index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    for (const key in components) {
      if (Object.prototype.hasOwnProperty.call(components, key)) {
        if (key.startsWith('N')) {
          const component = components[key]
          app.use(component)
        }
      }
    }
    for (const key in customComponents) {
      if (Object.prototype.hasOwnProperty.call(customComponents, key)) {
        const component = customComponents[key]
        app.component(key, component)
      }
    }
  }
}