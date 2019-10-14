<template>
	<div>
		<div class="shop-banner">
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544695339701&di=e614a2ae7b5d3fd39738839e46e534ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8415a77c3a4a80120a12372925c.jpg%402o.jpg">
			<div id="broadcast">恭喜用户123****321，购买32个烟斗，获赠999模拟金</div>
		</div>
		<div class="v-tabs__wrapper">
			<!-- div class="tiao" style="left: 175px;width: 174px;"> -->
				<div class="v-tabs__div" @click='type = true'>
					<a class="v-tabs__item" style="position: static;" :class="[type?'active':'']">兑换区</a>
				</div>
				<div class="v-tabs__div" @click='type=!type'>
					<a class="v-tabs__item v-tabs__item--active" style="position: static;" :class="[!type?'active':'']">购物区</a>
				</div>
		</div>
		<!-- 兑换 -->
		<div class="left" v-show='type'>
			<div class="iph dhimg" v-for="(item,index) in conversion" :key="index">
				<wcjs class="j-btn" @click="typealter=true">
					<img :src="item.img">
					<p class="text-xs-center mb-0">{{item.name}}</p>
					<p class="text-xs-center mb-0">积分：{{item.point}}</p>
					<p class="text-xs-center mb-0"><small>市场参考价：{{item.price}}.00</small></p>
				</wcjs>
			</div>
		</div>
		<!-- 购买 -->
		<div class="right" v-show='!type'>
			<div class="iph" v-for="(item,index) in shop" :key="index"> 
				<wcjs class="j-btn" @click="typealter=true">
					<div>
						<img :src="item.img">
					</div>
					<p class="text-xs-center mb-0">{{item.name}}</p>
					<p class="text-xs-center mb-0">积分：{{item.point}}</p>
					<p class="text-xs-center mb-0"><small>市场参考价：{{item.price}}.00</small></p>
				</wcjs>
			</div>
		</div>
	</div>

	


</template>
<script type="text/javascript">
import alert from "@/components/yalert.vue";
export default {
  data() {
    return {
      type: false,
      typealter: false,
      conversion: [], //兑换
      shop: [] //购物
    };
  },
  created() {
    this.$http.get("data/json").then(data => {
      this.conversion = data.data[0];
	  this.shop = data.data[1];
	  console.log(this.conversion)
    });
  },
  components: {
    wcjs: alert
  }
};
</script>

<style scoped>
.active {
  border-bottom: 3px solid red;
}
.shop-banner {
  position: relative;
}
.shop-banner img {
  width: 100%;
}
#broadcast {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  color: red;
  padding: 2px 5px;
  overflow: hidden;
}
.v-tabs__wrapper {
  width: 100%;
  height: 88px;
  background: write;
}
.v-tabs__item {
  width: 50%;
  height: 88px;
  background: rgba(0, 0, 0, 0.07);
  float: left;
  box-sizing: border-box;
}

.v-tabs__div a{
	font-size: 30px;
	line-height:88px;
	text-align: center;
}
.iph{
	width: 50%;
	height: 300px;
	float:left;
	text-align: center;

}
.iph img{
	display: inline-block;
	text-align: center;
	max-height: 200px;
	max-width: 200px;
	vertical-align: middle;
	margin-left:-30px;
}
.dhimg{
	width: 50%;
	height: 300px;
	float: left;
}
.dhimg:nth-of-type(2){
	padding-top: 0.8rem;
	box-sizing: border-box;
}
.dhimg:nth-of-type(2) img{
	margin-bottom: 0.3rem;
}
.iph p{
	font-size: 0.3rem;
	color: black;
	line-height: .4rem;
}
</style>