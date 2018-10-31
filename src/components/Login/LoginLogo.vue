<template>
  <div class="tl-login-top">
    <div class="logo">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540963054646&di=ac610219d78dedc8ee9e643abcce1531&imgtype=0&src=http%3A%2F%2Fwenwen.soso.com%2Fp%2F20100219%2F20100219021537-3224489.jpg" alt="">
    </div>
    <div class="title">双狮优选</div>
  </div>
</template>

<script>
export default {
  name: 'loginLogo'
}
</script>

<style lang="scss" scoped>
  .tl-login-top{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    .logo{
      width: 25%;
      >img{
        width: 100%;
      }
    }
    .title{
      color: #666;
      padding-top: 10px;
      font-size: 16px;
    }
  }
</style>
