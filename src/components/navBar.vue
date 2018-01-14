
<!-- 导航条 -->

<template>
	<div class="navBar">
		<div class="leftNav">
			<div class="leftMenu">
				<svg-icon name="menu" class="svgIcon"></svg-icon>
			</div>
			<div class="menuText">
				<span>首页</span>
			</div>
		</div>	
		<div class="rightNav">
			<div class="fullScreen">
				<svg-icon name="fullscreen" class="svgIcon"></svg-icon>
			</div>
			<div class="skin">	
				<svg-icon name="skin" class="svgIcon"></svg-icon>
			</div>
			<div class="rightMenu">
				<img src="../assets/loginMenu.gif" height="40" width="40" alt="暂时无法显示">
			</div>	
		</div>				
	</div>	
</template>

<script type="text/javascript">
	
</script>

<style type="text/css">
	.navBar{
		width:100%;
		height:50px;
		background:#fff;
		border-bottom:1px solid #ccc;
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
		vertical-align: -5px;
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
		vertical-align: -10px;
	}
	.skin{
		width:40px;
		height:50px;
		vertical-align: -10px;
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
	.navBar .svgIcon{
		width:20px;
		height:20px;
	}
	.rightNav .svgIcon{
		width:30px;
		height:30px;
	}
</style>