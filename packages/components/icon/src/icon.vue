<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@nova-ui/hooks'
import { iconProps } from './icon'

defineOptions({ name: 'NIcon' })

if (true) {

}

const ns = useNamespace('icon')

const { name, color, size } = defineProps(iconProps)

const className = computed(() => {
  let className = `${ ns.b() } iconfont ${ name || '' }`
  return className
})

const style = computed(() => {
  if (!color && !size) return {}
  
  let fontSize = ''
  if (size) {
    fontSize = typeof size === 'number' ? `${ size }px` : size
  }
  
  return {
    ...(color ? { color } : {}),
    ...(size ? { fontSize } : {})
  }
})

</script>

<template>
  <i :class="className" :style="style"></i>
</template>

<style lang="scss" scoped>
</style>
