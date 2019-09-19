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
        <td v-for="(items) in item" :key="items">
          {{items}}
          <!--  v-show="spanShow" -->
          <!-- 给span一个单独的样式，如果数据里出现了相同的号码，就添加上红色的样式 -->
          <!-- <span :class="{active:false}">
            {{items}} -->
            <!-- <i>{{items}}</i> -->
          <!-- </span> -->
        </td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
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
      list:[
        {
          qici:'1期',
          kjh:'123',
          daxiao:'大',
          dansh:'单',
        },
        {
          qici:'1期',
          kjh:'123',
          daxiao:'大',
          dansh:'单',
        },{
          qici:'1期',
          kjh:'123',
          daxiao:'大',
          dansh:'单',
        },
        {
          qici:'1期',
          kjh:'123',
          daxiao:'大',
          dansh:'单',
        },{
          qici:'1期',
          kjh:'123',
          daxiao:'大',
          dansh:'单',
        },
        {
          qici:'1期',
          kjh:'123',
          daxiao:'大',
          dansh:'单',
        },
      ]
    }
  },
  components:{
    Cfoot
  },
  created(){
    for(var i=0;i<this.list.length;i++){
      for(var key in this.list[i]){
          // console.log(key,this.list[2][key])
          if(this.list[i][key] == null){
            this.spanShow = true;
          }
      }
    }
    // if(this.list)
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
      /* border-right: 1px #00422c solid; */
      margin-top: 3.4rem;
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
      width:9%;
      padding:0.1rem 0;
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
    /* .tr td span */
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
    /* .tr td span i{
      width: 20px;
      height: 20px;
      background-color: blue;
      display: inline-block;
      border-radius: 50%;
      font-style: normal;
      position: absolute;
      font-size: 5px;
      text-align: center;
      line-height: 20px;
      top: -5px;
      right: -5px;
      color: #fff;
    } */
</style>