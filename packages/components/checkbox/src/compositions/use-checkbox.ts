import { CheckboxType } from '../checkbox'
import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxEvent } from './use-checkbox-event'

export const useCheckbox = (props: CheckboxType) => {

  const { model } = useCheckboxModel(props)

  const { handleChange } = useCheckboxEvent(props, model)
  
  return {
    model,
    handleChange
  }
}