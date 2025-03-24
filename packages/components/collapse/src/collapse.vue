<template>
  <transition :name="n.b()" v-on="listeners">
    <slot></slot>
  </transition>
</template>

<script lang="ts" setup>
import { RendererElement } from 'vue';
import { useNamespace } from '@nova-ui/hooks';

const n = useNamespace('collapse');
defineOptions({
  name: 'NCollapse',
});

const reset = (el: RendererElement) => {
  const { maxHeight, overflow, paddingTop, paddingBottom } = el.dataset
  el.style.maxHeight = maxHeight;
  el.style.overflow = overflow;
  el.style.paddingTop = paddingTop; 
  el.style.paddingBottom = paddingBottom; 
}

const listeners = {
  beforeEnter: (el: RendererElement) => {
    if (!el.dataset) el.dataset = {}

    const style = getComputedStyle(el as Element)
    const { height, maxHeight, paddingTop, paddingBottom } = style
    
    if (parseInt(height, 10)) el.dataset.height = height
    if (parseInt(maxHeight, 10)) el.dataset.maxHeight = maxHeight
    el.dataset.paddingTop = paddingTop
    el.dataset.paddingBottom = paddingBottom

    el.style.maxHeight = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },
  enter: (el: RendererElement) => {
    requestAnimationFrame(() => {
      el.dataset.overflow = el.style.overflow

      console.log(el.dataset.maxHeight, parseInt(el.dataset.height, 10), parseInt(el.dataset.maxHeight, 10));

      
      
      if (el.dataset.height) {
        el.style.maxHeight = el.dataset.height
      } else if (el.scrollHeight !== 0) {
        const maxHeight = el.scrollHeight + parseInt(el.dataset.paddingTop, 10) + parseInt(el.dataset.paddingBottom, 10)
        el.style.maxHeight = `${ maxHeight }px`
      } else {
        el.style.maxHeight = 0
      }
      el.style.paddingTop = el.dataset.paddingTop
      el.style.paddingBottom = el.dataset.paddingBottom
      el.style.overflow = 'hidden'
    })
  },
  afterEnter: (el: RendererElement) => {
    el.style.maxHeight = ''
    el.style.overflow = el.dataset.overflow
  },
  enterCancelled: (el: RendererElement) => {
    reset(el)
  },
  beforeLeave: (el: RendererElement) => {
    if (!el.dataset) el.dataset = {}
    el.dataset.paddingTop = el.style.paddingTop
    el.dataset.paddingBottom = el.style.paddingBottom
    el.dataset.overflow = el.style.overflow

    el.style.maxHeight = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave: (el: RendererElement) => {
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },
  afterLeave: (el: RendererElement) => {
    reset(el)
  },
  leaveCancelled: (el: RendererElement) => {
    reset(el)
  }
}
</script>

