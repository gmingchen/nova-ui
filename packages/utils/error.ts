import { isString } from './dataType'

class NovaUIError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'NovaUIError'
  }
}

export function throwError(scope: string, message: string): never {
  throw new NovaUIError(`[${scope}] ${message}`)
}

export function debugWarn(error: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new NovaUIError(`[${scope}] ${message}`)
      : scope
    console.warn(error)
  }
}
