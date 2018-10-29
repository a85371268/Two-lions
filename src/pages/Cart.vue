<template>
  <div class="body tl-cart-body">
    <div class="tl-cart-header">
      <mt-header title="购物车">
      </mt-header>
    </div>
    <div class="tl-cart-main">
      <cart-item></cart-item>
    </div>
    <div class="tl-cart-btn">
      <div class="tl-cart-allprice">总价格：4564</div>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/Cart/cartItem'
export default {
  name: 'cart',
  components: {
    CartItem
  }
}
</script>

<style lang='scss' scoped>
.tl-cart-body{
  height:100%;
  .tl-cart-header{
    height:40px;
    .mint-header{
      background-color: #f8e372;
    }
  }
  .tl-cart-main{
    flex:1;
  }
  .tl-cart-btn{
    height:30px;
    display: flex;
    .tl-cart-allprice{
      width:150px;
      font-size: 12px;
      text-align: center;
      line-height: 30px;
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
