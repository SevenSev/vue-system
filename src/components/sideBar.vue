<!-- 系统的侧边栏菜单组件 -->

<!-- 用element-UI重构 -->
<template>
	<div class="side-wrapper">
		<ul class="ul-wrapper">
			<el-menu default-active="1" class="el-menu-vertical-demo" background-color="#304156" text-color="#fff" active-text-color="#ffd04b">
				<router-link to="/homepage">
					<el-menu-item index="1">
						<i class="el-icon-menu"></i>
						<span>首页</span>
					</el-menu-item>					
				</router-link>

				<router-link to="/file">
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span>文档</span>
					</el-menu-item>
				</router-link>

				<router-link to="/form">
					<el-menu-item index="3">
						<i class="el-icon-menu"></i>
						<span>表单</span>
					</el-menu-item>
				</router-link>
				
				<el-submenu index="4">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>组件</span>
					</template>
					<router-link to="/component">
						<el-menu-item index="4-1">
							<span>组件1</span>
						</el-menu-item>						
					</router-link>

					<router-link to="/">
						<el-menu-item index="4-2">
							<span>组件2</span>
						</el-menu-item>						
					</router-link>

					<router-link to="/">
						<el-menu-item index="4-3">
							<span>组件3</span>
						</el-menu-item>						
					</router-link>

				</el-submenu>
				
				<router-link to="/icon">
					<el-menu-item index="5">
						<i class="el-icon-menu"></i>
						<span>图标</span>
					</el-menu-item>
				</router-link>
				
				<router-link to="/zip">
					<el-menu-item index="6">
						<i class="el-icon-menu"></i>
						<span>ZIP</span>
					</el-menu-item>
				</router-link>

				<el-submenu index="7">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>图表</span>
					</template>
					<router-link to="/chart">
						<el-menu-item index="7-1">
							<span>图表1</span>
						</el-menu-item>
					</router-link>
					<router-link to="/">
						<el-menu-item index="7-2">
							<span>图表2</span>
						</el-menu-item>
					</router-link>
					<router-link to="/">
						<el-menu-item index="7-3">
							<span>图表3</span>
						</el-menu-item>
					</router-link>

				</el-submenu>
			</el-menu>
		</ul>
	</div>
</template>

<style type="text/css">
	.el-submenu .el-menu-item{
		min-width:178px !important;
	}
	.side-wrapper{
		width:178px;
		height:100%;
		background:#304156;
		position:absolute;
		top:0;
		left:0;
		z-index:1001;
	}
	.ul-wrapper{
		width:100%;
		height:100%;
		list-style-type:none;
		padding:0px;
		margin:0px;
		color:#fff;
		font-size:14px;
	}
	.ul-wrapper > a{
		width:100%;
		height:55px;
		display:inline-block;
		line-height:55px;
		padding-left:20px;
		box-sizing: border-box;
		text-align:left;
	}
	.ul-wrapper > a:hover{
		background:#1d2735;
	}
	.ul-wrapper  li{
		position:relative;
	}
	.imgWrapper{
		width:35px;
		height:20px;
		display:inline-block;
		vertical-align:-3px;
	}
	.toggle-icon{
		width:20px;
		height:20px;
		position:absolute;
		top:0;
		right:5px;
	}
</style>
<script type="text/javascript">
	export default{
		name:'SideBar',
		data(){
			return {

			}
		},
		methods:{
		},
		computed:{

		}
	}
</script>