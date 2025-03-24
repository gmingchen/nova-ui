<script setup lang="ts">
import { scenes } from '@nova-ui/constants'
import { buttonShapes, buttonTypes } from '@nova-ui/components'

const onClick = () => {
  console.log('click');
}
</script>

<template>
  <div>
    <!-- <div v-for="shape in buttonShapes" :key="shape" style="margin-bottom: 20px">
      <div v-for="type in buttonTypes" :key="type" style="margin-bottom: 20px">
        <NButton :type="type" :shape="shape">
          <NIcon v-if="shape === 'circle'" name="Plus"></NIcon>
          <span v-else>default</span>
        </NButton>
        <NButton v-for="scene in scenes" :key="scene" :scene="scene" :type="type" :shape="shape">
          <NIcon v-if="shape === 'circle'" name="Plus"></NIcon>
          <span v-else>{{ scene }}</span>
        </NButton>
      </div>
    </div> -->
    <div v-for="type in buttonTypes" :key="type" style="margin-bottom: 20px">
      <NButtonGroup :type="type">
        <NButton v-for="item in 3" :key="item">default-{{ item }}</NButton>
      </NButtonGroup>
      <br>
      <NButtonGroup v-for="scene in scenes" :key="scene" :scene="scene" :type="type">
        <NButton v-for="item in 3" :key="item">{{ scene }}-{{ item }}</NButton>
      </NButtonGroup>
    </div>
  </div>
</template>

<style scoped></style>
