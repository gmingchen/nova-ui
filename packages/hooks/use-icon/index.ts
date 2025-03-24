import { PropType } from 'vue'
import { svgs } from '@nova-ui/svgs'

export type Icon = typeof svgs[number]

export const useIconProp = () => ({
  type: String as PropType<Icon>,
})
