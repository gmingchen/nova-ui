<template>
  <div :class="n.b()">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import { provide, reactive, toRef, toRefs } from 'vue'
  import { useNamespace } from '@nova-ui/hooks'
  import { checkboxGroupProps } from './checkbox-group'
  import { checkboxGroupInjectionKey } from './constants'

  const n = useNamespace('checkbox-group')
  defineOptions({
    name: 'NCheckboxGroup',
  })
  const props = defineProps(checkboxGroupProps)

  provide(
    checkboxGroupInjectionKey,
    props
  )
</script>
