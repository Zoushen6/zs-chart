<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <main>
    <div>
      <z-chart ref="chart" :render-mode="'svg'" :width="500" ></z-chart>
    </div>
  </main>
</template>

<script setup lang="ts">
// import ZsChart from '@/components/ZsChart/index.vue'
import {ZChart} from "zs-chart";  //按需引入方法
import {ref,onMounted} from 'vue'
const chart = ref()
onMounted(() => {
  // chart.value.paintChart({
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [
  //     {
  //       data: [150, 230, 224, 218, 135, 147, 260],
  //       type: 'line'
  //     }
  //   ]
  // },true)
  console.log(chart.value)
})
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
}

</style>
