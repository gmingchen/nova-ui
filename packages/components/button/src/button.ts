import { ExtractPropTypes, PropType } from 'vue'
import { useSceneProp, useSizeProp, useLoadingIconProp, useIconProp } from '@nova-ui/hooks'

export const buttonShapes = ['round', 'circle'] as const
export type ButtonShapeType = typeof buttonShapes[number]

export const buttonTypes = ['plain', 'text', 'link', 'dashed'] as const
export type ButtonTypeType = typeof buttonTypes[number]

export const buttonProps = {
  scene: useSceneProp(),
  size: useSizeProp(),
  disabled: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
  loadingIcon: useLoadingIconProp(),
  prefixIcon: useIconProp(),
  suffixIcon: useIconProp(),
  shape: {
    type: String as PropType<ButtonShapeType>
  },
  type: {
    type: String as PropType<ButtonTypeType>
  }
} as const

export type ButtonType = ExtractPropTypes<typeof buttonProps>
