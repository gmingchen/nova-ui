<script setup lang="ts">
import { CheckboxValueType } from '@nova-ui/components'
import { ref } from 'vue'

const checkbox = ref([1, 2])

const onChange = (checked: boolean, value: CheckboxValueType) => {
  console.log('onChange', checked, value)
}
</script>

<template>
  <div>
    <NCheckboxGroup 
      v-model="checkbox"
      @change="onChange"
    >
      <NCheckbox
        :active-value="1"
        label="体育"
      >
      </NCheckbox>  
      <NCheckbox
        :active-value="2"
      >
        语文
      </NCheckbox>
    </NCheckboxGroup>
    <p>{{ checkbox }}</p>
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
    max-height: 1000px;
    height: 500px;
    padding: 20px;
    .item {
      height: 400px;
      background-color: var(--n-color-warning);
    }
  }
}
</style>
