<template>
  <div class="mine-item">
    <span><slot></slot></span>
    <i class="iconfont icon-goto-mine"></i>
  </div>
</template>

<script>
export default {
  name: 'mineitem'
}
</script>

<style lang="scss" scoped>
  .mine-item{
    background: white;
    height: 50px;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    border-bottom: 1px solid #bebebe;
    font-size: 13px;
    >span{
      color: #666;
    }
    >i{
      color: #bebebe;
    }
  }
</style>
