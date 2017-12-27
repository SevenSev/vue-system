<!-- 系统的主页 -->
<template>
	<!-- 主页容器 -->
	<div class="homepage-container">
		<side-bar></side-bar>
		<div class="main-wrapper">
			<div class="navBar">
				<div class="leftNav">
					<div class="leftMenu">
						<img src="../images/menu.png" height="20" width="20" alt="暂时无法显示">
					</div>
					<div class="menuText">
						<span>首页</span>
					</div>
				</div>	
				<div class="rightNav">
					<div class="fullScreen">
						<img src="../images/fullScreen.png" height="20" width="30" alt="暂时无法显示">
					</div>
					<div class="skin">
						<img src="../images/skin.png" height="28" width="28" alt="暂时无法显示">
					</div>
					<div class="rightMenu">
						<img src="../images/loginMenu.gif" height="40" width="40" alt="暂时无法显示">
					</div>	
				</div>				
			</div>
			<div class="mainContainer">
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	//主页加载侧边栏菜单子组件
	//引入sideBar
	import sideBar from  './sideBar'
	export default{
		components:{	
		//局部组件
			'side-bar':sideBar
		}
	}
</script>

<style type="text/css">
	/*清楚a的默认样式*/
	a{
		color:#fff;
		text-decoration: none;
	}
	ul{
		list-style-type:none;
		padding:0;
		margin:0;
	}
	.homepage-container{
		width:100%;
		height:100%;
	}
	.main-wrapper{
		width:auto;
		height:100%;
		margin-left:180px;
		background:#eceff3;
	}	
	.navBar{
		width:100%;
		height:50px;
		background:#fff;
	}
	.leftNav{
		height:50px;
		line-height: 50px;
		float:left;

	}
	.leftMenu{
		width:40px;
		height:100%;
		display:inline-block;
		vertical-align: -4px;
		cursor:pointer;
	}
	.menuText{
		width:32px;
		height:100%;
		color:#d2d8e1;
		font-size:16px;
		display:inline-block;
	}
	.rightNav{
		height:50px;
		line-height: 50px;
		float:right;
	}
	.rightNav div{
		display:inline-block;

	}
	.fullScreen{
		width:40px;
		height:50px;
		cursor:pointer;
		vertical-align: -4px;
	}
	.skin{
		width:40px;
		height:50px;
		vertical-align: -8px;
		cursor:pointer;
	}
	.rightMenu{
		width:50px;
		height:40px;
		vertical-align: -15px;
		cursor:pointer;
	}
	.rightMenu img{
		border-radius:5px;
	}
</style>
