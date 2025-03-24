<template>
  <div :class="n.b()">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import { provide, reactive, toRef, toRefs } from 'vue'
  import { useNamespace } from '@nova-ui/hooks'
  import { buttonGroupProps } from './button-group'
  import { buttonGroupInjectionKey } from './constants'

  const n = useNamespace('button-group')
  defineOptions({
    name: 'NButtonGroup',
  })
  const props = defineProps(buttonGroupProps)

  provide(
    buttonGroupInjectionKey,
    props
  )
</script>
