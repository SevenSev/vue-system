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
				<el-dropdown trigger="click" style="height:40px;">	
					<span class="el-dropdown-link">
						<img src="../assets/loginMenu.gif" height="40" width="40" alt="暂时无法显示">
						<svg-icon name="dropdown" width="15" height="15"></svg-icon>
					</span>	
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<span @click="backToHomePage">首页</span>
						</el-dropdown-item>

						<a  class="itemAddress" href="https://github.com/MagicHacker/vue-system" target="_blank" >
							<el-dropdown-item>项目地址</el-dropdown-item>
						</a>

						<el-dropdown-item divided >
							<span v-on:click="logout">退出登录</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>				
			</div>	
		</div>				
	</div>	
</template>

<script type="text/javascript">
	export default{
		name:'navBar',
		data(){
			return {

			}
		},
		methods:{
		      logout(){
		      		//删除localStorage并导航到登录页
		      		localStorage.removeItem('username');
		      		localStorage.removeItem('password');
		      		this.$message({
		      			message:'成功注销',
		      			duration:1500
		      		});
		      		this.$router.push({
		      			path:'/'
		      		});
		      },
		      backToHomePage(){
		      	this.$router.push({
		      		path:'/layout/homepage'
		      	});
		      }
		}
	}
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
		width:65px;
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
	.itemAddress{
		color:#606266;
	}
	.itemAddress:hover{
		color:rgb(122,173,255);
	}
</style>