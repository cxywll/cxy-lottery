<template>
  <div class="rechargebox">
      <div class="header">
          <h3>欢迎充值</h3>
      </div>
      <div class="main clearfix">
        <p>
            您充值的账号：<input type="text" placeholder="请输入账号">
        </p>
        <p>
            确认用户密码：<input type="password" placeholder="请输入密码">
        </p>
        <div class="money clearfix">
            <span class="spanmoney">充值金额：</span>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <span>10元</span>
                    <i>500个金币</i>
                </li>
                <!-- <li>
                    <span>10元</span>
                    <i>500个金币</i>
                </li>
                <li>
                    <span>10元</span>
                    <i>500个金币</i>
                </li>
                <li>
                    <span>10元</span>
                    <i>500个金币</i>
                </li> -->
            </ul>
        </div>
      </div>
      <!-- 立即充值 -->
      <div class="recharge-money">
          <p>立即充值：<button>立即支付</button></p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:4,
        }
    }
}
</script>

<style scoped>
 .clearfix::after,
.clearfix::before {
    content: '';
    display: table;
}
.clearfix::after {
    clear: both;
}
.clearfix {
    zoom: 1;
}
    .rechargebox{
        width: 100%;
        height: 100%;
        background-color: #08533c;
    }
    .header{
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 30px;
        color: aliceblue;
    }
    .main{
        width: 100%;
        /* height: 3rem; */
        margin-top: 0.2rem;
        padding: 0.5rem 0.4rem;
        box-sizing: border-box;
    }
    .main p{
        height: 80px;
        /* background-color: orange; */
        font-size: 25px;
        color: #cccccc;
        padding: 0.15rem 0;
        box-sizing: border-box;
        margin-bottom: 0.2rem;
    }
    .main p input{
        width: 65%;
        height: 100%;
        border: 1px #ccc solid;
        border-radius: 10px;
        padding-left:20px;
        font-size:28px;
        outline: none;
        /* display: inline-block; */
        /* background-color: #08533c; */
    }
    .money{
        width: 100%;
        height: 100px;
        /* background-color: red; */
        margin-top: 50px;
        padding: 0.2rem 0;
        box-sizing: border-box;
    }
    .spanmoney{
        height: 100px;
        line-height: 80px;
        font-size: 25px;
        color: #ccc;
        display: inline-block;
        float: left;
    }
    .money ul{
        width: 78%;
        height: 100%;
        float: left;
        display: flex;
    }
    .money ul li{
        text-align: center;
        border:1px #ccc solid;
        margin-right: 0.15rem;
        flex: 1;
        padding:0.15rem 0;
    }
    .money ul li:last-child{
        margin-right: 0;
    }
    .money ul li span{
        color: orange;
        display: block;
        margin-bottom: 0.1rem;
    }
    .money ul li i{
        font-style: normal;
        color: #a3a3a3;
    }
    .recharge-money{
        width: 100%;
        height: 1rem;
        /* background-color: red; */
        line-height: 1rem;
    }
    .recharge-money p{
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 25px;
        color:#ccc;
    }
    .recharge-money p button{
        width: 35%;
        height: 100%;
        border: 1px #ccc solid;
        background-color: #08533c;
        border-radius: 10px;
        outline: none;
        font-size: 30px;
        color: #fff;
        margin-left: 25px;
        box-shadow: 3px 3px 5px #000;
    }
</style>