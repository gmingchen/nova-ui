# Icon 图标
提供了一些常用的图标集合。

## 基础用法
<Demo>
  <div class="p-20">
    <NIcon class="m_r-20" name="WarningCircleFill"></NIcon>
    <NIcon class="m_r-20" name="CloseCircleFill" size="30px"></NIcon>
    <NIcon class="m_r-20" name="CheckCircleFill" size="40px" color="red"></NIcon>
  </div>
  <template #code>

```vue
  <template>
    <NIcon name="WarningCircleFill"></NIcon>
    <NIcon name="CloseCircleFill" size="30px"></NIcon>
    <NIcon name="CheckCircleFill" size="40px" color="red"></NIcon>
  </template>
```

  </template>
</Demo>

## 图标集合
<Demo>
  <div class="f_w-w">
    <div v-for="item in svgs" class="f_d-c f-c" style="width: 20%; aspect-ratio: 1;">
      <NIcon :name="item" size="20px"></NIcon>
      <span class="m_t-10">{{ item }}</span>
    </div>
  </div>
  
</Demo>

<script setup lang="ts">
  import { ref } from 'vue'
  import { svgs } from '@nova-ui/svgs'
  const show = ref(false)
  const onToggle = () => {
    show.value = !show.value
  }
</script>

## API
### Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 名称：内置的图标名称 | `String` | - |
| color | 颜色：设置的 `color` 属性 | `String` | - |
| size | 大小：设置的 `font-size` 属性 | `String` `Number` | `16px` |
