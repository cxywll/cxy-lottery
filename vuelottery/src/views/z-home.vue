<template>
  <div class="home">
    <header>
      <h2 class="head_text_h2">{{time}}</h2>
      <div class="user_img" @click="go_to_login">
        <img :src="user_img" alt />
      </div>
      <div class="white_text">{{user_name}}</div>
      <div class="container">
        <div class="container_box">
          <span>{{SimulationNum}}</span>模拟金
        </div>
        <div class="container_box">
          <span>{{integralNum}}</span>积分
          <router-link class="white_text" to="/point">兑换</router-link>
        </div>
      </div>
    </header>
    <main>
      <div class="main_flex">
        <div v-for="(i,index) in list" :key="index" class="main_fx" @click="addClass">
          <div class="main_img" @click="lotteryHall"></div>
          <!-- animated -->
          <span>{{i.name}}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
var timer = new Date(); //时间对象
export default {
  name: "home",
  data() {
    return {
      SimulationNum: 200, //模拟金
      integralNum: 200, //积分
      time: "", //时间
      user_name:'小赵',//用户名
      user_img:"",
      animate:false,
      list: [
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "河北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "安徽快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "江苏快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "江西快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "内蒙古快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "吉林快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "湖北快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "贵州快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "广西快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "甘肃快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "福建快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "北京快3"
        },
        {
          icon: "http://haoxg.xyz/lottery/img/k31.f388457f.jpg",
          name: "上海快3"
        }
      ]
    };
  },
  created() {
    if(localStorage.user_img){
      this.user_img = localStorage.user_img;
      this.user_name =  localStorage.name;
    }else{  
        this.user_img = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540139703196&di=e4cd33a4c426a158199be6b7b9ece9ac&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F31%2F87%2F96573b585a7c9c4.jpg'
    }
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
    go_to_login(){
      this.$router.push({path:'/login'})
    },
    //跳转到下注
    lotteryHall() {
      this.$router.push({ path: "/" });
    },
    addClass($event){
      // if(event.target.className.indexOf('pulse')!==-1){
      //   event.target.classList.remove('pulse')
      // }else{
      //   event.target.classList.add('pulse')
      // }
      // console.log(event.target)
      $event.target.classList.add('aaa','active')
    }
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  background-color: #077552;
}

header {
  text-align: center;
  font-size: 24px;
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
.white_text {
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
}
@keyframes identifier {
  0%{transform:scale(1)}
  50%{transform: scale(1.3)}
  100%{transform:scale(1)}
}
.main_img {
  background-image: url(http://haoxg.xyz/lottery/img/k31.f388457f.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 80px;
  width: 80px;
  min-width: 0;
  border-radius: 50%;
  margin: 20px 30px 15px 40px;
}
.aaa{
  animation-name: identifier;
  animation-duration: 2s;
}
.main_fx span {
  display: block;
  color: #48b892;
  font-size:24px; 
}
.active {
  background-image: url(http://haoxg.xyz/lottery/img/happyk3.ea0489f1.png);
}
</style>