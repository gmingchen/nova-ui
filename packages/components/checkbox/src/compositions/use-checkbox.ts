import { CheckboxType } from '../checkbox'
import { useCheckboxModel } from './use-checkbox-model'

export const useCheckbox = (props: CheckboxType) => {
  console.log(props.activeValue);
  

  const { model } = useCheckboxModel(props)
  
  return {
    model
  }
}