import { ExtractPropTypes, PropType } from 'vue'
import { useDirectionProp } from '@nova-ui/hooks'

export const scrollbarProps = {
  height: {
    type: [String, Number] as PropType<string | number>,
    default: () => '',
  },
  maxHeight: {
    type: [String, Number] as PropType<string | number>,
    default: () => '',
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: () => '',
  },
  maxWidth: {
    type: [String, Number] as PropType<string | number>,
    default: () => '',
  },
  direction: {
    ...useDirectionProp(),
    default: () => '',
  },
  native: Boolean,
  always: Boolean,
  noresize: Boolean,
} as const

export type ScrollbarType = ExtractPropTypes<typeof scrollbarProps>

export interface ScrollPayload {
  scrollTop: number;
  scrollLeft: number;
}
export const scrollbarEmits = {
  scroll: (payload: ScrollPayload) => {
    return payload
  },
}
export type ScrollbarEmits = typeof scrollbarEmits
