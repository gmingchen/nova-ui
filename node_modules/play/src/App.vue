<script setup lang="ts">
import { ScrollPayload } from '@nova-ui/components'
import { ref } from 'vue'

const scrollbarRef = ref()
const setScrollTop = () => {
  scrollbarRef.value.setScrollTop(300)
}
const setScrollLeft = () => {
  scrollbarRef.value.setScrollLeft(300)
}
const setScrollTo = () => {
  // scrollbarRef.value.setScrollTo(300, 300)
  scrollbarRef.value.setScrollTo({
    top: 300,
    left: 300,
    behavior: 'smooth',
  })
}

const onScroll = (data: ScrollPayload) => {
  console.log(data);
}
</script>

<template>
  <div>
    <NButton prefix-icon="Plus" @click="setScrollTop">
      Set ScrollTop to 300
    </NButton>
    <NButton prefix-icon="Plus" @click="setScrollLeft">
      Set ScrollLeft to 300
    </NButton>
    <NButton prefix-icon="Plus" @click="setScrollTo">
      Set ScrollTo to 300
    </NButton>
    <br />
    <br />
    <NScrollbar
      ref="scrollbarRef"  
      height="600px"
      :always="false"
      :native="false"
      @scroll="onScroll"
    >
      <div
        v-for="item in 100"
        :key="item"
        style="width: calc(150%);margin-bottom: 20px;"
      >
        <span v-for="it in 10" :key="it">滚动条-{{ item }}-{{ it }}&nbsp;&nbsp;&nbsp;</span>
      </div>
    </NScrollbar>
  </div>
</template>

<style>
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
}
</style>
