<script setup lang="ts">
import { ref } from 'vue'

const visiable = ref(false)
const onToggle = () => {
  visiable.value = !visiable.value
}
</script>

<template>
  <div>
    <NButton @click="onToggle">Toggle</NButton>
    <NCollapse>
      <div v-show="visiable" class="panel">
        <div class="item"></div>
      </div>
    </NCollapse>
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
  height: 100%;
  padding: 20px;
  overflow: hidden;
  & > div {
    height: 100%;
    overflow: hidden;
  }
  .panel {
    width: 200px;
    background-color: var(--n-color-primary);
    max-height: 300px;
    padding: 20px;
    .item {
      height: 100px;
      background-color: var(--n-color-warning);
    }
  }
}
</style>
