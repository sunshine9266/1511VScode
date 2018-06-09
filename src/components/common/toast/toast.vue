<template>
  
      <!-- 全局提示框 -->
      <div v-show="visible" class="dialog-tips dialog-center">
          <div>{{message}}</div>
      </div>
  
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: ""
    };
  }
};
</script>
<style scoped="scoped" lang="less">
.dialog-tips{
    position: fixed;
    z-index: 100;
    min-width: 3.055555rem;
   	height: 0.972222rem;
   	line-height: 0.972222rem;
    white-space: nowrap;
    background-color: #333;
    font-size: 0.166666rem;
    font-weight: bolder;
    letter-spacing: 3px;
	border-radius: 0.277777rem;
    color: white;
    text-align: center;
    /*.dialog-tips-icon{
        width: 54px;
        height: 54px;
        display: inline-block;
        margin-bottom: 13px;
    }*/
}
.dialog-center {
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%)
}
</style>