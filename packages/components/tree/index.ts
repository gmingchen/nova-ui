import { withInstall } from '@nova-ui/utils'
import Tree from './src/tree.vue'

export const NTree = withInstall(Tree)
export default NTree
export * from './src/tree'

declare module 'vue' {
  export interface GlobalComponents {
    NTree: typeof NTree
  }
}
