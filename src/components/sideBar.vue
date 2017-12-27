<!-- 系统的侧边栏菜单组件 -->

<template>
	<div class="side-wrapper">
			<ul class="ul-wrapper">
				<a href="#/homepage">
					<li>
						<div class="imgWrapper">
							<img src="../images/homepage.png" height="20" width="20" alt="暂时无法显示">
						</div>
						<span>首页</span>
					</li>
				</a>
				<a href="#/file">
					<li>
						<div class="imgWrapper">
							<img src="../images/file.png" height="20" width="20" alt="暂时无法显示">
						</div>
						<span>文档</span>
											
					</li>
				</a>
				<a href="#/form">
					<li>	
						<div class="imgWrapper">
							<img src="../images/form.png" height="20" width="21" alt="暂时无法显示">
						</div>
						<span>表单</span>
						
					</li>
				</a>
				<a href="#/component">
					<li>
						<div class="imgWrapper">
							<img src="../images/component.png" height="20" width="20" alt="暂时无法显示">
						</div>
						<span>组件</span>
						
					</li>
				</a>
				<a href="#/photo">
					<li>	
						<div class="imgWrapper">
							<img src="../images/photo.png" height="20" width="20" alt="暂时无法显示">
						</div>
						<span>图标</span>
						
					</li>
				</a>
				<a href="#/zip">
					<li>		
						<div class="imgWrapper">
							<img src="../images/zip.png" height="20" width="20" alt="暂时无法显示">
						</div>
						<span>ZIP</span>
						
					</li>
				</a>				
			</ul>
		</div>
</template>

<style type="text/css">
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
		font-size:15px;	
	}
	.ul-wrapper > a{
		width:100%;
		height:55px;
		display:inline-block;
		line-height:55px;
		padding:0px 20px;
		box-sizing: border-box;
		text-align:left;
	}
	.ul-wrapper > a:hover{
		background:#1d2735;
	}
	.imgWrapper{
		width:50px;
		height:20px;
		display:inline-block;
		vertical-align:-3px;
	}
</style>
<script type="text/javascript">
	
</script>