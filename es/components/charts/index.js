
const chartDataNew = [{
  country: '巴西',
  population: 18203
}, {
  country: '印尼',
  population: 23489
}, {
  country: '美国',
  population: 29034
}, {
  country: '印度',
  population: 104970
}, {
  country: '中国',
  population: 131744
}]

let app = getApp()

Component({
    props:{
       width:200,
       height:200,
       chart: null,
    },
    
    methods:{
      onDraw(ddChart,F2){
        ddChart.clear()
        ddChart.source(chartDataNew, {
          population: {
            tickCount: 5
          }
        })
        
        ddChart.axis('country', {
          line: F2.Global._defaultAxis.line,
          grid: null
        })
        ddChart.axis('population', {
          line: null,
          grid: F2.Global._defaultAxis.grid,
          label: function label(text, index, total) {
            var textCfg = {};
            if (index === 0) {
              textCfg.textAlign = 'left';
            } else if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          }
        })
        ddChart.tooltip(1);
        ddChart.interval().position('country*population')
        ddChart.render()
      }
    }
})