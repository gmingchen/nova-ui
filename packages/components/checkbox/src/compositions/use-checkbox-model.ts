import { computed, getCurrentInstance, inject } from 'vue'
import { UPDATE_MODEL_EVENT } from '@nova-ui/constants/event'
import { CheckboxType } from '../checkbox'
import { CheckboxGroupInjection, checkboxGroupInjectionKey } from '../../../checkbox-group'
import { isUndefined } from '@nova-ui/utils'

export const useCheckboxModel = (props: CheckboxType) => {
  const { emit } = getCurrentInstance()!
  
  const checkboxGroup = inject<CheckboxGroupInjection | undefined>(checkboxGroupInjectionKey, undefined)
  const isGroup = computed(() => !isUndefined(checkboxGroup))

  const model = computed<boolean>({
    get() {
      if(isGroup.value) {
        return checkboxGroup?.model?.value.includes(props.activeValue as string | number)
      }
      if(props.activeValue !== undefined) {
        return props.modelValue === props.activeValue
      } else {
        return !!props.modelValue
      }
    },
    set(value) {
      if(isGroup.value) {
        const result = [...checkboxGroup!.model.value]
        if (value) {
          result.push(props.activeValue!) 
        } else {
          result.splice(result.indexOf(props.activeValue as string | number), 1)
        }
        checkboxGroup?.changeHandler(result)
        return
      }
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
