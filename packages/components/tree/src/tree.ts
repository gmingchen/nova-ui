import { ExtractPropTypes, PropType } from 'vue'
import { useSceneProp, useSizeProp, useLoadingIconProp, useIconProp } from '@nova-ui/hooks'

export const treeProps = {
  data: {
    type: Array as PropType<string[]>,
    default: () => []
  },
} as const

export type TreeType = ExtractPropTypes<typeof treeProps>
