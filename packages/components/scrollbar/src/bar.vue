<template>
  <div
    v-show="visible"
    ref="barRef"
    :class="[
      n.b(),
      n.m(direction),
      n.is('always', always)
    ]"
    @mousedown="onBarMouseDown"
  >
    <div
      ref="thumbRef"
      :class="n.e('thumb')"
      :style="thumbStyle"
      @mousedown.stop="onThumbMouseDown"
    >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, computed } from 'vue'
import { useNamespace } from '@nova-ui/hooks'
import { addUnit } from '@nova-ui/utils'
import { barProps } from './bar'
import { scrollbarInjectionKey } from './constants'

const n = useNamespace('bar')
defineOptions({
  name: 'NBar',
})
const props = defineProps(barProps)

const scrollbar = inject(scrollbarInjectionKey)
const barRef = ref()
const thumbRef = ref()

const visible = ref(false)

const size = ref(0)
const ratio = ref(1)
const distance = ref(0)
const wrapScroll = ref(0)
const moveClient = ref(0)

const thumbStyle = computed(() => {
  return {
    [props.direction === 'vertical' ? 'height' : 'width']: size.value ? addUnit(size.value) : undefined,
    transform: `translate${ props.direction === 'vertical' ? 'Y' : 'X' }(${ distance.value }px)`
  }
})

const updateHandler = () => {
  const wrap = scrollbar?.wrapElement
  if (!wrap) return
  
  if (props.direction === 'vertical') {
    const { offsetHeight, scrollHeight }  = wrap
    
    const _ratio = offsetHeight / scrollHeight
    const height = _ratio * offsetHeight

    size.value = height
    ratio.value = _ratio
    visible.value = offsetHeight < scrollHeight
  } else if (props.direction === 'horizontal') {
    const { offsetWidth, scrollWidth }  = wrap

    const _ratio = offsetWidth / scrollWidth
    const width = _ratio * offsetWidth

    size.value = width
    ratio.value = _ratio
    visible.value = offsetWidth < scrollWidth
  }
}

const scrollHandler = () => {
  const wrap = scrollbar?.wrapElement
  if (!wrap) return

  if (props.direction === 'vertical') {
    distance.value = wrap.scrollTop * ratio.value
  } else if (props.direction === 'horizontal') {
    distance.value = wrap.scrollLeft * ratio.value
  }
}

const onBarMouseDown = (event: MouseEvent) => {
  const wrap = scrollbar?.wrapElement
  if (!wrap) return
  if (props.direction === 'vertical') {
    const scrollTop = (event.offsetY - size.value / 2) / ratio.value
    wrap.scrollTop = scrollTop
  } else if (props.direction === 'horizontal') {
    const scrollLeft = (event.offsetX - size.value / 2) / ratio.value
    wrap.scrollLeft = scrollLeft
  }
}

const startMove = (event: MouseEvent) => {
  const wrap = scrollbar?.wrapElement
  if (!wrap) return

  moveClient.value = props.direction === 'vertical' ? event.clientY : event.clientX
  wrapScroll.value = props.direction === 'vertical' ? wrap.scrollTop : wrap.scrollLeft
  event.stopImmediatePropagation()
  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
  document.onselectstart = () => false
}
const mouseMoveHandler = (event: MouseEvent) => {
  const wrap = scrollbar?.wrapElement
  if (!wrap || !barRef.value || !thumbRef.value) return
  
  if (props.direction === 'vertical') {
    const moveDistance = event.clientY - moveClient.value
    const scrollTop = moveDistance / ratio.value + wrapScroll.value
    wrap.scrollTop = scrollTop
  } else if (props.direction === 'horizontal') {
    const moveDistance = event.clientX - moveClient.value
    const scrollLeft = moveDistance / ratio.value + wrapScroll.value
    wrap.scrollLeft = scrollLeft
  }
} 
const mouseUpHandler = () => {
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)
  document.onselectstart = () => true
} 

const onThumbMouseDown = (event: MouseEvent) => {
  startMove(event)
}

defineExpose({
  update: updateHandler,
  scroll: scrollHandler
})
</script>
