<template>
<div class="tl-list-main-right">
  <div class="tl-list-main-right-title">
    <span>———</span>{{categorieName}}<span>———</span>
  </div>
  <div class="tl-list-main-right-item">
    <Item
      v-for="categorie in categories"
      :key="categorie.id"
      :categorie="categorie"
      ></Item>
  </div>
</div>
</template>

<script>
import Item from './Item'

export default {
  name: 'ListRight',
  props: ['categories', 'categorieName'],
  components: {
    Item
  }
}
</script>

<style lang='scss' scoped>
.tl-list-main-right{
  flex:1;
  .tl-list-main-right-title{
    height:40px;
    font-size: 12px;
    text-align: center;
    line-height: 40px;
    color:#666;
    span{
      color:#ccc;
      margin:10px;
    }
  }
  .tl-list-main-right-item{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
