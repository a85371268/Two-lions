<template>
  <div class="tl-list-body body">
    <list-header :goback="true"></list-header>
    <!-- <list-nav></list-nav> -->
    <div class="tl-list-main">
      <list-item v-for="item in itemList" :key='item.id' :item="item"></list-item>
    </div>
  </div>
</template>

<script>
import ListHeader from '../components/List/ListHeader'
import ListItem from '../components/List/ListItem'
import { getItem, getList } from '@/axios'

export default {
  name: 'list',
  components: {
    ListHeader,
    ListItem
  },
  data () {
    return {
      categories: [],
      itemList: []
    }
  },
  methods: {
    gitsubItem (id) {
      getItem(id).then(resp => {
        if (resp.data.code === 200) {
          this.categories = resp.data.data.categories
        }
      }).catch(err => console.error(err))
    }
  },
  mounted () {
    getList(this.$route.params.id).then(resp => {
      if (resp.data.code === 200) {
        this.itemList = resp.data.data.items.list
      }
    }).catch(err => console.error(err))
  }
}
</script>

<style lang='scss' scoped>
$main-color: #f8e372;
.tl-list-body {
  height:100%;
  display: flex;
  flex-direction:column;
  .tl-list-main{
    flex:1;
    // overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    justify-content:space-between;

  }
}
</style>
