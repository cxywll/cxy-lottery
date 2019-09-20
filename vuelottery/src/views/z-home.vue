<template>
  <div class="home">
    <header>
      <h2 class="head_text_h2">{{time}}</h2>
      <div class="user_img">
        <img :src="user_img" alt />
        <input type="file" @change="file($event)" class="input_user_img" />
      </div>
      <div class="white--text">用户名</div>
      <div class="container">
        <div class="container_box">
          <span>{{SimulationNum}}</span>模拟金
        </div>
        <div class="container_box">
          <span>{{integralNum}}</span>积分
          <router-link class="white--text" to="/point">兑换</router-link>
        </div>
      </div>
    </header>
    <main>
      <div class="main_flex">
        <div v-for="(i,index) in list" :key="index" class="main_fx">
          <div class="main_img" @click="lotteryHall"></div>
          <span>{{i.name}}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
var timer = new Date(); //对象对象
export default {
  name: "home",
  data() {
    return {
      SimulationNum: 200, //模拟金
      integralNum: 200, //积分
      time: "", //时间
      user_img:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540139703196&di=e4cd33a4c426a158199be6b7b9ece9ac&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F31%2F87%2F96573b585a7c9c4.jpg",
      list: [
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        }
      ]
    };
  },
  created() {
    this.times();//时间
  },
  methods: {
    //时间在改变
    times() {
      if (timer.getHours() >= 18) {
        this.time = "晚上好！朋友";
      } else if (timer.getHours() >= 12) {
        this.time = "下午好！朋友";
      } else {
        this.time = "早上好！朋友";
      }
    },
    //头像上传
    file(event) {
      var f = event.target.files[0];
      var d = new FormData();
      d.append('img',f)
      console.log(d);
    },
    //跳转到下注
    lotteryHall() {
      this.$router.push({ path: "/lotteryHall" });
    }
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  background-color: #077552;
}
.input_user_img {
  opacity: 0;
  position: relative;
  top: -105px;
  width: 100px;
  height: 100px;
}
header {
  text-align: center;

  background-color: rgb(8, 83, 60);
  margin-bottom: 20px;
}
.head_text_h2 {
  color: #f5f5f5;
  font-size: 36px;
  padding: 10px 0;
}
.user_img {
  position: relative;
  left: 50%;
  margin-left: -50px;
  height: 100px;
  width: 100px;
}
.user_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.white--text {
  color: #fff;
}
.container {
  padding: 16px 0;
  display: flex;
  background-color: rgb(7, 74, 53);
  margin-top: 10px;
}
.container_box {
  flex: 1;
  color: #ffab00;
  font-size: 26px;
}
.container_box a{
  text-decoration: none;
}
.main_flex {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.main_fx {
  flex: 1;
  max-width: 25%;
  flex-basis: 25%;
}
.main_img {
  background-image: url(http://haoxg.xyz/lottery/img/k31.f388457f.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  min-width: 0;
  border-radius: 50%;
  margin: 15px 30px 15px 30px;
}
.main_fx span {
  display: block;
  color: #48b892;
}
.active {
  background-image: url(http://haoxg.xyz/lottery/img/happyk3.ea0489f1.png);
}
</style>