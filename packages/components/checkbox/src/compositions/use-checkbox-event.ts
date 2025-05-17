import { ComputedRef, getCurrentInstance } from 'vue';
import { CHANGE_EVENT } from '@nova-ui/constants/event';
import { CheckboxType } from '../checkbox';

export const useCheckboxEvent = (props: CheckboxType, model: ComputedRef<boolean>) => {
  const { emit } = getCurrentInstance()!
  
  return {
    handleChange: (e: Event) => {
      emit(CHANGE_EVENT, model.value, props.modelValue, e)
    }
  }
}

export type CheckboxEvent = ReturnType<typeof useCheckboxEvent>
