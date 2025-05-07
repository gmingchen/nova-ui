<template>
  <component
    :is="tag"
    :class="[
      n.b()
    ]"
  >
    <span>
      <input
        v-model="model"
        type="checkbox"
        :class="n.e('input')"
      />
    </span>
    <span
      :class="n.e('label')"
    >
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </component>
</template>

<script lang="ts" setup>
  import { useNamespace } from '@nova-ui/hooks'
  import { checkboxProps } from './checkbox'
  import { useCheckbox } from './compositions'

  const n = useNamespace('checkbox')
  defineOptions({
    name: 'NCheckbox',
  })
  const props = defineProps(checkboxProps)

  const { model } = useCheckbox(props)

</script>


