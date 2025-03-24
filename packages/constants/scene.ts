export const scenes = ['primary', 'success', 'warning', 'danger', 'error', 'info'] as const

export type Scene = typeof scenes[number]
