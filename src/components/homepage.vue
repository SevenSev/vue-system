<!-- 系统的主页 -->
<template>
	<div>
		<div class="bannerItem">
			<ul>
				<li>
					<div class="card-panel">
						<div class="card-icon">
							<svg-icon name="person" class="svgIcon"></svg-icon>
						</div>
						<div class="card-description">
							<div>
								<span>New Visits</span>
							</div>
							<div>
								<span>102400</span>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="card-panel"> 
						<div class="card-icon">
							<svg-icon name="message-o" class="svgIcon"></svg-icon>
						</div>
						<div class="card-description">
							<div>
								<span>Messages</span>
							</div>	
							<div>
								<span>9900</span>
							</div>
						</div>	
					</div>
				</li>
				<li>
					<div class="card-panel">
						<div class="card-icon">
							<svg-icon name="money" class="svgIcon"></svg-icon>
						</div>
						<div class="card-description">
							<div>
								<span>Purchases</span>
							</div>
							<div>
								<span>920</span>
							</div>
						</div>
					</div>
				</li>
				<li>	
					<div class="card-panel">
						<div class="card-icon">
						<svg-icon name="shopping" class="svgIcon"></svg-icon>
						</div>
						<div class="card-description">
							<div>
								<span>Shopping</span>
							</div>
							<div>
								<span>1360</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="chartItem">
			<div id="chart"  style="width:100%;height:300px;"></div>
		</div>		
	</div>

</template>

<script type="text/javascript">
	//引入echarts。
	let echarts = require('echarts');

	export default{
		name:'homepage',
		data(){
			return {

			}
		},
		components:{	
		
		},
		methods:{
			createChart(){
				let myChart = echarts.init(document.getElementById('chart'));
				myChart.setOption({
					tooltip:{
						trigger:'axis'
					},	
					legend:{
						data:['excepted', 'actual']
					},
					grid:{
						left:40,
						right:30,
						top:30,
						bottom:20
					},
					xAxis:{
						type:'category',
						//坐标轴轴线设置
						axisLine:{
							lineStyle:{
								color:'#4b88c9'
							}
						},
						boundaryGap:false,
						//坐标轴刻度设置
						axisTick:{
							alignWithLabel:true
						},
						data:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
					},
					yAxis:{
						type:'value',
						axisLine:{
							lineStyle:{
								color:'#4b88c9'
							}
						}						
					},
					series:[
						{
							name:'excepted',
							symbol:'emptyCircle',
							symbolSize:'10',
							smooth:true,
							type:'line',
							data:[100, 120, 161, 134, 105, 160, 165],
							lineStyle:{
								normal:{
									color:'#005df9'
								}
							},
							areaStyle:{
								normal:{
									color:'#f5f8ff'
								}
							},	
							itemStyle:{
								normal:{
									color:'#005df9'
								}
							}
						},
						{
							name:'actual',
							type:'line',
							symbol:'emptyCircle',
							symbolSize:'10',
							smooth:true,
							data:[120, 82, 91, 154, 162, 140, 145],
							lineStyle:{
								normal:{
									color:'#fc0000'
								}
							},
							itemStyle:{
								normal:{
									color:'#fc0000'
								}
							}							
						}
					]
				});
				//echarts自适应
				window.onresize = function(){
					myChart.resize();
				}
			}
		},
		//DOM生成后调用
		mounted(){
			this.createChart();
		}
	}
</script>

<style type="text/css">
	.bannerItem{
		margin:18px -5px 30px -20px;
	}
	.bannerItem ul > li {
		display:inline-block;
		padding-left:20px;
		width:23%;
	}
	.card-panel{
		width:100%;
		height:108px;
		background-color:#fff;
		margin-right:20px;	
		box-shadow:5px 5px 5px #ccc;
		cursor:pointer;
	}
	.card-icon{
		float:left;
		padding:25px;
	}
	.card-description{
		float:right;	
		padding:25px;
		font-weight:bold;
	}
	.card-description > div:nth-child(1){
		font-size:16px;
		color:rgba(0,0,0,0.45);
		margin-bottom:10px;	
	}
	.card-description > div:nth-child(2){
		font-size:20px;
		color:#666;
	}	
	.chartItem{
		width:100%;
		height:365px;
		background-color:#fff;
		padding:25px;
		margin-right:10px;
		box-sizing:border-box;
	}
	.bannerItem .svgIcon{
		width:50px;
		height:50px;
	}
</style>
