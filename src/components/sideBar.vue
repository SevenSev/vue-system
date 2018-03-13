<!-- 系统的侧边栏菜单组件 -->

<!-- 用element-UI重构 -->
<template>
	<div class="side-wrapper">
		<ul class="ul-wrapper">
			<el-menu    :unique-opened="uniqueOpened"  default-active="1" class="el-menu-vertical-demo" background-color="#304156" text-color="#fff" active-text-color="#ffd04b">
				<router-link to="/layout/homepage">
					<el-menu-item index="1">
						<svg-icon  name="home" class="svgIcon"></svg-icon>
						<span>首页</span>
					</el-menu-item>					
				</router-link>

				<router-link to="/layout/file">
					<el-menu-item index="2">
						<svg-icon  name="document" class="svgIcon"></svg-icon>
						<span>文档</span>
					</el-menu-item>
				</router-link>

				<router-link to="/layout/form">
					<el-menu-item index="3">
						<svg-icon  name="form" class="svgIcon"></svg-icon>
						<span>表单</span>
					</el-menu-item>
				</router-link>
				
				<el-submenu index="4">
					<template slot="title">
						<svg-icon  name="component" class="svgIcon"></svg-icon>
						<span>组件</span>
					</template>
					<router-link to="/layout/component">
						<el-menu-item index="4-1">
							<span>组件1</span>
						</el-menu-item>						
					</router-link>

					<router-link to="/layout/">
						<el-menu-item index="4-2">
							<span>组件2</span>
						</el-menu-item>						
					</router-link>

					<router-link to="/layout/">
						<el-menu-item index="4-3">
							<span>组件3</span>
						</el-menu-item>						
					</router-link>

				</el-submenu>
				
				<router-link to="/layout/icon">
					<el-menu-item index="5">
						<svg-icon  name="icon" class="svgIcon"></svg-icon>
						<span>图标</span>
					</el-menu-item>
				</router-link>

				<el-submenu index="7">
					<template slot="title">
						<svg-icon  name="chart" class="svgIcon"></svg-icon>
						<span>图表</span>
					</template>
					<router-link to="/layout/bar">
						<el-menu-item index="7-1">
							<span>柱状图</span>
						</el-menu-item>
					</router-link>
					<router-link to="/layout/line">
						<el-menu-item index="7-2">
							<span>折线图</span>
						</el-menu-item>
					</router-link>
					<router-link to="/layout/pie">
						<el-menu-item index="7-3">
							<span>饼图</span>
						</el-menu-item>
					</router-link>
				</el-submenu>
				<router-link to="/layout/table">
					<el-menu-item index="8">
						<svg-icon  name="table" class="svgIcon"></svg-icon>
						<span>table</span>
					</el-menu-item>
				</router-link>

				<router-link to="/layout/monitor">
					<el-menu-item index="6">
						<svg-icon  name="monitor" class="svgIcon"></svg-icon>
						<span>系统管理</span>
					</el-menu-item>
				</router-link>				
			</el-menu>
		</ul>
	</div>
</template>

<style type="text/css">
	.el-submenu .el-menu-item,.el-menu{
		min-width:178px !important;
	}
	.side-wrapper{
		width:178px;
		height:100%;
		background:#304156;
		position:fixed;
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
	.ul-wrapper .svgIcon{
		width:20px;
		height:20px;
	}
</style>
<script type="text/javascript">
	export default{
		name:'SideBar',
		data(){
			return {
				uniqueOpened:true
			}
		},
		methods:{
		},
		computed:{

		}
	}
</script>