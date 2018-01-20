
<template>
  <div id="chart" style="width:100%;height:600px;"></div>
</template>

<script type="text/javascript">
    let echarts = require('echarts');
    export default{
      name:'line',
      data(){
        return {

        }
      },
      methods:{
        initChart(){
          let myChart = echarts.init(document.getElementById('chart'));
          myChart.setOption({
            title:{
              text:'折线图'
            },
            legend:{
              data:['气温', '降雪']
            },
            tooltip:{
              trigger:'axis'
            },
            xAxis:{
              type:'category',
              data:['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis:[{
              name:'℃',
              type:'value'
            },
            {
              name:'mm',
              type:'value'
            }
            ],
            series:[
              {
                name:'气温',
                type:'line',
                data:[0, 2, -1, -4, 0, -2, -1]
              },
              {
                name:'降雪',
                type:'line',
                yAxisIndex:1,
                data:[100, 0, 40, 200, 40, 150, 120]
              }
            ]
          });
          window.onresize(function(){
            myChart.reszie();
          });
        }
      },
      mounted(){
        this.initChart();
      }
    }
</script>

<style type="text/css">
  
</style>