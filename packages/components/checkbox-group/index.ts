import { withInstall } from '@nova-ui/utils'
import CheckboxGroup from './src/button-group.vue'
export * from './src/constants'

export const NCheckboxGroup = withInstall(CheckboxGroup)
export default NCheckboxGroup

export * from './src/checkbox-group'

declare module 'vue' {
  export interface GlobalComponents {
    NCheckboxGroup: typeof CheckboxGroup
  }
}
