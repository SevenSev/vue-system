<!-- 整个系统的容器组件-->
<!-- 父组件 -->
<template>
	<div class="layout-container">
		<!-- 侧边栏组件 -->
		<side-bar></side-bar>
		<div class="main-wrapper">
			<!-- 顶部导航组件 -->
			<nav-bar></nav-bar>
			<!-- 主内容区 -->
			<div class="mainContainer">
				<!-- 嵌套组件处 -->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	//侧边栏菜单组件
	import SideBar from './sideBar'
	//顶部导航组件
	import NavBar from './navBar'

	export default{
		name:'layout',
		data(){
			return {

			}
		},
		components:{
			'side-bar':SideBar,
			'nav-bar':NavBar
		}
	}
</script>

<style type="text/css">
	.layout-container{
		width:100%;
		height:100%;
	}
	.main-wrapper{
		width:auto;
		height:100%;
		margin-left:180px;		
	}
	.mainContainer{
		width:auto;
		padding:25px;
		background-color:#f0f2f5;		
	}
</style>
