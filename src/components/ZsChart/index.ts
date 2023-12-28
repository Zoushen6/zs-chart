import ZChart from './index.vue'

//用来按需引入
export {ZChart}

const ZsChart = {
    install: (App:any) => {
        const name = chart.name || chart.__name
        App.component(name,chart)
    }
}

export default ZsChart