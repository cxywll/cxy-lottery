<template>
  <div class="trendbox">
    <table class="content">
      <thead class="trHead">
        <th>期次</th>
        <th style="width:50px;">开奖号</th>
        <th>大小</th>
        <th>单双</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
      </thead>
      <tr class="tr" v-for="(item,index) in list" :key="index">
        <!-- 开奖期号 -->
        <td>
          {{item.issue}}
        </td>
        <!-- 开奖号码 -->
        <td>
          {{item.for_no.split(',').join('')}}
        </td>
        <!-- 大小 -->
        <td>
          {{item.sun_value>9?'大':'小'}}
        </td>
        <!-- 单双 -->
        <td>
          {{item.sun_value%2==1?'单':'双'}}
        </td>
        <!-- 开奖号走势图 -->
        <td>
          <span :style="{backgroundColor:item.for_no.indexOf(1)==-1?'':'red'}">1<i :style="{display:item.for_no.indexOf(1)==0&&item.two_number.indexOf(1)==0&&item.two_number.split('').length>=2?'block':'none'}">{{item.two_number.split('').length}}</i></span>
        </td>
        <td>
          <span :style="{backgroundColor:item.for_no.indexOf(2)==-1?'':'red'}">2<i :style="{display:item.for_no.indexOf(2)==0&&item.two_number.indexOf(2)==0&&item.two_number.split('').length>=2?'block':'none'}">{{item.two_number.split('').length}}</i></span>
        </td>
        <td>
          <span :style="{backgroundColor:item.for_no.indexOf(3)==-1?'':'red'}">3<i :style="{display:item.for_no.indexOf(3)==0&&item.two_number.indexOf(3)==0&&item.two_number.split('').length>=2?'block':'none'}">{{item.two_number.split('').length}}</i></span>
        </td>
        <td>
          <span :style="{backgroundColor:item.for_no.indexOf(4)==-1?'':'red'}">4<i :style="{display:item.for_no.indexOf(4)==0&&item.two_number.indexOf(4)==0&&item.two_number.split('').length>=2?'block':'none'}">{{item.two_number.split('').length}}</i></span>
        </td>
        <td>
          <span :style="{backgroundColor:item.for_no.indexOf(5)==-1?'':'red'}">5<i :style="{display:item.for_no.indexOf(5)==0&&item.two_number.indexOf(5)==0&&item.two_number.split('').length>=2?'block':'none'}">{{item.two_number.split('').length}}</i></span>
        </td>
        <td>
          <span :style="{backgroundColor:item.for_no.indexOf(6)==-1?'':'red'}">6<i :style="{display:item.for_no.indexOf(6)==0&&item.two_number.indexOf(6)==0&&item.two_number.split('').length>=2?'block':'none'}">{{item.two_number.split('').length}}</i></span>
        </td>
      </tr>
    </table>
    <Cfoot></Cfoot>
  </div>
</template>

<script>
import Cfoot from '../components/C-foot'
export default {
  data(){
    return{
      spanShow:false,
      list:[]
    }
  },
  components:{
    Cfoot
  },
  created(){
    for(var i=0;i<this.list.length;i++){
      for(var key in this.list[i]){
          if(this.list[i][key] == null){
            this.spanShow = true;
          }
      }
    }
    this.$http.get('/data/data').then(data=>{
      this.list = data.data;
    })
    
  }
}
</script>

<style scoped>

.trendbox{
  width: 100%;
}
.content{
  width: 100%;
  border-collapse:collapse;
  margin-top: 3.4rem;
  margin-bottom: 1.55rem;
}
.trHead{
  width: 100%;
  height: 45px;
}
.tr{
  width: 100%;
  height: 55px;
}
.tr:nth-child(2n)>td{
  background-color: #08533c;
}
.trHead th,.tr td{
  width: 9vw;
  height: 9vw;
  font-size: 25px;
  background-color: #0b5f45;
  border-bottom:1px solid #00422c;
  border-right:1px solid #00422c;
  color: rgb(72,184,146);
  text-align: center;
}
.trHead th:nth-child(2),.tr td:nth-child(2){
  width: 15%;
}
.tr td{
  font-size: 23px;
  position: relative;
}
.tr td span{
  width: .7rem;
  height: .7rem;
  display: block;
  margin: 0 auto;
  position: relative;
  text-align: center;
  line-height: .7rem;
  border-radius: 50%;
}
.active{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  display: inline-block;
  text-align: center;
  line-height: 35px;
  position: absolute;
  left:6px;
  right: 0;
  bottom: 0;
  top: 10px;
  color: #fff;
}
.tr td i{
  width:  .3rem;
  height: .3rem;
  background-color: blue;
  display: block;
  border-radius: 50%;
  font-style: normal;
  position: absolute;
  right: 0;
  top: 0;
  font-size: .2rem;
  text-align: center;
  line-height: .3rem;
}
</style>