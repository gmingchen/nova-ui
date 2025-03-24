import { PropType } from 'vue'
import { SizeType } from '@nova-ui/constants'

export const useSizeProp = () => ({
  type: String as PropType<SizeType>,
})
