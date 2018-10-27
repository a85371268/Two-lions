<template>
  <div class="tl-list-header">
    <div class="tl-list-seach">
      <i class="icon iconfont icon-seach"></i>
      <span>套装 女</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListHeader'
}
</script>

<style lang='scss' scoed>
$main-color: #f8e372;
.tl-list-header {
    height:40px;
    background-color: $main-color;
    position: relative;
    >.tl-list-seach {
      background-color: #fff;
      height:25px;
      border-radius: 5px;
      width:90%;
      position: absolute;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      margin:auto;
      padding-left:10px;
      >i{
        font-size: 25px;
        display: inline-block;
        vertical-align: middle;
      }
      >span{
        font-size: 12px;
        color:#666;
      }
    }
  }
</style>
