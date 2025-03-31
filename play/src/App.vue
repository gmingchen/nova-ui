<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  key: string;
  label: string;
  children: TreeNode[];
}

const createTree = (level = 4, parent = ''): TreeNode[] => {
  const tree = [];
  for (let i = 0; i < level; i++) {
    const key = `${ parent ? parent + '-' : '' }${ i }`;
    const label = `Node ${ key }`
    const node: TreeNode = { label, key, children: [] };
    if (level > 1) {
      node.children = createTree(level - 1, key);
    }
    tree.push(node);
  }
  return tree;
}


const data = ref(createTree(4));
</script>

<template>
  <div>
    <NTree :data="data" :default-expand-keys="['0']"></NTree>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body {
  height: 100%;
  margin: 0;

  padding: 0;
  overflow: hidden;
}
#app {
  
}
</style>
