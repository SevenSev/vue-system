<!-- 图表页 -->
<template>
    <div id="chart" style="width:100%;height:600px;"></div>
</template>

<script type="text/javascript">
    //引入echarts
    let echarts = require('echarts');
    export default{
      name:'chart',
      data(){
        return {

        }
      },
      methods:{
        initEcharts(){
          let myChart = echarts.init(document.getElementById('chart'));
          myChart.setOption({
            title:{
              text:'柱状图'
            },
            legend:{
              data:['Python', 'Javascript', 'Java']
            },
            tooltip:{
              trigger:'item'
            },
            xAxis:{
              type:'category',
              data:['2013', '2014', '2015', '2016', '2017']
            },
            yAxis:{
              name:'万人',
              type:'value'
            },
            series:[
              {
                name:'Python',
                type:'bar',
                data:[40, 70, 80, 100, 150]
              },
              {
                name:'Javascript',
                type:'bar',
                data:[70, 90, 100, 150, 250]
              },
              {
                name:'Java',
                type:'bar',
                data:[200, 170, 160, 170, 190]
              }
            ]
          });
          window.onresize = function(){
            myChart.resize();
          }
        }
      },
      mounted(){
        this.initEcharts();
      }
    }
</script>

<style type="text/css"></style>