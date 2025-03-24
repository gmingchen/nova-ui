export const loadingIcons = ['LoadingDot', 'LoadingArc', 'LoadingLine', 'LoadingStrip'] as const

export type LoadingIcon = typeof loadingIcons[number]
