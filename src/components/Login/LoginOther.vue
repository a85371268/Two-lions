<template>
  <div class="tl-login-bottom">
    <div class="title">其他方式登陆</div>
    <div class="icon-wrapper">
      <dl @click="goOther('QQ')">
        <dt><i class="iconfont icon-qq-login"></i></dt>
        <dd>QQ</dd>
      </dl>
      <dl @click="goOther('微信')">
        <dt><i class="iconfont icon-weixin-login"></i></dt>
        <dd>微信</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginOther',
  methods: {
    goOther (text) {
      this.$messagebox.confirm(`“双狮优选”想要打开“${text}”`)
        .then(() => {
          this.$toast({
            message: '打开失败,请选择其他登陆方式',
            iconClass: 'iconfont icon-close-login'
          })
        })
        .catch(err => {
          console.log(err, '这是一个彩蛋')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .tl-login-bottom{
    height: 18%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 40%;
    text-align: center;
    .title{
      font-size: 13px;
      color: #666;
    }
    .icon-wrapper{
      margin-top: 15px;
      display: flex;
      justify-content: space-around;
      >dl{
        >dt{
          width: 35px;
          height: 35px;
          line-height: 35px;
          border-radius: 50%;
          border: 1px solid #bebebe;
          >i{
            font-size: 22px;
            color:#f8e372;
          }
        }
        >dd{
          font-size: 12px;
          padding-top: 6px;
        }
      }
    }
  }
</style>
