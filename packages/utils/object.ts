export const hasAttribute = (key: string | symbol, object: object): key is string | symbol =>
  Object.prototype.hasOwnProperty.call(object, key)
