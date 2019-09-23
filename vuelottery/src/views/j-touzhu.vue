<template>
	<div class="j-box">
		<div class="j-header">
			<div class="j-header-left">
				<router-link to="" class="j-xuan">+继续选号</router-link>
			</div>
		</div>
		<div class="j-content">
			<div class="j-content-header"></div>
			<div class="j-content-content" style=",min-height: 145px;max-height: 580px;overflow: scroll;" id="one">
				<div v-for="(i,$index) in arr" :key="$index" style="height: 145px;border-bottom: 1px solid #eee;" class="j-boxs">
					<div class="j-boxsleft" @click="btn1(i,$index)">
						<i class="iconfont icon-lajitong "></i>
					</div>
					<div class="j-boxsright">
						<div class="j-boxsright-top">{{i.name}}</div>
						<div class="j-boxsright-bottom">和值&nbsp;{{i.zhu}}&nbsp;{{i.mo}}</div>
					</div>
				</div>
			</div>
			<div class="j-content-bottom"></div>

		</div>
		<div class="j-footer">
			<div class="j-footer-left">
				<p class="j-gong">共1注<span class="j-mo">&nbsp;2模拟金</span></p>
			</div>
			<div class="j-footer-right">
				<!--<button class="j-btn" @click="type=true">投注</button>-->
				<wcj class="j-btn" @click="type=true" style="color: white;font-size: 20px;">投注</wcj>
			</div>
		</div>
		<!--<div class="j-one" v-if="type">-->
		<!--<wcj></wcj>-->
		<!--</div>-->
	</div>

</template>

<script>
	import alert from '@/components/alert.vue'
	export default {
		data() {
			return {
				type: false,
				arr: [{
						name: 'ccc',
						zhu: '1注',
						mo: '2模拟金'
					},
					{
						name: 'aaa',
						zhu: '8注',
						mo: '5模拟金'
					},
					{
						name: 'bbb',
						zhu: '5注',
						mo: '8模拟金'
					},
					{
						name: 'fff',
						zhu: '7注',
						mo: '4模拟金'
					},
					{
						name: 'www',
						zhu: '9注',
						mo: '1模拟金'
					},
					{
						name: 'qqq',
						zhu: '20注',
						mo: '14模拟金'
					},
					{
						name: 'ggg',
						zhu: '19注',
						mo: '10模拟金'
					}
				]
			}
		},
		components: {
			wcj: alert
		},
		methods: {
			btn1(a, b) {
				this.arr.splice(b, 1)
			},

		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.j-box {
		width: 100%;
		height: 1120px;
		background: #f3f3f3;
	}
	
	.j-header {
		width: 100%;
		height: 55px;
		/*background: lightblue;*/
	}
	
	.j-header-left {
		width: 110px;
		height: 35px;
		text-align: center;
		border-radius: 5px;
		line-height: 35px;
		margin-top: 10px;
		margin-left: 25px;
		border: 1px solid #599bdc;
		float: left;
		font-size: 15px;
		color: #599bdc;
	}
	
	.j-xuan {
		color: #599bdc;
		text-decoration: none;
	}
	
	.j-content {
		width: 100%;
		height: 970px;
		/*background:green;*/
	}
	
	.j-content-header {
		width: 610px;
		height: 25px;
		background-image: url(../../img/images/1_03.png);
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 100% 100%;
		margin: 0 auto;
	}
	
	.j-content-content {
		width: 580px;
		/*height: 500px;*/
		background: white;
		/*margin-top: 200px;*/
		margin: 0 auto;
	}
	
	.j-content-bottom {
		width: 580px;
		height: 22px;
		background-image: url(../../img/images/1_07.png);
		background-position: 0 0;
		background-size: 100% 100%;
		margin: 0 auto;
	}
	
	.j-boxs {}
	
	.j-boxsleft {
		width: 35px;
		height: 35px;
		margin-top: 65px;
		margin-left: 35px;
		/*background: lightcoral;*/
		float: left;
	}
	
	.j-boxsleft .icon-lajitong {
		font-size: 35px;
		color: #bdbdbd;
	}
	
	.j-boxsright {
		width: 195px;
		height: 65px;
		float: left;
		margin-left: 130px;
		margin-top: 50px;
		/*background: lightblue;*/
	}
	
	.j-boxsright-top {
		color: #cb5a5a;
		font-size: 25px;
	}
	
	.j-boxsright-bottom {
		color: #b1b1b1;
		font-size: 18px;
	}
	
	.j-footer {
		width: 100%;
		height: 95px;
		background: lightcoral;
	}
	
	.j-footer-left {
		width: 75%;
		height: 95px;
		float: left;
		background: #212121;
	}
	
	.j-gong {
		height: 95px;
		text-align: center;
		line-height: 95px;
		font-size: 25px;
		color: white;
	}
	
	.j-mo {
		color: #ba900e;
	}
	
	.j-footer-right {
		width: 25%;
		height: 95px;
		float: left;
		background: #b71c1c;
	}
	
	.j-btn {
		width: 160px;
		height: 95px;
		background: none;
		border: none;
		color: white;
		font-size: 25px;
	}
	
	.j-one {
		width: 100%;
		height: 1120px;
		background: rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 0;
	}
	
	.el-message-box {
		height: 160px;
	}
	
	.el-message-box__message p span {
		font-size: 21px;
	}
	
	.el-message-box__btns {
		margin-top: 50px;
	}
	
	button.el-button.el-button--default.el-button--small {
		font-size: 25px;
		border: none;
	}
	
	button.el-button.el-button--default.el-button--small span {
		font-size: 25px;
		color: #73b876;
		margin-left: 30px;
	}
	
	button.el-button.el-button--default.el-button--small.el-button--primary {
		background: none;
	}
</style>