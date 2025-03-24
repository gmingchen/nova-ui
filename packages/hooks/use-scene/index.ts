import { PropType } from 'vue'
import { SceneType } from '@nova-ui/constants'

export const useSceneProp = () => ({
  type: String as PropType<SceneType>,
})
