export const sizes = ['small', 'large'] as const

export type Size = typeof sizes[number]