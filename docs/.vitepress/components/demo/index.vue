<template>
  <div class="collapse">
    <slot></slot>
    <div v-if="$slots.code" class="collapse__wrap" @click="onToggle">
      <span>{{ visiable ? '隐藏' : '查看' }}源代码</span>
      <NIcon :name="visiable ? 'Up' : 'Down'"></NIcon>
    </div>
    <NCollapse>
      <div v-show="visiable">
        <slot name="code"></slot>
      </div>
    </NCollapse>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const visiable = ref(false);
  const onToggle = () => {
    visiable.value = !visiable.value;
  }
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  &__wrap {
    padding: 10px;
    font-size: 12px;
    color: #e0e0e0;
    border-top: 1px solid #e0e0e0;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
