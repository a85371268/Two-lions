<template>
  <div class="body tl-cart-body">
    <div class="tl-cart-header">
      <mt-header title="购物车">
      </mt-header>
    </div>
    <div class="tl-cart-main" v-if="cart.length>0">
      <cart-item
      v-for="item in cart"
      :key="item.id"
      :item="item"
      ></cart-item>
    </div>
    <div class="tl-cart-main" v-else>
        <div class="tl-cart-null">
          <i class="icon iconfont icon-cart-mine" @click="goToList"></i>
          点击请选择加入购物车
        </div>
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
  },
  methods: {
    goToList () {
      this.$router.push('/kind')
    }
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
    background-color: #fff;
    .tl-cart-null{
      height:100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      color:#666;
      i{
        font-size: 30px;
        color:#f8e372;
      }
    }
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
