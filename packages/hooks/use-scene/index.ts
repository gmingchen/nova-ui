import { PropType } from 'vue'
import { Scene } from '@nova-ui/constants'

export const useSceneProp = () => ({
  type: String as PropType<Scene>,
})
