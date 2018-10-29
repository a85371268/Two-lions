<template>
  <div class="tl-search-body">
    <list-header :goback="true" :isInput="true"></list-header>
    <div class="tl-search-clearhistory">
      清空搜索历史
    </div>
  </div>
</template>

<script>
import ListHeader from '../components/List/ListHeader'

export default {
  name: 'search',
  components: {
    ListHeader
  }
}
</script>

<style lang='scss' scoped>
.tl-search-body{
  .tl-search-clearhistory{
    font-size: 12px;
    height:30px;
    border:1px solid #dfdfdf;
    width:95%;
    margin:10px auto;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
  }
}
</style>
