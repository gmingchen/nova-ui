<template>
  <component
    :is="tag" 
    :class="n.b()"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
  import { provide } from 'vue'
  import { useNamespace } from '@nova-ui/hooks'
  import { CheckboxGroupEmits, CheckboxGroupInjection, checkboxGroupProps } from './checkbox-group'
  import { useCheckboxGroup } from './compositions'
  import { checkboxGroupInjectionKey } from './constants'

  const n = useNamespace('checkbox-group')
  defineOptions({
    name: 'NCheckboxGroup',
  })
  const props = defineProps(checkboxGroupProps)
  defineEmits<CheckboxGroupEmits>()

  const { model, changeHandler } = useCheckboxGroup(props)

  provide<CheckboxGroupInjection>(
    checkboxGroupInjectionKey,
    {
      ...props,
      model,
      changeHandler
    }
  )
</script>
