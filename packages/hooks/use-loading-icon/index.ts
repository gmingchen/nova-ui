import { PropType } from 'vue'
import { LoadingIcon, loadingIcons } from '@nova-ui/constants'

export const useLoadingIconProp = () => ({
  type: String as PropType<LoadingIcon>,
  default: () => loadingIcons[0],
})
