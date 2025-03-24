export const directions = ['vertical', 'horizontal'] as const

export type DirectionType = typeof directions[number]
