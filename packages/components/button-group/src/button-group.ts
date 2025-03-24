import { ExtractPropTypes } from 'vue'
import { buttonProps } from '../../button/src/button'

export const buttonGroupProps = {
  ...buttonProps,
} as const

export type ButtonGroupType = ExtractPropTypes<typeof buttonGroupProps>
