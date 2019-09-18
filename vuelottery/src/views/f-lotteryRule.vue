<template>
    <div class="main">
        <div class="rule">
            <p>玩法规则</p>
            <li>每期开出3个数字作为开奖号码，每个数字取值范围1-6（相当于摇3个骰子）。</li>
        </div>
        <div class="plain">
            <p>奖励说明</p>
            <table border="1" cellspacing="0" border-color="red">
                <tr>
                    <td width="100" style="background:#eee">玩法</td>
                    <td width="130" style="background:#eee">中奖条件</td>
                    <td width="100" style="background:#eee">奖励(积分)</td>
                </tr>
                <tr>
                    <td width="100">和值</td>
                    <td width="130">猜中开奖号相加的和</td>
                    <td width="100">9-18</td>
                </tr>
                <tr>
                    <td width="100" style="background:#eee">三个号<br>单选</td>
                    <td width="130" style="background:#eee">猜中111、222、333、444、555、666中指定一个</td>
                    <td width="100" style="background:#eee">240</td>
                </tr>
                <tr>
                    <td width="100">三个号<br>通选</td>
                    <td width="130">111、222、333、444、555、666中任一个开出</td>
                    <td width="100">40</td>
                </tr>
                <tr>
                    <td width="100" style="background:#eee">二同号<br>单选</td>
                    <td width="130" style="background:#eee">猜中3个号（有2个号相同）</td>
                    <td width="100" style="background:#eee">80</td>
                </tr>
                <tr>
                    <td width="100">二同号<br>通选</td>
                    <td width="130">猜中开奖中相同的2个号</td>
                    <td width="100">15</td>
                </tr>
                 <tr>
                    <td width="100" style="background:#eee">三个同号</td>
                    <td width="130" style="background:#eee">猜中3个号（各不相同）</td>
                    <td width="100" style="background:#eee">40</td>
                </tr>
                <tr>
                    <td width="100">二不同号<br>通选</td>
                    <td width="130">猜中开奖中不相同的2个号</td>
                    <td width="100">8</td>
                </tr>
                <tr>
                    <td width="100" style="background:#eee">三连号<br>通选</td>
                    <td width="130" style="background:#eee">123，234，345，456任意一个开出</td>
                    <td width="100" style="background:#eee">10</td>
                </tr>
            </table>
            <div class="footer">
                <li>便捷返奖</li>
                <span>奖励自动返还至用户账户中，可继续投注或者提现!</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style-type: none;
    }
    .main{
        height: auto;
        padding: 40px 30px;
    }
    .rule{
        height: 80px;
    }
    .rule p{
        font-weight: bold;
        color: red;
        margin: 20px 0 16px;
        font-size: 32px;
    }
    .rule li{
        font-size: 28px;
        color: #08533c;
    }
    .plain p{
        font-weight: bold;
        color: red;
        margin: 90px 0 20px;
        font-size: 30px;
    }
    .plain td{
        font-size: 28px;
        text-align: center;
        color: #336c5a;
        margin: 5px 5px 5px 5px;
    }
    table{
        border:1px solid #e6e6e6;
    }
    table tr td{
        padding:    5px;
        border:1px solid #e6e6e6;
    }
    .footer li{
        font-weight: bold;
        color: red;
        margin: 20px 0 20px;
        font-size: 30px;
    }
    .footer li{
        font-weight: bold;
        color: red;
        margin: 20px 0 20px;
        font-size: 30px;
    }
    .footer span{
        margin: 20px 0 20px;
        font-size: 27px;
        color: #08533c;
    }
</style>