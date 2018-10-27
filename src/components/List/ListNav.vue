<template>
<div class="tl-list-nav">
  <div class="tl-list-nav-item active">默认排序</div>
  <div class="tl-list-nav-item">价格最低</div>
  <div class="tl-list-nav-item">销量最高</div>
</div>
</template>

<script>
export default {
  name: 'listNav'
}
</script>

<style lang='scss' scoped>
.tl-list-nav{
  display: flex;
  height:40px;
  line-height: 40px;
  box-shadow: 1px 2px 5px hsla(0,11%,79%,.5);
  .tl-list-nav-item{
    flex:1;
    text-align: center;
    font-size: 12px;
    color:#666;
  }
  .active{
    color:#f50;
  }
}
</style>
