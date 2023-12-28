import ZChart from './index.vue'

//用来按需引入
export {ZChart}

const ZsChart = {
    install: (App:any) => {
        const name = ZChart.name || ZChart.__name
        App.component(name,ZChart)
    }
}

export default ZsChart