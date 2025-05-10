import { getCurrentInstance, WritableComputedRef } from 'vue';
import { CheckboxType } from '../checkbox';

export const useCheckboxEvent = (props: CheckboxType, model: WritableComputedRef<boolean>) => {
  const { emit } = getCurrentInstance()!
  
  return {
    handleChange: (e: Event) => {
      emit('change', model.value, props.modelValue, e)
    }
  }
}

export type CheckboxEvent = ReturnType<typeof useCheckboxEvent>
