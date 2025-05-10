<script setup lang="ts">
import { CheckboxValueType } from '@nova-ui/components'
import { ref } from 'vue'

const checkbox = ref(1)

const onChange = (checked: boolean, value: CheckboxValueType) => {
  console.log('onChange', checked, value)
}
const onClick = (event: Event) => {
  console.log('onClick') 
}

</script>

<template>
  <div>
    <NCheckbox
      v-model="checkbox"
      :active-value="1"
      :in-active-value="0"
      label="体育"
      size="large"
      border
      @change="onChange"
      @click="onClick"
    >
    </NCheckbox>
    <p>{{ checkbox }}</p>
    <NButton type="link">123</NButton>
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
