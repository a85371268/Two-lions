<template>
  <div class="tl-cart-cartitem">
    <img :src="item.img" alt="">
    <div class="tl-cart-cartitem-info">
      <p>{{item.title}}</p>
      <div class="tl-cart-cartitem-price">
        <span>￥{{item.price}}</span>
        <div class="tl-cart-cartitem-count">
          <span @click="reduceCount(item.id)">-</span>
          <span>{{item.count}}</span>
          <span @click="addCount(item.id)">+</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'cartItem',
  props: ['item'],
  methods: {
    ...mapMutations(['reduceCount', 'addCount'])
  }
}
</script>

<style lang='scss' scoped>
.tl-cart-cartitem{
  height:80px;
  background-color: #fff;
  margin-bottom:10px;
  display: flex;
  img{
    width:80px;
    height:100%;
  }
  .tl-cart-cartitem-info{
    flex:1;
    overflow: hidden;
    margin-left:10px;
    padding-right:10px;
    p{
      font-size: 12px;
      // text-overflow: ellipsis;
      // white-space: nowrap;
      // overflow: hidden;
      color:#666;
      line-height: 23px;
    }
    .tl-cart-cartitem-price{
      display: flex;
      justify-content:space-between;
      span{
        color:#f50;
      }
      .tl-cart-cartitem-count{
        border:1px solid #dfdfdf;
        span{
          color:#666;
          display:inline-block;
          width:20px;
          text-align: center;
        }
        span+span{
          border-left:1px solid #dfdfdf;
        }
      }
    }
  }
}
</style>
