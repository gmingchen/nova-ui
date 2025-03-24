import DefaultTheme from 'vitepress/theme'

import NIcon from '@nova-ui/components/icon'
import '@nova-ui/theme-chalk/src/index.scss'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(NIcon)
    }
}