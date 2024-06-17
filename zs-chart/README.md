# zs-chart

基于vue3的echarts图表库

## 安装和使用方法

1. npm install zs-chart
2. vue中使用
```vue
<template>
   <z-chart ref="chart" :render-mode="'svg'" :width="500" ></z-chart>
</template>

<script setup lang="ts">
   import {ZChart} from "zs-chart";  //按需引入方法
   import {ref,onMounted} from 'vue'
   const chart = ref()
   onMounted(() => {
      chart.value.paintChart({option},true)
   })
</script>
```
[github](https://github.com/Zoushen6/zs-chart)
