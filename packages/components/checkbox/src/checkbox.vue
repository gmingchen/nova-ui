<template>
  <component
    :is="tag"
    :class="[
      n.b(),
      n.m(_props.size),
      n.is('checked', !!model),
      n.is('indeterminate', props.indeterminate),
      n.is('disabled', _props.disabled),
      n.is('border', _props.border),
      n.is('link', _props.link),
    ]"
  >
    <label :class="n.e('wrapper')">
      <input
        v-model="model"
        type="checkbox"
        :disabled="_props.disabled"
        :class="n.e('input')"
        :name="_props.name"
        @change.stop="handleChange"
        @click.stop
      />
      <span :class="n.e('box')"></span>
    </label>
    <span
      :class="n.e('label')"
    >
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </component>
</template>

<script lang="ts" setup>
  import { useNamespace, usePropInject } from '@nova-ui/hooks'
  import { checkboxProps, CheckboxEmits, CheckboxType } from './checkbox'
  import { useCheckbox } from './compositions'
  import { CheckboxGroupInjection, checkboxGroupInjectionKey } from '../../checkbox-group'

  const n = useNamespace('checkbox')
  defineOptions({
    name: 'NCheckbox',
  })
  defineEmits<CheckboxEmits>()
  const props = defineProps(checkboxProps)
  const _props = usePropInject<CheckboxGroupInjection, CheckboxType>(checkboxGroupInjectionKey, props)

  const { 
    model,
    handleChange,
  } = useCheckbox(props)
</script>
