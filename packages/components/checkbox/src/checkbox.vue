<template>
  <component
    :is="tag"
    :class="[
      n.b(),
      n.m(props.size),
      n.is('checked', !!model),
      n.is('indeterminate', props.indeterminate),
      n.is('disabled', props.disabled),
      n.is('border', props.border),
      n.is('link', props.link),
    ]"
  >
    <label :class="n.e('wrapper')">
      <input
        v-model="model"
        type="checkbox"
        :disabled="props.disabled"
        :class="n.e('input')"
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
  import { useNamespace } from '@nova-ui/hooks'
  import { checkboxProps, CheckboxEmits } from './checkbox'
  import { useCheckbox } from './compositions'

  const n = useNamespace('checkbox')
  defineOptions({
    name: 'NCheckbox',
  })
  const props = defineProps(checkboxProps)
  defineEmits<CheckboxEmits>()

  const { 
    model,
    handleChange,
  } = useCheckbox(props)

</script>


