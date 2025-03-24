import { ExtractPropTypes } from 'vue'
import { useDirectionProp } from '@nova-ui/hooks'
import type bar from './bar.vue'

export const barProps = {
  direction: useDirectionProp(),
  always: Boolean,
} as const

export type BarType = ExtractPropTypes<typeof barProps>

export type BarInstance = InstanceType<typeof bar>
