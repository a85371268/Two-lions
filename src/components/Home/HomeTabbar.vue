<template>
  <div class="tl-home-body-tabbar">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">今日推荐</mt-tab-item>
      <mt-tab-item id="2">男装</mt-tab-item>
      <mt-tab-item id="3">男鞋</mt-tab-item>
      <mt-tab-item id="4">个人护理</mt-tab-item>
      <mt-tab-item id="5">手机周边</mt-tab-item>
      <mt-tab-item id="6">男装</mt-tab-item>
      <mt-tab-item id="7">男鞋</mt-tab-item>
      <mt-tab-item id="8">个人护理</mt-tab-item>
      <mt-tab-item id="9">手机周边</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  name: 'homeTabbar'
}
</script>

<style lang="scss" scoped>
  .tl-home-body-tabbar{
    width: 100%;
    overflow: auto;
    .mint-navbar{
      display: flex;
      width: 800px;
      background: #f8e372;
      .mint-tab-item{
        color: #666;
        width: 28%;

        &-label{
          font-size: 14px !important;
        }
      }
      .is-selected{
        border-bottom:5px solid black;
        color: black;
      }
    }
  }
</style>
