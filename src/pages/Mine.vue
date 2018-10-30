<template>
  <div class="tl-mine-body">
    <div class="tl-mine-top">
      <div class="tl-mine-top-icon">
        <i class="iconfont icon-lingdang"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
      <div class="tl-mine-top-bgbox">
        <div class="tl-mine-top-bgbox-title">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540897741903&di=4dca31c8b7834b9f2401b28a8201d421&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201507%2F18%2F20150718193340_SNywm.thumb.700_0.jpeg">
          <p>点击登陆</p>
        </div>
        <div class="tl-mine-top-bgbox-links">
          <div class="links-item">
            <i class="iconfont icon-dingdan-mine"></i>
            <span>我的订单</span>
          </div>
          <div class="links-item">
            <i class="iconfont icon-cart-mine"></i>
            <span>购物车</span>
          </div>
          <div class="links-item">
            <i class="iconfont icon-shoucang-mine"></i>
            <span>收藏商品</span>
          </div>
          <div class="links-item">
            <i class="iconfont icon-eye-mine"></i>
            <span>最近浏览</span>
          </div>
        </div>
      </div>
    </div>
    <div class="null-box"></div>
    <div class="tl-mine-middle">
      <mine-item>签到养竹笋</mine-item>
    </div>
    <div class="tl-mine-bottom">
      <mine-item v-for="text in itemText" :key="text" class="bottom-item">{{text}}</mine-item>
    </div>
  </div>
</template>

<script>
import MineItem from '@/components/Mine/MineItem'
export default {
  name: 'mine',
  components: {
    MineItem
  },
  data () {
    return {
      itemText: [
        '推荐APP给小伙伴',
        '求打分给好评啦~',
        '帮助与反馈',
        '关于熊猫优选'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .tl-mine-body{
    height: 100%;
    .null-box{
    height: 13%;
    background: #f5f5f5;
  }
  }
.tl-mine{
  &-top{
    height: 26%;
    background: #f8e372;
    position: relative;
    &-icon{
      text-align: right;
      padding-top: 30px;
      >i{
        margin-right: 20px;
        font-size: 25px;
      }
    }
    &-bgbox{
      position: absolute;
      width: 90%;
      height: 100%;
      top: 50%;
      background: white;
      border-radius: 8px;
      left: 0;
      right: 0;
      margin: 0 auto;
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
          font-size: 12px;
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
      }
    }
  }
  &-middle{
    background: #f5f5f5;
    padding-top:10px;
    padding-bottom: 10px;
  }
  &-bottom{
    background: white;
    .bottom-item{
      border-color: #f5f5f5;
    }
  }
}
</style>
