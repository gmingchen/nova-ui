<template>
  <button
    :class="[
      n.b(),
      n.m(_props.scene),
      n.m(_props.size),
      n.is('disabled', _props.disabled),
      n.is('loading', _props.loading),
      n.is(_props.shape!, !!_props.shape),
      n.is(_props.type!, !!_props.type),
    ]"
  >
    <template v-if="_props.loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <NIcon v-else :class="n.e('loading')" :name="_props.loadingIcon"></NIcon>
    </template>
    <template v-if="$slots.prefix || _props.prefixIcon">
      <slot v-if="$slots.prefix" name="prefix"></slot>
      <NIcon v-else-if="_props.prefixIcon" :class="n.e('prefix')" :name="_props.prefixIcon"></NIcon>
    </template>
    <slot></slot>
    <template v-if="$slots.suffix || _props.suffixIcon">
      <slot v-if="$slots.suffix" name="suffix"></slot>
      <NIcon v-else-if="_props.suffixIcon" :class="n.e('suffix')" :name="_props.suffixIcon"></NIcon>
    </template>
  </button>
</template>

<script lang="ts" setup>
  import { useNamespace, usePropInject } from '@nova-ui/hooks'
  import { buttonProps, ButtonType } from './button'
  import { NIcon } from '@nova-ui/components'
  import { buttonGroupInjectionKey, ButtonGroupType } from '../../button-group'

  const n = useNamespace('button')
  defineOptions({
    name: 'NButton',
  })
  const props = defineProps(buttonProps)
  
  const _props = usePropInject<ButtonGroupType, ButtonType>(buttonGroupInjectionKey, props)
</script>
