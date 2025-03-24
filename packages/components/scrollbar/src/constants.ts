import { InjectionKey } from "vue";

export interface ScrollbarInjection {
  wrapElement?: HTMLDivElement
}

export const scrollbarInjectionKey: InjectionKey<ScrollbarInjection> = Symbol(
  'scrollbarContextKey'
)