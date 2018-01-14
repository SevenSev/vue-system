
<!-- 图标组件页 -->
<template>
	<div class="iconContainer">
		<ul>
			<li>
				<div>
					<svg-icon  name="404" class="svgIcon"></svg-icon>
					<p>404</p>	
				</div>
				<div>
					<svg-icon  name="bug" class="svgIcon"></svg-icon>
					<p>bug</p>	
				</div>
				<div>
					<svg-icon  name="chart" class="svgIcon"></svg-icon>
					<p>chart</p>
				</div>
				<div>
					<svg-icon  name="clipboard" class="svgIcon"></svg-icon>
					<p>clipboard</p>
				</div>
				<div>
					<svg-icon  name="component" class="svgIcon"></svg-icon>
					<p>component</p>
				</div>
			</li>
			<li>
				<div>
					<svg-icon  name="dashboard" class="svgIcon"></svg-icon>
					<p>dashboard</p>
				</div>
				<div>
					<svg-icon  name="document" class="svgIcon"></svg-icon>
					<p>document</p>
				</div>
				<div>
					<svg-icon  name="drag" class="svgIcon"></svg-icon>
					<p>drag</p>
				</div>
				<div>
					<svg-icon  name="email" class="svgIcon"></svg-icon>
					<p>email</p>
				</div>
				<div>
					<svg-icon  name="example" class="svgIcon"></svg-icon>
					<p>example</p>
				</div>				
			</li>
			<li>
				<div>
					<svg-icon  name="eye" class="svgIcon"></svg-icon>
					<p>eye</p>
				</div>
				<div>
					<svg-icon  name="excel" class="svgIcon"></svg-icon>
					<p>excel</p>
				</div>
				<div>
					<svg-icon  name="icon" class="svgIcon"></svg-icon>
					<p>icon</p>
				</div>
				<div>
					<svg-icon  name="form" class="svgIcon"></svg-icon>
					<p>form</p>
				</div>
				<div>
					<svg-icon  name="internet" class="svgIcon"></svg-icon>
					<p>internet</p>
				</div>
			</li>
			<li>
				<div>
					<svg-icon  name="language" class="svgIcon"></svg-icon>
					<p>language</p>
				</div>				
				<div>
					<svg-icon  name="cart" class="svgIcon"></svg-icon>
					<p>cart</p>
				</div>
				<div>
					<svg-icon  name="gear" class="svgIcon"></svg-icon>
					<p>gear</p>
				</div>
				<div>
					<svg-icon  name="phone" class="svgIcon"></svg-icon>
					<p>phone</p>
				</div>
				<div>
					<svg-icon  name="star" class="svgIcon"></svg-icon>
					<p>star</p>
				</div>
			</li>
			<li>
				<div>
					<svg-icon  name="delete" class="svgIcon"></svg-icon>
					<p>delete</p>
				</div>
				<div>
					<svg-icon  name="survey" class="svgIcon"></svg-icon>
					<p>survey</p>
				</div>
				<div>
					<svg-icon  name="refresh" class="svgIcon"></svg-icon>
					<p>refresh</p>
				</div>
				<div>
					<svg-icon  name="message" class="svgIcon"></svg-icon>
					<p>message</p>
				</div>
				<div>
					<svg-icon  name="couple" class="svgIcon"></svg-icon>
					<p>couple</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'icon'
	}
</script>

<style type="text/css">
	p{
		margin:0;
	}
	.iconContainer{
		width:100%;
		height:100%;
	}
	.iconContainer ul li{
		width:100%;
	}
	.iconContainer ul li > div{
		width:235px;	
		height:119px;
		display:inline-block;
		font-size:20px;
		text-align:center;
	}
	.iconContainer .svgIcon{
		width:30px;
		height:30px;
	}
</style>
