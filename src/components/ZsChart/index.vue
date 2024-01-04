<template>
  <div ref="chart" :style="{height:height+'px',width:width+'px'}"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import {option} from "@/components/ZsChart/defaultOptions.js";
import { ref,onMounted } from "vue";

const chart = ref<HTMLElement>();
let charts:any
const props = defineProps({
  height: {
    type: Number,
    default: 200
  },
  width: {
    type: Number,
    default: 200
  },
  defaultOption: {
    type: Object,
    default: option
  }
})

defineOptions({
  name: 'ZsChart'
})

onMounted(() => {
  initChart()
  paintChart(props.defaultOption)
})

const initChart = () => {
  charts = echarts.init(chart.value)
}

const paintChart = (option:any,notMerge:boolean = false) => {
  // console.log('paint')
  charts.setOption(option,notMerge)
}

const resizeChart = () => {
  charts.resize()
}
defineExpose({paintChart,resizeChart})
</script>

<style scoped>

</style>