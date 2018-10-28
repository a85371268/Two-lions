<template>
  <div class="tl-home-header">
    <div class="tl-home-header-wrapper">
      <mt-switch></mt-switch>
      <div class="tl-home-header-seach">
        <i class="icon iconfont icon-seach"></i>
        <span>卫衣 男</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style lang='scss' scoed>
  $main-color: #f8e372;
  .tl-home-header {
    height:40px;
    background-color: $main-color;
    position: relative;
    &-wrapper{
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      margin:auto;
      .mint-switch{

      }
    }
    &-seach {
      background-color: #fff;
      height:25px;
      border-radius: 6px;
      width:80%;
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
