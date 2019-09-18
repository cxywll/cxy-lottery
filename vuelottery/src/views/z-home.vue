<template>
  <div class="home">
    <header>
      <h2 class="head_text_h2">上午好！朋友</h2>
      <div class="user_img">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540139703196&di=e4cd33a4c426a158199be6b7b9ece9ac&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F31%2F87%2F96573b585a7c9c4.jpg" alt="">
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.home {
  height: 100%;
  background-color: #077552;
}
header {
  text-align: center;
  background-color: rgb(8, 83, 60);
  margin-bottom: 20px;
}
.head_text_h2 {
  color: #f5f5f5;
  font-size: 36px; 
}
.user_img{
      height: 100px;
    width: 100px;
}
.user_img img{
  width: 100%;
  height: 100%;
    border-radius: 50%;

}
</style>