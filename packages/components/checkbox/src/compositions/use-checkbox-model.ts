import { computed, getCurrentInstance } from "vue"
import { UPDATE_MODEL_EVENT } from "@nova-ui/constants/event"
import { CheckboxType } from "../checkbox"


export const useCheckboxModel = (props: CheckboxType) => {
  const { emit } = getCurrentInstance()!

  const model = computed({
    get() {
      if(props.activeValue !== undefined) {
        return props.modelValue === props.activeValue
      } else {
        return !!props.modelValue
      }
    },
    set(value) {
      if(props.activeValue !== undefined) {
        emit(UPDATE_MODEL_EVENT, value ? props.activeValue : props.inActiveValue)
      } else {
        emit(UPDATE_MODEL_EVENT, value)
      }
    } 
  })

  return { model }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
