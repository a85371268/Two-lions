<template>
  <div class="tl-login-form">
    <form @submit.prevent="onSubmit">
      <label>
        <i class="iconfont icon-yonghuming-login"></i>
        <input type="text" placeholder="请输入用户名" v-model="userName">
        <div class="prompt">
          <i class="iconfont icon-true-login true" v-show="userName.length>2&&userName.length<=6"></i>
          <i class="iconfont icon-false-login false" v-show="userName.length>0&&userName.length<=2||userName.length>6"></i>
        </div>
      </label>
      <label>
        <i class="iconfont icon-mima-login"></i>
        <input type="password" placeholder="请输入密码" v-model="passWord">
        <div class="prompt">
          <i class="iconfont icon-true-login true" v-show="passWord.length>6"></i>
          <i class="iconfont icon-false-login false" v-show="passWord.length>0&&passWord.length<=6"></i>
        </div>
      </label>
      <mt-button
        type="primary"
        @click="showMsg"
        :class="userName.length>2&&userName.length<=6&&passWord.length>6?'login-btn':'login-btn active'"
        :disabled="userName.length>2&&userName.length<=6&&passWord.length>6?false:true"
      >快速登录/注册</mt-button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'loginForm',
  data () {
    return {
      userName: '',
      passWord: '',
      isOut: false
    }
  },
  computed: {
    ...mapState(['loginName', 'backUrl'])
  },
  methods: {
    ...mapMutations(['changeName']),
    showMsg () {
      this.$toast({
        message: '登录成功',
        iconClass: 'iconfont icon-succ-login',
        duration: 1500
      })
      // 把用户名存到localstorage和vuex中
      window.localStorage.setItem('isLogin', this.userName)
      this.changeName(this.userName)
      setTimeout(() => {
        // 1.5s之后跳转到之前的界面
        if (this.backUrl !== '') {
          this.$router.push(this.backUrl)
        } else {
          this.$router.back()
        }
      }, 1500)
    },
    onSubmit () {
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
  .tl-login-form{
    margin-top: 20px;
    >form{
      display: flex;
      flex-direction: column;
      align-items: center;
      >label{
        width: 90%;
        height: 35px;
        border-radius: 20px;
        border: 1px solid #bebebe;
        margin-top: 20px;
        display: flex;
        align-items: center;
        >i{
          color:#f8e372;
          padding-left: 20px;
          padding-right: 20px;
        }
        >input{
          color: #666;
          width: 70%;
        }
        .prompt{
          >i{
            font-size: 23px;
          }
          .true{
            color: green;
          }
          .false{
            color: red;
          }
        }
      }
      .login-btn{
        font-size: 14px;
        width: 90%;
        height: 35px;
        border-radius: 20px;
        margin-top: 25px;
        background: #f8e372;
        color: #666;
      }
      .active{
          background: #bebebe;
          color: #666;
        }
    }
  }
</style>
