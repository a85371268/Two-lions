<template>
  <div class="tl-cart-cartitem">
    <check-box :id="item.id" :isChecked="item.isChecked"></check-box>
    <img :src="item.img" alt="">
    <div class="tl-cart-cartitem-info">
      <p>{{item.title}}</p>
      <div class="tl-cart-cartitem-price">
        <span>￥{{item.price}}</span>
        <div class="tl-cart-cartitem-count">
          <span @click="reduce(item.id)">-</span>
          <span>{{item.count}}</span>
          <span @click="addCount(item.id)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/base/CheckBox'
import { mapMutations } from 'vuex'

export default {
  name: 'cartItem',
  props: ['item'],
  components: {
    CheckBox
  },
  methods: {
    reduce () {
      if (this.item.count === 1) {
        this.$messagebox.confirm('你确定要删除此商品吗?').then(action => {
          this.reduceCount(this.item.id)
          this.$toast({
            message: '成功删除改商品！',
            iconClass: 'icon iconfont icon-chenggong',
            duration: 800
          })
        }).catch(err => {
          err = '取消了'
          this.$toast({
            message: err,
            iconClass: 'icon iconfont icon-shibai',
            duration: 800
          })
        })
      } else {
        this.reduceCount(this.item.id)
      }
    },
    ...mapMutations(['reduceCount', 'addCount'])
  }
}
</script>

<style lang='scss' scoped>
.tl-cart-cartitem{
  padding-bottom: 5px;
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
