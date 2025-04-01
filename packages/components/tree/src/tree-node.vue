<template>
  <div :class="[n.b()]">
    <span
      v-if="!data?.leaf"
      :class="n.e('icon')"
    >
      <NIcon name="TriangleRight"></NIcon>
    </span>
    <span :class="n.e('label')">{{ data?.label }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@nova-ui/hooks'
import { treeNodeProps } from './tree-node'
import { NIcon } from '@nova-ui/components'

const n = useNamespace('tree-node')
defineOptions({
  name: 'NTreeNode',
})
const props = defineProps(treeNodeProps)

</script>
