<template>
  <div class="body tl-cart-body">
    <div class="tl-cart-header">
      <mt-header title="购物车">
      </mt-header>
    </div>
    <div class="tl-cart-main">
      <cart-item
      v-for="item in cart"
      :key="item.id"
      :item="item"
      ></cart-item>
    </div>
    <div class="tl-cart-btn">
      <check-box title="全选"></check-box>
      <div class="tl-cart-allprice">总价格：￥{{allPrice.toFixed(2)}}</div>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/base/CheckBox'
import CartItem from '@/components/Cart/cartItem'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'cart',
  components: {
    CartItem,
    CheckBox
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['allPrice'])
  }
}
</script>

<style lang='scss' scoped>
.tl-cart-body{
  height:100%;
  background-color: #eee;
  .tl-cart-header{
    height:40px;
    .mint-header{
      background-color: #f8e372;
    }
  }
  .tl-cart-main{
    flex:1;
    overflow-y: auto;
  }
  .tl-cart-btn{
    height:40px;
    display: flex;
    background-color: #fff;
    .tl-cart-allprice{
      width:150px;
      font-size: 12px;
      text-align: center;
      line-height: 40px;
      color:#666;
    }
    button{
      height:30px;
      flex: 1;
      background-color: #f50;
      border:0;
      color:#fff;
    }
  }
}
</style>
