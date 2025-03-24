/* eslint-disable @typescript-eslint/no-explicit-any */

export const isString = (value: any): value is string => typeof value === 'string'
export const isNumber = (value: any): value is number => typeof value === 'number'
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'
export const isUndefined = (value: any): value is undefined => value === undefined
export const isStringNumber = (value: any): value is string =>
  isString(value) && !Number.isNaN(Number(value))
