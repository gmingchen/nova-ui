import { ExtractPropTypes } from 'vue'

export const checkboxGroupProps = {
} as const

export type CuttonGroupType = ExtractPropTypes<typeof checkboxGroupProps>
