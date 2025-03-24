import { withInstall } from '@nova-ui/utils'
import ButtonGroup from './src/button-group.vue'
export * from './src/constants'

export const NButtonGroup = withInstall(ButtonGroup)
export default NButtonGroup

export * from './src/button-group'

declare module 'vue' {
  export interface GlobalComponents {
    NButtonGroup: typeof ButtonGroup
  }
}
