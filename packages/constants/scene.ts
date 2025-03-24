export const scenes = ['primary', 'success', 'warning', 'danger', 'error', 'info'] as const

export type SceneType = typeof scenes[number]
