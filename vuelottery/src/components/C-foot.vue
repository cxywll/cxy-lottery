<template>
  <div class="foot">
      <div class="right">
          <p>共0注 <span>0模拟金</span></p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .foot{
        width: 750px;
        height: 110px;
        background-color: red;
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 110px;
    }
    .right{
        width: 75%;
        height: 100%;
        background-color: #212121;
    }
    .right p{
        font-size: 28px;
        color: #fff;
        text-align: center;
    }
</style>