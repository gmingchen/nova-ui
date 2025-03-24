import { isBoolean } from "@nova-ui/utils";
import { computed, ComputedRef, inject, InjectionKey } from "vue";

export const usePropInject = <T, U extends object>(key: InjectionKey<T>, props: U): ComputedRef<U> => {
  return computed(() => {
    const context = inject<T | undefined>(key, undefined)
    if (!context) {
      return props;
    }
    const _props: U = {} as U
    for (const key in context) {
      if (Object.prototype.hasOwnProperty.call(context, key)) {
        const element = context[key];
        const _key = key as unknown as keyof U
        const value = props[_key];
        if (isBoolean(value)) {
          _props[_key] = (value ? value : element) as U[keyof U];
        } else {
          _props[_key] = (value !== undefined ? value : element) as U[keyof U];
        }
      }
    }
    return _props
  })
}