import { PropType } from 'vue'
import { Size } from '@nova-ui/constants'

export const useSizeProp = () => ({
  type: String as PropType<Size>,
})
