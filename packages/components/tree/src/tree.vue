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
import { computed, ref, watch } from 'vue'
import { useNamespace } from '@nova-ui/hooks'
import { TreeData, TreeNode, treeProps, Value } from './tree'

const n = useNamespace('tree')
defineOptions({
  name: 'NTree',
})

const props = defineProps(treeProps)

const tree = ref<TreeNode[]>([])
const createTreeOptions = (key: string, label: string, children: string, leaf: string) => {
  return {
    getKey(data: TreeData): Value {
      return data[key] as Value
    },
    getLabel(data: TreeData): Value {
      return data[label] as Value
    },
    getChildren(data: TreeData) {
      return data[children] as TreeData[]
    },
    getLeaf(data: TreeData) {
      return data[leaf] as boolean
    },
  }
}
const treeOptions = createTreeOptions(
  props.options.key,
  props.options.label,
  props.options.children,
  props.options.leaf,
)
const normalizeTree = (data: TreeData[]): TreeNode[] => {
  const traversal = (data: TreeData[], parent: TreeNode | null = null): TreeNode[] => {
    return data.map((item) => {
      const children = treeOptions.getChildren(item) || []
      const level = parent ? parent.level + 1 : 0
      const leaf = treeOptions.getLeaf(item) ?? !children.length
      const node: TreeNode = {
        key: treeOptions.getKey(item),
        label: treeOptions.getLabel(item),
        children: children,
        level, leaf, raw: item,
      }
      if (children.length) {
        node.children = traversal(children, node)
      }
      return node
    })
  }
  const result = traversal(data)
  return result
}
watch(
  () => props.data,
  (data: TreeData[]) => {
    tree.value = normalizeTree(data)
  },
  { immediate: true }
)

const expandKeysSet = ref(new Set(props.defaultExpandKeys))
const flattenTree = (keys: Set<Value>, nodes: TreeNode[]): TreeNode[] => {
  const result: TreeNode[] = []

  const stack: TreeNode[] = []
  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i])
  }
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    result.push(node)
    if (keys.has(node.key)) {
      const children = node.children
      if(children) {
        for (let i = children.length; i >= 0; --i) {
          stack.push(children[i])
        }
      }
    }
  }

  return result
}
const flattenNodes = computed(() => {
  const result: TreeNode[] = flattenTree(expandKeysSet.value, tree.value)
  return result
})

console.log(flattenNodes.value);

</script>
