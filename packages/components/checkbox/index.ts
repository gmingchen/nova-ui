import { withInstall } from '@nova-ui/utils'
import Checkbox from './src/checkbox.vue'

export const NCheckbox = withInstall(Checkbox)
export default NCheckbox
export * from './src/checkbox'

declare module 'vue' {
  export interface GlobalComponents {
    NCheckbox: typeof NCheckbox
  }
}