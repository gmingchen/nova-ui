import { PropType } from 'vue'
import { LoadingIconType, loadingIcons } from '@nova-ui/constants'

export const useLoadingIconProp = () => ({
  type: String as PropType<LoadingIconType>,
  default: () => loadingIcons[0],
})
