<template>
  <div class="list-title">
    <span class="line"></span>
    <span class="text">
      <slot></slot>
    </span>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  name: 'listtitle'
}
</script>

<style lang="scss" scoped>
  .list-title{
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    color: #666;
    .line{
      height: 1px;
      display: inline-block;
      width: 60px;
      background: #f8e372;
      vertical-align: middle;
    }
    .text{
      font-size: 12px;
      padding: 0 15px;
    }
  }
</style>
