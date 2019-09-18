<template>
    <div>
        <div class="S_head">
            <div class="s_infor">
                <p class="s_t">上期开奖</p>
                <p class="s_n">{{qi}}</p>
            </div>
            <div class="s_infor">
                <p class="s_t">距{{qi}}期截止</p>
                <p class="s_n">00:00</p>
            </div>
        </div>
        <div class="s_c">
            <div>选号</div>
            <div>走势图</div>
        </div>
        <div class="s_content">

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            qi:'136',
        }
    }
}
</script>

<style scoped>
.s_c{
    width: 100%;
    height: 0.5rem;
    background-color: #077552;
}
.S_head{
    width: 100%;
    height: 1.8rem;
    background-color: #08533c;
    font-size: .4rem;
}
.s_infor{
    width: 50%;
    height: 1.8rem;
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
    font-size: .25rem;
    line-height: .6rem;
}
.s_infor .s_n{
    font-size: .54rem;
    line-height: .6rem;
    font-weight: 500;
}
.s_infor:nth-child(1) .s_n{
    letter-spacing: .12rem;
}
</style>

