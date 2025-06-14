import { CheckboxGroupType } from '../checkbox-group'
import { useCheckboxGroupModel } from './use-checkbox-group-model'
import { useCheckboxGroupEvent } from './use-checkbox-group-event'

export const useCheckboxGroup = (props: CheckboxGroupType) => {

  const { changeHandler } = useCheckboxGroupEvent(props)

  const { model } = useCheckboxGroupModel(props, changeHandler)
  
  return {
    model,
    changeHandler
  }
}