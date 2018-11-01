<template>
  <div :class="isOut?`tl-login fadeOutDownBig animated`:`tl-login fadeInUpBig animated`">
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
import {mapMutations} from 'vuex'
export default {
  name: 'login',
  components: {
    LoginLogo,
    LoginForm,
    LoginOther
  },
  data () {
    return {
      isOut: false
    }
  },
  methods: {
    goBack () {
      this.isOut = true
      setTimeout(() => {
        this.$router.back()
      }, 400)
    },
    ...mapMutations(['changeBackUrl'])
  },
  mounted () {
    // 获取url存到vuex中
    this.changeBackUrl(this.$router.history.current.query.tUrl)
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

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUpBig {
  animation-name: fadeInUpBig;
}

.animated {
  animation-duration: 0.8s;
  animation-fill-mode: both;
}
@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.fadeOutDownBig {
  animation-name: fadeOutDownBig;
}
</style>
