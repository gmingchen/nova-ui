import { ExtractPropTypes, PropType, ComputedRef } from 'vue'
import { checkboxProps, CheckboxValueType } from '../../checkbox/src/checkbox'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@nova-ui/constants/event'

export type CheckboxGroupValueType = CheckboxValueType[]

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<CheckboxGroupValueType>,
  },
  min: Number,
  max: Number,
  size: checkboxProps.size,
  tag: checkboxProps.tag,
  border: Boolean,
  link: Boolean,
  disabled: Boolean,
  name: String,
} as const

export type CheckboxGroupType = ExtractPropTypes<typeof checkboxGroupProps>

export interface CheckboxGroupEmits {
  (e: typeof UPDATE_MODEL_EVENT, value: CheckboxValueType): void,
  (e: typeof CHANGE_EVENT, checked: boolean, value: CheckboxValueType, event: Event): void
}

export type CheckboxGroupChangeHandler = (value: CheckboxGroupValueType) => Promise<void>
export interface CheckboxGroupInjection extends CheckboxGroupType {
  model: ComputedRef<CheckboxGroupValueType>,
  changeHandler: CheckboxGroupChangeHandler
}
