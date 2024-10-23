import { withInstall } from '@nova-ui/utils'

import Icon from './src/icon.vue'

const NIcon = withInstall(Icon)
export default NIcon

export * from './src/icon'

declare module 'vue' {
  export interface GlobalComponents {
    NIcon: typeof NIcon
  }
}