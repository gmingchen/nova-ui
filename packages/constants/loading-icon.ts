export const loadingIcons = ['LoadingDot', 'LoadingArc', 'LoadingLine', 'LoadingStrip'] as const

export type LoadingIconType = typeof loadingIcons[number]
