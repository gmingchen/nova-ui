<template>
  <button
    :class="[
      ns.b(),
      ns.m(_props.scene),
      ns.m(_props.size),
      ns.is('disabled', _props.disabled),
      ns.is('loading', _props.loading),
      ns.is(_props.shape!, !!_props.shape),
      ns.is(_props.type!, !!_props.type),
    ]"
  >
    <template v-if="_props.loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <NIcon v-else :class="ns.e('loading')" :name="_props.loadingIcon"></NIcon>
    </template>
    <template v-if="$slots.prefix || _props.prefixIcon">
      <slot v-if="$slots.prefix" name="prefix"></slot>
      <NIcon v-else-if="_props.prefixIcon" :class="ns.e('prefix')" :name="_props.prefixIcon"></NIcon>
    </template>
    <slot></slot>
    <template v-if="$slots.suffix || _props.suffixIcon">
      <slot v-if="$slots.suffix" name="suffix"></slot>
      <NIcon v-else-if="_props.suffixIcon" :class="ns.e('suffix')" :name="_props.suffixIcon"></NIcon>
    </template>
  </button>
</template>

<script lang="ts" setup>
  import { useNamespace, usePropInject } from '@nova-ui/hooks'
  import { buttonProps, ButtonType } from './button'
  import { NIcon } from '@nova-ui/components'
  import { buttonGroupInjectionKey, ButtonGroupType } from '../../button-group'

  const ns = useNamespace('button')
  defineOptions({
    name: 'NButton',
  })
  const props = defineProps(buttonProps)
  
  const _props = usePropInject<ButtonGroupType, ButtonType>(buttonGroupInjectionKey, props)
</script>
