<template>
  <div class="loginBox">
    <div v-show="is==1">
      <!-- 头像 -->
      <div class="image">
        <div class="headPortrait">
          <img :src="user_img" alt />
          <input type="file" @change="file($event)" class="input_user_img" />
        </div>
      </div>
      <div class="main">
        <input type="text" placeholder="请输入用户名" v-model="log_up.name" />
        <input type="text" placeholder="请输入账号" v-model="log_up.user" />
        <input type="password" placeholder="请输入密码" v-model="log_up.pass" />
      </div>
      <div class="loginBut">
        <button @click="log_up_btn">注册</button>
      </div>
      <div class="registerLogin">
        <div class="buttwo">
          <span @click="is=2">登录</span>
          <span @click="is=1">注册</span>
        </div>
      </div>
    </div>
    <div v-show="is==2">
      <div class="title">
        <h3>登录</h3>
      </div>
      <div class="main">
        <input type="text" placeholder="请输入账号" v-model="log_in.user" />
        <input type="password" placeholder="请输入密码" v-model="log_in.pass" />
      </div>
      <div class="loginBut">
        <button @click="log_in_btn">登录</button>
      </div>
      <div class="registerLogin">
        <div class="buttwo">
          <span @click="is=2">登录</span>
          <span @click="is=1">注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      log_in: {
        name: "",
        user: "",
        pass: ""
      },
      is: 1,
      user_img: "",
      log_up: {
        user: "",
        pass: ""
      }
    };
  },
  created() {},
  methods: {
    //头像上传
    file(event) {
      var f = event.target.files[0];
      var d = new FormData();
      d.append("img", f);
      this.$http.post("files/file", d, { emulateJSON: true }).then(data => {
        this.user_img = "http://localhost:8000/img/" + data.data;
        localStorage.user_img = this.user_img;
      });
    },
    //注册
    log_up_btn() {
      this.log_up.user_imgs = this.user_img;
      this.$http
        .post("users/up", this.log_up, { emulateJSON: true })
        .then(data => {
          if (data.data.type == 0) {
            alert(data.data.data);
          } else if (data.data.type == 1) {
            alert(data.data.data);
          } else {
            alert(data.data.data);
          }
        });
    },
    //登录
    log_in_btn() {
      this.log_in.user_imgs = this.user_img;
      this.$http
        .post("users/in", this.log_in, { emulateJSON: true })
        .then(data => {
          if (data.data.type == 0) {
            alert(data.data.data);
          } else if (data.data.type == 1) {
            alert(data.data.data);
          } else {
            alert("登录成功");
            localStorage.name = data.data.data.name;
            localStorage.user_img = data.data.data.user_imgs;
            this.$router.push({path:'/'})
          }
        });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.loginBox {
  width: 100%;
  height: 17.75rem;
  background-color: #00422c;
}
.title {
  width: 100%;
  height: 300px;
  line-height: 300px;
  padding: 0 15%;
}
.title h3 {
  color: #e7fde7;
  font-size: 40px;
  font-weight: normal;
}

.registerLogin {
  width: 100%;
  height: 70px;
  margin-top: 150px;
  padding: 0 5%;
}
.buttwo {
  width: 100%;
  height: 100%;
  background-color: #147114;
  border-radius: 50px;
}
.buttwo span {
  width: 50%;
  height: 100%;
  display: inline-block;
  text-align: center;
  line-height: 70px;
  font-size: 30px;
  color: #e7fde7;
}
.buttwo span:nth-child(1) {
  border-radius: 51px 0 0 51px;
  border-right: 1px solid #205320;
}
.buttwo span:nth-child(2) {
  border-radius: 0 51px 51px 0;
}
.loginBox {
  width: 100%;
  height: 17.75rem;
  background-color: #00422c;
}
.image {
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
  position: relative;
}
.headPortrait {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  position: absolute;
  top: 105px;
  left: 50%;
  margin-left: -50px;
}
.headPortrait img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  margin-left: -50px;
}
.main {
  width: 100%;
  padding: 0 10%;
  margin-bottom: 25px;
}
.input_user_img {
  opacity: 0;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  height: 100px;
}
.main input {
  width: 100%;
  height: 80px;
  border: none;
  border-bottom: 2px #6d836f solid;
  background-color: #00422c;
  padding: 0 0.2rem;
  outline: none;
  font-size: 25px;
  color: #fff;
}
.loginBut {
  width: 100%;
  height: 80px;
  padding: 0 11%;
}
.loginBut button {
  width: 100%;
  height: 100%;
  background-color: #147114;
  border: none;
  font-size: 30px;
  color: #e7fde7;
  border-radius: 20px;
  outline: none;
  letter-spacing: 4px;
}
</style>