import { withInstall } from '@nova-ui/utils'
import Button from './src/button.vue'

export const NButton = withInstall(Button)
export default NButton
export * from './src/button'

declare module 'vue' {
  export interface GlobalComponents {
    NButton: typeof NButton
  }
}
