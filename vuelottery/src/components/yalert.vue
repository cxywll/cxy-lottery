<template>
  <el-button type="text" @click="open">
  	<slot></slot>
  </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          message: h('p', null, [
            h('span', null, '该商品用999 兑换金兑换 ，在购物区购买商品可获得相应模拟金 '),
            h('i', { style: 'color: teal' }, )
          ]),
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
//        beforeClose: (action, instance, done) => {
//          if (action === 'confirm') {
////            instance.confirmButtonLoading = true;
//            setTimeout(() => {
//              done();
//              setTimeout(() => {
////                instance.confirmButtonLoading = false;
//              }, 300);
//            }, 3000);
//          } else {
//            done();
//          }
//        }
        }).then(action => {
//        this.$message({
//          type: 'info',
//          message: 'action: ' + action
//        });
        });
      }
    }
  }
</script>