<template>
  <div class="links-item" v-if="msg.icon==='cart'" @click="goCart">
    <i :class="`iconfont icon-${msg.icon}-mine`"></i>
    <span>{{msg.text}}</span>
  </div>
  <div class="links-item" v-else-if="isLogin">
    <i :class="`iconfont icon-${msg.icon}-mine`"></i>
    <span>{{msg.text}}</span>
  </div>
  <div class="links-item" v-else @click="goLogin">
    <i :class="`iconfont icon-${msg.icon}-mine`"></i>
    <span>{{msg.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'linksItem',
  props: ['msg'],
  methods: {
    goCart () {
      this.$router.push('/cart')
    },
    goLogin () {
      this.$router.push('/login')
    }
  },
  data () {
    return {
      isLogin: window.localStorage.getItem('isLogin')
    }
  }
}
</script>

<style lang="scss" scoped>
  .links-item{
    display: flex;
    flex-direction: column;
    text-align: center;
    >i{
      font-size: 20px;
      color:#666;
    }
    >span{
      margin-top: 6px;
      color: #666;
      font-size: 12px;
    }
  }
</style>
