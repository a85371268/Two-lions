<template>
  <div class="tl-login">
    <i class="iconfont icon-close-login tl-login-back" @click="goBack"></i>
    <login-logo></login-logo>
    <login-form></login-form>
    <login-other></login-other>
  </div>
</template>

<script>
import LoginLogo from '@/components/Login/LoginLogo'
import LoginForm from '@/components/Login/LoginForm'
import LoginOther from '@/components/Login/LoginOther'
export default {
  name: 'login',
  components: {
    LoginLogo,
    LoginForm,
    LoginOther
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .tl-login{
    padding: 30px;
    height: 100%;
    position: relative;
    &-back{
      font-size: 24px;
      position: absolute;
      right: 30px;
      top: 30px;
      color: #666;
    }
  }
</style>
