<template>
  <div class="foot">
      <div class="right">
          <p>共0注 <span>0模拟金</span></p>
      </div>
      <div class="left">
          <span>确定</span>
      </div>
  </div>
</template>

<script>
export default {
    created(){

    }
}
</script>

<style scoped>
    .foot{
        width: 640px;
        height: 100px;
        background-color: red;
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 100px;
    }
    .right{
        width: 75%;
        height: 100%;
        background-color: #212121;
        float: left;
    }
    .right p{
        font-size: 25px;
        color: #fff;
        text-align: center;
    }
    .right p span{
        color: #ffc107;
    }
    .left{
        width: 25%;
        height: 100%;
        background-color:rgb(183, 28, 28);
        float: left;
        text-align: center;
        font-size: 25px;
        color: #fff;
    }
</style>