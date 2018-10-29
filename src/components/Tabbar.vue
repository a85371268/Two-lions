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
        <badge :count="allCount" v-if="route.name==='cart' && allCount>0"></badge>
        <span>{{route.text}}</span>
      </div>
    </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
import Badge from '@/components/base/badge'
import { mapGetters } from 'vuex'
export default {
  name: 'tabbar',
  components: {
    Badge
  },
  data () {
    return {
      routes: routes.filter(route => route.isTabbar === true)
    }
  },
  computed: {
    ...mapGetters(['allCount'])
  }
}
</script>

<style lang='scss' scoped>
  $main-color: #f8e372;
  .tl-tabbar{
    display: flex;
    height: 100%;
    border-top:1px solid #999;
    >li {
      flex: 1;
      text-align: center;
      position: relative;
      >div{
        height: 100%;
        display: flex;
        flex-direction: column;
        >i{
          font-size: 20px;
          height: 34px;
          line-height: 34px;
          color: #999;
        }
        >span{
          font-size: 12px;
          height: 16px;
          line-height: 16px;
          color: #999;
        }
      }
    }
    .router-link-exact-active,.router-link-active{
      >div{
        >i{
          color:$main-color;
        }
        >span{
          color:$main-color;
        }
      }
    }
  }
</style>
