<!-- 系统的登录模块 -->
<template >
	<!-- 页面容器 -->
	<div class="login-container">
		<!-- 登录框内容-->
		<div class="login-content">
			<div class="login-title">
				<span>系统登录</span>
			</div>
			<form>
				<div class="login-input login-username">
					<svg-icon  name="user" class="svgIcon"></svg-icon>
					<input type="text" name="username" placeholder="用户名" autocomplete="on" 
					v-model="username">
				</div>
				<div class="login-input login-password">
					<svg-icon  name="lock" class="svgIcon"></svg-icon>
					<input type="password" name="password" placeholder="密码" 
					v-model="password">
				</div>	
				<button type="button" class="login-button" v-on:click="login()">登录</button>
			</form>	
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'login',
		data(){
			//用户名规则校验
			//密码规则校验
			return {
				username:'',
				password:''
			}
		},
		methods:{ 
			login(){
				//调用加载动画模拟后台数据校验
					
				//编程式实现路由跳转
				this.$router.push({
					path:'/homePage'
				});
				console.log('用户名为:'+this.username+" 密码为:"+this.password);
			}
		}
	}
</script>

<style type="text/css">
	/*去掉input默认样式*/
	-web-kit-appearance:none;
  	-moz-appearance: none;
	/*placeholder style*/
	input::-webkit-input-placeholder{
		color:#878fa1;
	}
	input::-moz-input-placeholder{
		color:#878fa1;
	}
	input:-ms-input-placeholder{
		color:#878fa1;
	}
	.login-container{
		width:100%;
		height:100%;
		background-color:#2d3a4b;
		position:relative;
		text-align:center;
	}	

	.login-content{
		width:400px;
		height:350px;
		position:absolute;
		top:50%;
		margin-top:-200px;
		left:50%;
		margin-left:-175px;
	}
	.login-title{
		font-size:25px;
		color:#fff;
		font-weight:600;
	}
	.login-input{
		width:330px;
		height:54px;
		border:1px solid #2e3642;
		margin:0 auto;
		background-color:#1f2733;
		line-height:54px;
		border-radius:5px;
	}

	.login-input input{
		width:85%;
		height:40px;
		border:0;
		outline:0;
		background-color:#1f2733;
		color:#fff;
		font-size:15px;
	}
	.login-username{
		margin-top:42px;
	}
	.login-password{
		margin-top:20px;
	}
	.login-button{
		width:330px;
		height:40px;
		background-color:#3488ff;
		font-size:15px;
		color:#fff;
		margin-top:20px;
		border:none;
		border-radius:5px;
	}
	.login-button:hover{
		cursor:pointer;
		opacity:0.8;
	}
	.login-container .svgIcon{
		width:18px;
		height:18px;
		vertical-align: -3px;
	}
</style>