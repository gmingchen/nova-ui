<template>
  <i
    :class="ns.b()"
    :style="style"
  >
    <component :is="svg" />
  </i>
</template>

<script lang="ts" setup>
  import { computed, CSSProperties } from 'vue'
  import { useNamespace } from '@nova-ui/hooks'
  import { isUndefined, addUnit } from '@nova-ui/utils'
  import * as Svgs from '@nova-ui/svgs'
  import { iconProps } from './icon'

  const ns = useNamespace('icon')
  defineOptions({
    name: 'NIcon',
  })
  const { name, color, size } = defineProps(iconProps)

  const svg = computed(() => {
    return Svgs[name]
  })

  const style = computed<CSSProperties>(() => {
    if (!color && !size) return {}

    return {
      fontSize: isUndefined(size) ? undefined : addUnit(size),
      color: color,
    }
  })
</script>
