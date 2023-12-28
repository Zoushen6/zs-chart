import chart from './index.vue'

export {chart}

const ZsChart = {
    install: (App:any) => {
        const name = chart.name || chart.__name
        console.log(chart)
        App.component(name,chart)
    }
}

export default ZsChart