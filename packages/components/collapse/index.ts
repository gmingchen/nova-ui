import { withInstall } from '@nova-ui/utils'
import Collapse from './src/collapse.vue'

export const NCollapse = withInstall(Collapse)
export default NCollapse

declare module 'vue' {
  export interface GlobalComponents {
    NCollapse: typeof NCollapse
  }
}