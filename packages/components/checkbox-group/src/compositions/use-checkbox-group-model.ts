import { computed } from 'vue'
import { CheckboxGroupType, CheckboxGroupChangeHandler } from '../checkbox-group'

export const useCheckboxGroupModel = (props: CheckboxGroupType, changeHandler: CheckboxGroupChangeHandler) => {
  const model = computed({
    get() {
      return props.modelValue!
    },
    async set(value) {
      changeHandler(value!)
    } 
  })

  return { model }
}

export type CheckboxGroupModel = ReturnType<typeof useCheckboxGroupModel>
