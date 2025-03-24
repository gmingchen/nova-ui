import { withInstall } from '@nova-ui/utils'
import Scrollbar from './src/scrollbar.vue'

export const NScrollbar = withInstall(Scrollbar)
export default NScrollbar
export * from './src/scrollbar'

declare module 'vue' {
  export interface GlobalComponents {
    NScrollbar: typeof NScrollbar
  }
}