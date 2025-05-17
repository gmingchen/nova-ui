<template>
  <div :class="ns.b()">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import { provide } from 'vue'
  import { useNamespace } from '@nova-ui/hooks'
  import { buttonGroupProps } from './button-group'
  import { buttonGroupInjectionKey } from './constants'

  const ns = useNamespace('button-group')
  defineOptions({
    name: 'NButtonGroup',
  })
  const props = defineProps(buttonGroupProps)

  provide(
    buttonGroupInjectionKey,
    props
  )
</script>
