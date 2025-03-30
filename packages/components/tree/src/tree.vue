<template>
  <div
    :class="[
      n.b()
    ]"
  >
    tree
  </div>
</template>

<script lang="ts" setup>
  import { useNamespace } from '@nova-ui/hooks'
  import { treeProps } from './tree'
  const n = useNamespace('tree')
  defineOptions({
    name: 'NTree',
  })
  const props = defineProps(treeProps)
</script>
