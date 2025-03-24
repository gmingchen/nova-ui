import { PropType } from 'vue'
import { DirectionType, directions } from '@nova-ui/constants'

export const useDirectionProp = () => ({
  type: String as PropType<DirectionType>,
  default: () => directions[0],
})
