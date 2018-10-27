<template>
  <div class="tl-list-body body">
    <list-header></list-header>
    <list-nav></list-nav>
    <div class="tl-list-main">
      <list-item v-for="item in itemList" :key='item.id' :item="item"></list-item>
    </div>
  </div>
</template>

<script>
import ListHeader from '@/components/List/ListHeader'
import ListNav from '@/components/List/ListNav'
import ListItem from '@/components/List/ListItem'
import { getList } from '@/axios'

export default {
  name: 'list',
  components: {
    ListHeader,
    ListNav,
    ListItem
  },
  data () {
    return {
      itemList: []
    }
  },
  mounted () {
    getList(1685).then(resp => {
      if (resp.data.code === 200) {
        this.itemList = resp.data.data.items.list
      }
    }).catch(err => console.error(err))
  }
}
</script>

<style lang='scss' scoped>
.tl-list-body{
  .tl-list-main{
    flex:1;
    display: flex;
    flex-wrap: wrap;

  }
}
</style>
