export const sizes = ['small', 'large'] as const

export type SizeType = typeof sizes[number]