<template>
  <component
    :is="tag"
    :class="[
      n.b(),
      n.m(props.size),
      n.is('checked', model),
    ]"
  >
    <span :class="n.e('wrapper')">
      <input
        v-model="model"
        type="checkbox"
        :class="n.e('input')"
      />
      <span :class="n.e('box')"></span>
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


