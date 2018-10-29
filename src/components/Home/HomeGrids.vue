<template>
  <div class="grids">
    <div class="grid" v-for="item in grids" :key="item.id">
      <div class="grid-msg">
        <p class="title">{{item.title}}</p>
        <p class="text">{{item.text}}</p>
      </div>
      <img
        class="grid-img"
        :src="item.imageUrl"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'homegrids',
  props: ['grids']
}
</script>

<style lang="scss" scoped>
  .grids{
    width: 100%;
    height: 145px;
    border-top:1px solid #999;
    border-bottom: 1px solid #999;
    background: white;
    margin-bottom: 10px;
    .grid{
      float: left;
      height: 50%;
      width: 50%;
      padding: 8px;
      position: relative;
      &-msg{
        padding-left: 10px;
        .title{
          font-size: 14px;
          color: #634b24;
          margin-top: 5px;
        }
        .text{
          color: #f1a263;
          font-size: 12px;
          margin-top: 5px;
        }
      }
      &-img{
        width: 56px;
        height: 56px;
        position: absolute;
        left:60%;
        bottom: 10%;
      }
      &:first-child{
        height: 100%;
        border-right: 1px solid #bebebe;
        .grid-img{
          width: 68px;
          height: 68px;
          position: absolute;
          left: 50%;
          bottom: 10%;
          margin-left: -34px;
        }
      }
      &:nth-child(2){
        border-bottom: 1px solid #bebebe;
      }
    }
  }
</style>
