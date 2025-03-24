<template>
  <div
    :class="[
      n.b(),
      n.m(direction),
      n.is('native', native),
      n.is('always', always),
    ]"
    :style="sizeStyle"
  >
    <div
      ref="wrapRef"
      :class="[n.e('wrap')]"
      :style="sizeStyle"
      @scroll="onScroll"
    >
      <slot></slot>
    </div>
    <template v-if="!native">
      <Bar
        v-if="!direction || direction === 'vertical'"
        ref="barVerticalRef"
        direction="vertical"
        :always="always"
      >
      </Bar>
      <Bar
        v-if="!direction || direction === 'horizontal'"
        ref="barHorizontalRef"
        direction="horizontal"
        :always="always"
      >
      </Bar>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, provide, watch, computed, CSSProperties, onUpdated } from 'vue'
  import { MaybeComputedElementRef, useResizeObserver } from '@vueuse/core'
  import { useNamespace } from '@nova-ui/hooks'
  import { isNumber, isStringNumber, addUnit, isObject } from '@nova-ui/utils'
  import Bar from './bar.vue'
  import { BarInstance } from './bar'
  import { scrollbarProps, scrollbarEmits } from './scrollbar'
  import { scrollbarInjectionKey } from './constants'

  const n = useNamespace('scrollbar')
  defineOptions({
    name: 'NScrollbar',
  })
  const props = defineProps(scrollbarProps)
  const emits = defineEmits(scrollbarEmits)

  const wrapRef = ref<HTMLDivElement>()
  const barVerticalRef = ref<BarInstance>()
  const barHorizontalRef = ref<BarInstance>()

  const sizeStyle = computed<CSSProperties>(() => {
    const style: { [key: string]: string | undefined } = {
      width: undefined,
      maxWidth: undefined,
      height: undefined,
      maxHeight: undefined,
    }
    for (const key in style) {
      if (Object.prototype.hasOwnProperty.call(style, key)) {
        const value = props[key as keyof typeof props]
        if (value) {
          style[key] = isNumber(value) || isStringNumber(value) ? addUnit(value) : value as unknown as string
        }
      }
    }
    return style
  })

  const barScrollHandler = () => {
    barVerticalRef.value?.scroll()
    barHorizontalRef.value?.scroll()
  }

  const barUpdateHandler = () => {
    barVerticalRef.value?.update()
    barHorizontalRef.value?.update()
  }

  const onScroll = () => {
    barScrollHandler()
    emits('scroll', {
      scrollTop: wrapRef.value?.scrollTop || 0,
      scrollLeft: wrapRef.value?.scrollLeft || 0,
    })
  }

  const update = () => {
    barUpdateHandler()
    barScrollHandler()
  }

  let stopResizeObserver: (() => void) | undefined = undefined
  watch(() => props.noresize, (noresize) => {
    if (noresize) {
      stopResizeObserver?.()
    } else {
      const { stop } = useResizeObserver(wrapRef as unknown as MaybeComputedElementRef, update)
      stopResizeObserver = stop
    }
  }, { immediate: true })

  onUpdated(() => {
    update()
  })

  provide(
    scrollbarInjectionKey,
    reactive({
      wrapElement: wrapRef,
    })
  )

  const setScrollTop = (top: number) => {
    if (wrapRef.value) {
      wrapRef.value.scrollTop = top
    }
  }
  const setScrollLeft = (left: number) => {
    if (wrapRef.value) {
      wrapRef.value.scrollLeft = left
    }
  }
  // eslint-disable-next-line no-undef
  const setScrollTo = (arg1: ScrollToOptions | number, arg2?: number) =>{
    if (isObject(arg1)) {
      wrapRef.value?.scrollTo(arg1)
    } else if (isNumber(arg1) && isNumber(arg2)) {
      wrapRef.value?.scrollTo(arg1, arg2)
    }
  }
  defineExpose({
    wrapRef,
    setScrollTop,
    setScrollLeft,
    setScrollTo,
  })
</script>
