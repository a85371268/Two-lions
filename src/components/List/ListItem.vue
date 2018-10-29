<template>
  <div class="tl-list-item" @click="goDetail">
    <div class="tl-list-item-img">
      <img :src="item.image" alt="">
    </div>
    <div class="tl-list-item-des">{{item.title}}</div>
    <div class="tl-list-item-email"><span>包邮</span></div>
    <div class="tl-list-item-price">
      <span class="price">¥{{item.price}}</span><span>{{item.saleNum}}人购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: ['item'],
  methods: {
    goDetail () {
      this.$router.push(`/detail/${this.item.id}`)
    }
  }
}
</script>

<style lang='scss' scoped>
.tl-list-item{
  width:49%;
  height:230px;
  margin-bottom:8px;
  background-color: #fff;
  .tl-list-item-img{
    height:150px;
    img{
      width:100%;
      height:100%;
    }
  }
  .tl-list-item-des{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    padding: 0 10px;
    line-height: 24px;
    color:#999;
  }
  .tl-list-item-email{
    font-size:12px;
    color:#999;
    line-height: 28px;
    padding:0 10px;
    height:28px;
    span{
      float: right;
    }
  }
  .tl-list-item-price{
    padding:0 10px;
    >.price{
      color:#f50;
      font-size: 14px;
      margin-right:10px;
    }
    span{
      color:#999;
      font-size: 12px
    }
  }
}
</style>
