<template>
  <div>
    <div class="shop-banner">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544695339701&di=e614a2ae7b5d3fd39738839e46e534ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8415a77c3a4a80120a12372925c.jpg%402o.jpg"
      />
      <div id="broadcast">恭喜用户123****321，购买32个烟斗，获赠999模拟金</div>
    </div>
    <div class="v-tabs__wrapper">
      <!-- div class="tiao" style="left: 175px;width: 174px;"> -->
      <div class="v-tabs__div" @click="type = true">
        <a class="v-tabs__item" style="position: static;" :class="[type?'active':'']">兑换区</a>
      </div>
      <div class="v-tabs__div" @click="type=!type">
        <a
          class="v-tabs__item v-tabs__item--active"
          style="position: static;"
          :class="[!type?'active':'']"
        >购物区</a>
      </div>
    </div>
    <div class="left" v-show="type">
      <div class="iph">
        <wcjs class="j-btn" @click="typealter=true">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077945538&di=003d3de1479ae95ab6131ca11d042c4a&imgtype=0&src=http%3A%2F%2Fa.vpimg3.com%2Fupload%2Fmerchandise%2Fpdcvis%2F146767%2F2017%2F1104%2F115%2F88257c95-7205-4390-8eab-635fc8384069_t.jpg"
          />
          <p class="text-xs-center mb-0">iphoneX (尊贵铂金)</p>
          <p class="text-xs-center mb-0">积分：999</p>
          <p class="text-xs-center mb-0">
            <small>市场参考价：9999.00</small>
          </p>
        </wcjs>
      </div>
      <div class="iph">
        <wcjs class="j-btn" @click="typealter=true">
          <div style="margin:20px;">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077790483&di=716de166c55fe352462ca970809e926f&imgtype=0&src=http%3A%2F%2Fi1.hexunimg.cn%2F2016-03-15%2F182772684.jpg"
            />
          </div>
          <p class="text-xs-center mb-0">话费充值卡</p>
          <p class="text-xs-center mb-0">积分：100.00</p>
          <p class="text-xs-center mb-0">
            <small>市场参考价：9999.00</small>
          </p>
        </wcjs>
      </div>
    </div>
    <div class="right" v-show="!type">
      <div class="iph">
        <wcjs class="j-btn" @click="typealter=true">
          <div style="margin:20px;">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"
            />
          </div>
          <p class="text-xs-center mb-0">烟斗 (中号)</p>
          <p class="text-xs-center mb-0">积分：9999</p>
          <p class="text-xs-center mb-0">
            <small>市场参考价：9999.00</small>
          </p>
        </wcjs>
      </div>
      <div class="iph">
        <wcjs class="j-btn" @click="typealter=true">
          <div style="margin:20px;">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"
            />
          </div>
          <p class="text-xs-center mb-0">烟斗 (中号)</p>
          <p class="text-xs-center mb-0">积分：9999</p>
          <p class="text-xs-center mb-0">
            <small>市场参考价：9999.00</small>
          </p>
        </wcjs>
      </div>
      <div class="iph">
        <wcjs class="j-btn" @click="typealter=true">
          <div style="margin:20px;">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"
            />
          </div>
          <p class="text-xs-center mb-0">烟斗 (中号)</p>
          <p class="text-xs-center mb-0">积分：9999</p>
          <p class="text-xs-center mb-0">
            <small>市场参考价：9999.00</small>
          </p>
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
      conversion :[],//兑换
      shop:[]  //购物
    };
  },
  created(){
    this.$http.get('data/json').then(data=>{
      this.conversion =  data.data[0]
      this.shop = data.data[1]
    })
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

.v-tabs__div a {
  font-size: 30px;
  line-height: 88px;
  text-align: center;
}
.iph {
  width: 50%;
  height: 300px;
  float: left;
  text-align: center;
}

.v-tabs__div a {
  font-size: 30px;
  line-height: 88px;
  text-align: center;
}
.iph {
  width: 50%;
  height: 300px;
  float: left;
  text-align: center;
}
.iph img {
  display: inline-block;
  text-align: center;
  max-height: 200px;
  max-width: 200px;
  vertical-align: middle;
}
</style>