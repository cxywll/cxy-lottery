<template>
  <div class="loginBox">
      <!-- 头像 -->
      <div class="image">
          <div class="headPortrait">
            <img src="" alt="">
          </div>
      </div>
      <div class="main">
          <input type="text" placeholder="请输入账号">
          <input type="text" placeholder="请输入密码">
      </div>
      <div class="loginBut">
        <button>注册</button>
      </div>
      <div class="registerLogin">
          <div class="buttwo">
            <router-link to="/login">
                <span>登录</span>
            </router-link>
            <span>注册</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{margin: 0;padding: 0;box-sizing: border-box;}
    .loginBox{
        width: 100%;
        height:17.75rem;
        background-color: #00422c;
    }
    .image{
        width: 100%;
        height:300px;
        text-align: center;
        line-height: 300px;
        position: relative;
    }
    .headPortrait{
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background-color: #ccc;
        position: absolute;
        top: 35%;
        left: 42%;
    }
    .image h3{
        color: #e7fde7;
        font-size: 40px;
        font-weight: normal;
    }
    .main{
        width: 100%;
        height: 160px;
        padding: 0 10%;
        margin-bottom: 25px;
    }
    .main input{
        width: 100%;
        height: 80px;
        border: none;
        border-bottom: 2px #6d836f solid;
        background-color: #00422c;
        padding: 0 0.2rem;
        outline: none;
        font-size: 25px;
    }
    .loginBut{
        width: 100%;
        height: 80px;
        padding: 0 11%;
    }
    .loginBut button{
        width: 100%;
        height: 100%;
        background-color: #147114;
        border:none;
        font-size: 30px;
        color: #e7fde7;
        border-radius: 20px;
        outline: none;
        letter-spacing: 4px;
    }
    .registerLogin{
        width: 100%;
        height: 70px;
        margin-top: 150px;
        padding: 0 5%;
    }
    .buttwo{
        width: 100%;
        height: 100%;
        background-color: #147114;
        border-radius: 50px;
    }
    .buttwo span{
        width: 50%;
        height: 100%;
        display: inline-block;
        text-align: center;
        line-height: 70px;
        font-size: 30px;
        color: #e7fde7;
    }
    .buttwo span:nth-child(1){
        border-radius: 51px 0 0 51px;
        border-right: 1px solid #205320;
    }
    .buttwo span:nth-child(2){
        border-radius: 0 51px 51px 0 ;
    }
</style>