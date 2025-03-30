<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  label: string;
  value: string;
  children: TreeNode[];
}

const createTree = (level = 4, parent = ''): TreeNode[] => {
  const tree = [];
  for (let i = 0; i < level; i++) {
    const value = `${ parent ? parent + '-' : '' }${ i }`;
    const label = `Node ${ value }`
    const node: TreeNode = { label, value, children: [] };
    if (level > 1) {
      node.children = createTree(level - 1, value);
    }
    tree.push(node);
  }
  return tree;
}


const data = ref(createTree(4));

console.log(data.value);


</script>

<template>
  <div>
    <NTree :data="data"></NTree>
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
