import { ExtractPropTypes, PropType } from 'vue'
import { useSizeProp } from '@nova-ui/hooks'

export type CheckboxValueType = string | number | boolean

const checkboxTags = ['label', 'span', 'div'] as const
export type CheckboxTagType = typeof checkboxTags[number]

export const checkboxProps = {
  modelValue: [Boolean, Number, String] as PropType<CheckboxValueType>,
  label: {
    type: [Boolean, Number, String],
    default: undefined
  },
  activeValue: {
    type: [Boolean, Number, String],
    default: undefined
  },
  inActiveValue: {
    type: [Boolean, Number, String],
    default: undefined
  },
  size: useSizeProp(),
  tag: {
    type: String as PropType<CheckboxTagType>,
    default: checkboxTags[0] 
  }
}

export type CheckboxType = ExtractPropTypes<typeof checkboxProps>
