import { ExtractPropTypes, PropType } from 'vue'
import { useSizeProp } from '@nova-ui/hooks'
import { CHANGE_EVENT, CLICK_EVENT, UPDATE_MODEL_EVENT } from "@nova-ui/constants/event"

export type CheckboxValueType = string | number | boolean

const checkboxTags = ['label', 'span', 'div'] as const
export type CheckboxTagType = typeof checkboxTags[number]

export const checkboxProps = {
  modelValue: {
    type: [Boolean, Number, String] as PropType<CheckboxValueType>,
  },
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
  indeterminate: Boolean,
  size: useSizeProp(),
  tag: {
    type: String as PropType<CheckboxTagType>,
    default: checkboxTags[0] 
  },
  border: Boolean,
  link: Boolean,
  disabled: Boolean,
}

export type CheckboxType = ExtractPropTypes<typeof checkboxProps>

export interface CheckboxEmits {
  (e: typeof UPDATE_MODEL_EVENT, value: CheckboxValueType): void,
  (e: typeof CHANGE_EVENT, checked: boolean, value: CheckboxValueType, event: Event): void
}
