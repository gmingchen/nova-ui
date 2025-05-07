import { computed, getCurrentInstance } from "vue"
import { UPDATE_MODEL_EVENT } from "@nova-ui/constants/event"
import { CheckboxType } from "../checkbox"


export const useCheckboxModel = (props: CheckboxType) => {
  const { emit } = getCurrentInstance()!

  const model = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit(UPDATE_MODEL_EVENT, value)
    } 
  })

  return { model }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
