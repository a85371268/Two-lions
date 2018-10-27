<template>
  <ul class="tl-tabbar">
    <router-link
      tag="li"
      v-for="route in routes"
      :key='route.path'
      :to='route.path'
    >
      <div>
        <i
        :class="$route.path===route.path?`icon iconfont icon-${route.name}-active`:`icon iconfont icon-${route.name}-normal`"
        ></i>
        <span>{{route.text}}</span>
      </div>
    </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'tabbar',
  data () {
    return {
      routes: routes.filter(route => route.isTabbar === true)
    }
  }
}
</script>

<style lang='scss' scoped>
  .tl-tabbar{
    display: flex;
    height: 52px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    border-top:1px solid #999;
    >li {
      flex: 1;
      text-align: center;
      >div{
        height: 52px;
        display: flex;
        flex-direction: column;
        >i{
          font-size: 20px;
          padding-top: 5px;
          color: #999;
        }
        >span{
          font-size: 12px;
          color: #999;
          margin-top:5px;
        }
      }
    }
    .router-link-exact-active,.router-link-active{
      >div{
        >i{
          color:#f8e372;
        }
        >span{
          color:#f8e372;
        }
      }
    }
  }
</style>
