<template>
    <div>
        <div class="S_head">
            <div class="s_infor">
                <p class="s_t">上期开奖</p>
                <p class="s_n">{{qi}}</p>
            </div>
            <div class="s_infor">
                <p class="s_t">距{{qi}}期截止</p>
                <p class="s_n">0{{minutes}}:{{seconds}}</p>
            </div>
        </div>
        <div class="s_c">
            <div class="s_nav" @click="n=0" :style="{borderBottomColor:n==0?'orange':'#02ac76',colo1r:n==0?'orange':'rgb(201, 171, 116)'}">选号</div>
            <div class="s_nav" @click="n=1" :style="{borderBottomColor:n==1?'orange':'#02ac76',color:n==1?'orange':'rgb(201, 171, 116)'}">走势图</div>
        </div>
        <div class="s_content">
            <div class="s_big" :style="{left:-n*100 + '%'}">
                <div class="s_small">
                    <div class="s_tou">
                        <div class="s_type">
                            <div @click="stype = !stype" class="s_m">玩法：{{monment}}<i class="iconfont icon-jiantou-down"></i></div>
                            <div class="s_types">
                                <div v-for="(i,index) in arr" :key="index" v-show="stype" @click="change(i,index)">{{i}}</div> 
                            </div>
                        </div>
                        <router-link to='/lotteryRule'>
                            <span><i class="iconfont icon-wenhao"></i></span>
                        </router-link>
                    </div>
                    <div class="s_h" v-if="m==0">
                        <div class="s_type_content">
                            <p class="clearfix">
                                <span class="t">和值<span class="san"></span></span>
                                猜开奖号码相同的值
                            </p>
                            <div class="s_p">
                                <span>
                                    <p>4</p>
                                    <p>奖励80金</p>
                                </span>
                                <span>
                                    <p>5</p>
                                    <p>奖励40金</p>
                                </span>
                                <span>
                                    <p>6</p>
                                    <p>奖励25金</p>
                                </span>
                                <span>
                                    <p>7</p>
                                    <p>奖励16金</p>
                                </span>
                                <span>
                                    <p>8</p>
                                    <p>奖励12金</p>
                                </span>
                                <span>
                                    <p>9</p>
                                    <p>奖励10金</p>
                                </span>
                                <span>
                                    <p>10</p>
                                    <p>奖励9金</p>
                                </span>
                                <span>
                                    <p>11</p>
                                    <p>奖励9金</p>
                                </span>
                                <span>
                                    <p>12</p>
                                    <p>奖励10金</p>
                                </span>
                                <span>
                                    <p>13</p>
                                    <p>奖励12金</p>
                                </span>
                                <span>
                                    <p>14</p>
                                    <p>奖励16金</p>
                                </span>
                                <span>
                                    <p>15</p>
                                    <p>奖励25金</p>
                                </span>
                                <span>
                                    <p>16</p>
                                    <p>奖励40金</p>
                                </span>
                                <span>
                                    <p>17</p>
                                    <p>奖励80金</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="s_h" v-else-if="m==1">
                        <div class="s_type_content">
                            <p class="clearfix">
                                <span class="t">三同值<span class="san"></span></span>
                                猜中豹子号(三个相同号)
                            </p>
                            <div class="s_p">
                                <span>
                                    <p>111</p>
                                    <p>奖励240金</p>
                                </span>
                                <span>
                                    <p>222</p>
                                    <p>奖励240金</p>
                                </span>
                                <span>
                                    <p>333</p>
                                    <p>奖励240金</p>
                                </span>
                                <span>
                                    <p>444</p>
                                    <p>奖励240金</p>
                                </span>
                                <span>
                                    <p>555</p>
                                    <p>奖励240金</p>
                                </span>
                                <span>
                                    <p>666</p>
                                    <p>奖励240金</p>
                                </span>
                            </div>
                            <p>
                                <span class="th">三同号通选<span class="sans"></span></span>
                                猜中豹子号(三个相同号)
                            </p>
                            <div class="s_p">
                                <span class="tong">
                                    <p>三同号通选</p>
                                    <p>任意一个豹子号开出及中40积分</p>
                                </span>
                            </div>
                        </div>
                    </div>
                     <div class="s_h" v-else-if="m==2">
                        <div class="s_type_content">
                            <p class="clearfix">
                                <span class="th">二同号单选<span class="sans"></span></span>
                                选择同号和不同号的组合,奖励80积分
                            </p>
                            <p class="c_t">同号</p>
                            <div class="s_p">
                                <span>11</span>
                                <span>22</span>
                                <span>33</span>
                                <span>44</span>
                                <span>55</span>
                                <span>66</span>
                            </div>
                            <p class="c_t">不同号</p>
                            <div class="s_p">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                            </div>
                            <p class="clearfix">
                                <span class="th">二同号复选<span class="sans"></span></span>
                                猜开奖中的2个指定的相同号码，奖励15积分
                            </p>
                            <div class="s_p">
                                <span>
                                   11*
                                </span>
                                <span>
                                    22*
                                </span>
                                <span>
                                    33*
                                </span>
                                <span>
                                    44*
                                </span>
                                <span>
                                    55*
                                </span>
                                <span>
                                    66*
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="s_h" v-else-if="m==3">
                        <div class="s_type_content">
                            <p class="clearfix">
                                <span class="th">三不同号<span class="sans"></span></span>
                                猜开奖的三个不同号码，奖励40积分
                            </p>
                            <div class="s_p">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                            </div>
                            <p>
                                <span class="th">三连号<span class="sans"></span></span>
                                123,234,345,456，任一开出即中10积分
                            </p>
                            <div class="s_p">
                                <span class="tong">三连号通选</span>
                            </div>
                        </div>
                    </div>
                    <div class="s_h" v-else-if="m==4">
                        <div class="s_type_content">
                            <p class="clearfix">
                                <span class="th">二不同号<span class="sans"></span></span>
                                猜开奖中的2个指定的不同号码，奖励8积分
                            </p>
                            <div class="s_p">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="s_small">
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
                </div>
            </div>
        </div>
        <div class="s_zhu">
            <p>共{{zhu}}注 <a>{{money}}模拟金</a></p>
            <router-link to='/touzhu'>
                <span>确定</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            qi:'136',
            stype:false,
            n:0,
            zhu:0,
            money:0,
            arr:['和值','三同号','二同号','三不同','二不同'],
            monment:'和值',
            m: 0,
            minutes:9,
            seconds:59,
            list:[],
        }
    },
    methods: {
        change(a,b){
            this. stype = false;
            this.monment = a;
            this.m = b;
        },
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
    // 倒计时
    var timer = setInterval(()=>{
        if(this.seconds == 0){
            this.seconds = 59;
            this.minutes --
        }else{
            this.seconds --;
            if(this.seconds<10){
                this.seconds = '0'+this.seconds
            }
        }
        if(this.seconds==0 && this.minutes==0){
            clearInterval(timer)
        }
    },1000);
    
  }
}
</script>

<style scoped>
.content{
  width: 100%;
  border-collapse:collapse;
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
.s_type_content>p>span{
    margin-right: .7rem;
}
.s_type_content .c_t{
    width: 100%;
    text-align: center;
    line-height: 1rem;
}
.s_h{
    height: auto;
}
.s_p{
    width: cale(100% - 2.8rem);
    height: auto;
    padding: .5rem 1.4rem 0;
}
.s_p .tong{
    margin-top: .5rem;
    width: 7rem;
    height: 1rem;
}
.s_p span p:nth-child(1){
    width: 100%;
    height: .5rem;
    padding: 0;
    margin: 0;
    line-height: .5rem;
    text-align: center;
    font-size: .3rem;
}
.s_p span p:nth-child(2){
     width: 100%;
    height: .5rem;
    padding: 0;
    margin: 0;
    line-height: .5rem;
    font-size: .2rem;
}
.s_p span{
    width: 2rem;
    height: 1rem;
    background-color: #004832;
    border: .07rem solid #02ac76;
    display: block;
    float: left;
    margin: .1rem .1rem;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    border-radius: 5px;
    font-size: .3rem;
}
.s_type_content .san{
    width: 0;
    height: 0;
    border-width: .3rem;
    border-style: solid;
    border-color: #077552  #077552 #077552 #02ac76;
    position: absolute;
    left: 1.2rem;
    top: 0;
}
.s_type_content p{
    width: 100%;
    float: left;
    line-height: .6rem;
    font-size: .4rem;
    color: #c4c2c2;
    padding: .2rem 0;
}
.s_type_content .sans{
    width: 0;
    height: 0;
    border-width: .3rem;
    border-style: solid;
    border-color: #077552  #077552 #077552 #02ac76;
    position: absolute;
    left: 2rem;
    top: 0;
}
.s_type_content .th{
    width: 2rem;
    height: .6rem;
    font-size: .4rem;
    line-height: .6rem;
    text-align: center;
    background-color: #02ac76;
    display: inline-block;
    margin-left: .6rem;
    float: left;
    color: rgb(219, 215, 215);
    position: relative;
}
.s_type_content .t{
    width: 1.2rem;
    height: .6rem;
    font-size: .4rem;
    line-height: .6rem;
    text-align: center;
    background-color: #02ac76;
    display: inline-block;
    margin-left: .6rem;
    float: left;
    color: rgb(219, 215, 215);
    position: relative;
}
.s_type_content{
    padding-top: .5rem;
    height: auto;
}
.s_type{
    width: 6rem;
    float: left;
    position: relative;
}
.s_small .s_tou .s_type .iconfont{
    font-size: .3rem;
    color: #fff;
    float: right;
    margin-right: .5rem;
}
.s_types{
    box-shadow: 3px 3px 5px #a3a3a3;
    border-radius: 7px;
}
.s_type .s_types>div{
    line-height: 1.2rem;
    padding-left: .3rem;
    font-size: .42rem;
}
.s_type .s_types{
    width: 3.5rem;
    height: auto;
    line-height: .6rem;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    background-color: #fff;
}
.s_type .s_m{
    width: 3.5rem;
    height: 1.2rem;
    background-color: #02ac76;
    color: #fff;
    text-align: center;
    line-height: 1.2rem;
    font-size: .35rem;
    border-radius: 5px;
}
[v-clock]{
    display: none;
}
.s_tou{
    height: 1.2rem;
    margin-top: .2rem;
    margin-left: .8rem;
}
.s_tou span{
    float: right;
    margin-right: 1rem;
    line-height: 1.2rem;
}
.s_tou .iconfont{
     font-size: .6rem;
     color: rgb(22, 153, 103);
}
.s_small{
    width: 50%;
    float: left;
    height: 13rem;
    overflow: scroll;
}
.s_content{
    width: 100%;
    height: 14rem;
    background-color: #077552;
    overflow: hidden;
    position: relative;
}
.s_big{
    width: 200%;
    height: 13rem;
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s;
}
.s_zhu p{
    width: 74%;
    float: left;
    color: #fff;
    text-align: center;
    line-height: 1.4rem;
    font-size: .4rem;
}
.s_zhu p a{
    color: #fad506;
}
.s_zhu{
    width: 100%;
    height: 1.4rem;
    background-color: #000;
    position: absolute;
    left: 0;
    bottom: 0;
}
.s_zhu span{
    width: 26%;
    height: 1.4rem;
    background-color: darkred;
    font-size: .36rem;
    text-align: center;
    line-height: 1.4rem;
    color: #fff;
    float: right;
}
.s_c{
    width: 100%;
    height: 1rem;
    background-color: #02ac76;
}
.s_nav{
    width: 50%;
    height: 1rem;
    float: left;
    text-align: center;
    color: orange;
    font-size: .4rem;
    line-height: 1rem;
    box-sizing: border-box;
    border-bottom: .05rem solid #02ac76;
    transition: .5s;
}
.S_head{
    width: 100%;
    height: 2.4rem;
    background-color: #08533c;
    font-size: .4rem;
}
.s_infor{
    width: 50%;
    height: 2.4rem;
    float: left;
    color: #fff;
    padding-top: .2rem;
    border-top: .0025rem solid #004832; 
    border-bottom: .0025rem solid #004832; 
    border-right: .0025rem solid #004832; 
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
}
.s_infor .s_t{
    font-size: .35rem;
    line-height: 1rem;
}
.s_infor .s_n{
    font-size: .75rem;
    line-height: .6rem;
    font-weight: 500;
}
.s_infor:nth-child(1) .s_n{
    letter-spacing: .12rem;
}
</style>

