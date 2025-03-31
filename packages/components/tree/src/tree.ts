import { ExtractPropTypes, PropType } from 'vue'
import { useSceneProp, useSizeProp, useLoadingIconProp, useIconProp } from '@nova-ui/hooks'

export type Value = string | number | symbol
export interface TreeData {
  key?: Value
  label?: Value
  children?: TreeData[]
  leaf?: boolean
  [key: string]: unknown
}

export interface TreeNode extends Required<TreeData> {
  children: TreeNode[]
  level: number
  raw: TreeData
}

const treeOptions = {
  key: 'key',
  label: 'label',
  children: 'children',
  leaf: 'leaf'
} as const

export type TreeOptions = typeof treeOptions

export const treeProps = {
  data: {
    type: Array as PropType<TreeData[]>,
    default: () => []
  },
  options: {
    type: Object as PropType<TreeOptions>,
    default: () => treeOptions
  },
  defaultExpandKeys: {
    type: Array as PropType<Value[]>,
    default: () => []
  },
} as const

export type TreeType = Partial<ExtractPropTypes<typeof treeProps>>
