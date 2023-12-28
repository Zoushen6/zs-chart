<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <main>
    <div>
      <z-chart ref="chart" :width="500"></z-chart>
    </div>
  </main>
</template>

<script setup lang="ts">
// import ZsChart from '@/components/ZsChart/index.vue'
import {ZChart} from "@/components/ZsChart/index";
import {ref,onMounted} from 'vue'
const chart = ref()
onMounted(() => {
  // chart.value.paintChart({},true)
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
