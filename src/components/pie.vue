
<template>
    <div id="chart" style="width:100%;height:600px;"></div>
</template>

<script type="text/javascript">
  let echarts = require('echarts');
  export default{
    name:'pie',
    data(){
      return {

      }
    },
    methods:{
      initChart(){
        let myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption({
            title : {
              text: '饼图',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                      {value:135, name:'视频广告'},
                      {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
        });
        window.onresize(() => {
          myChart.resize();
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