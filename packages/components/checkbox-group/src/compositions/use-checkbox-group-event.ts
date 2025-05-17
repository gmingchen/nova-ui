import { getCurrentInstance, nextTick } from 'vue';
import { CheckboxGroupType, CheckboxGroupValueType } from '../checkbox-group';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@nova-ui/constants/event';

export const useCheckboxGroupEvent = (props: CheckboxGroupType) => {
  const { emit } = getCurrentInstance()!
  
  return {
    changeHandler: async (value: CheckboxGroupValueType) => {
      const oldValue = props.modelValue ? [...props.modelValue] : undefined
      emit(UPDATE_MODEL_EVENT, value)
      await nextTick()
      emit(CHANGE_EVENT, value, oldValue)
    }
  }
}
export type CheckboxEvent = ReturnType<typeof useCheckboxGroupEvent>
