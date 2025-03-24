import { ExtractPropTypes, PropType } from 'vue'
import { useIconProp } from '@nova-ui/hooks'

export const iconProps = {
  name: {
    ...useIconProp(),
    required: true,
  },
  color: {
    type: String,
  },
  size: {
    type: [Number, String] as PropType<number | string>,
  },
} as const

export type IconType = ExtractPropTypes<typeof iconProps>
