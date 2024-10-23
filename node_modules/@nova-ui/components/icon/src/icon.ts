import { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  name: {
    type: String,
    required: true,
  },
  color: String,
  size: [Number, String] as PropType<number | string>
} as const

type IconType = ExtractPropTypes<typeof iconProps>