<template>
  <div class="tl-mine-top-bgbox">
    <div class="tl-mine-top-bgbox-title" v-if="this.loginName">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540897741903&di=4dca31c8b7834b9f2401b28a8201d421&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201507%2F18%2F20150718193340_SNywm.thumb.700_0.jpeg">
      <p @click="goLogout">{{loginName}}</p>
    </div>
    <div class="tl-mine-top-bgbox-title"  v-else @click="goLogin">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540897741903&di=4dca31c8b7834b9f2401b28a8201d421&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201507%2F18%2F20150718193340_SNywm.thumb.700_0.jpeg">
      <p @click="goLogin">点击登陆</p>
    </div>
    <div class="tl-mine-top-bgbox-links">
      <links-item v-for="msg in msgs" :key="msg.icon" :msg="msg"></links-item>
    </div>
  </div>
</template>

<script>
import LinksItem from '@/components/Mine/LinksItem'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mineBgbox',
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    goLogout () {
      this.$messagebox.confirm(`确定退出登录么？`, '退出登录')
        .then(() => {
          // 删除localstorage，并且删除vuex中的数据
          window.localStorage.removeItem('isLogin')
          this.changeName('')
        })
        .catch(() => {
          console.log('用户取消退出登陆')
        })
    },
    ...mapMutations(['changeName'])
  },
  components: {
    LinksItem
  },
  computed: {
    ...mapState(['loginName'])
  },
  data () {
    return {
      msgs: [
        {
          text: '我的订单',
          icon: 'dingdan'
        },
        {
          text: '购物车',
          icon: 'cart'
        },
        {
          text: '收藏商品',
          icon: 'shoucang'
        },
        {
          text: '最近浏览',
          icon: 'eye'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .tl-mine-top-bgbox{
    position: absolute;
    width: 90%;
    height: 100%;
    top: 50%;
    background: white;
    border-radius: 8px;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-shadow:0px 5px 22px rgba(204, 204,204, 0.6);
    &-title{
      width: 23%;
      height: 0;
      padding-top: 23%;
      background: white;
      position: absolute;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      border-radius: 50%;
      >img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 8%;
        border-radius: 50%;
      }
      >p{
        font-size: 13px;
        text-align: center;
        margin-top: 5px;
        color: #666;
      }
    }
    &-links{
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom: 15%;
      width: 100%;
    }
  }
</style>
