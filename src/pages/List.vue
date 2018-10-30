<template>
  <div class="tl-list-body body">
    <list-header :goback="true"></list-header>
    <list-nav @sortList="sortList" :status="status"></list-nav>
    <div class="tl-list-main">
      <list-item v-for="item in itemList" :key='item.id' :item="item"></list-item>
    </div>
  </div>
</template>

<script>
import ListHeader from '../components/List/ListHeader'
import ListNav from '@/components/List/ListNav'
import ListItem from '../components/List/ListItem'

export default {
  name: 'list',
  components: {
    ListHeader,
    ListNav,
    ListItem
  },
  data () {
    return {
      categories: [],
      itemList: [],
      status: 0,
      isList: this.$route.query.word
    }
  },
  methods: {
    gitsubItem (id) {
      this.$http.getItem(id).then(resp => {
        this.categories = resp.categories
      }).catch(err => console.error(err))
    },
    sortList (sort) {
      if (this.isList) {
        this.getSearch(sort)
      } else {
        this.getList(sort)
      }
    },
    getSearch (sort) {
      this.$http.getSearch(this.$route.query.word, sort).then(resp => {
        this.itemList = resp.list
      }).catch(err => console.error(err))
    },
    getList (sort) {
      this.$http.getList(this.$route.params.id, sort).then(resp => {
        this.itemList = resp.items.list
      }).catch(err => console.error(err))
    }
  },
  mounted () {
    if (!this.isList) {
      this.getList(0)
    } else {
      this.getSearch(0)
    }
  }
}
</script>

<style lang='scss' scoped>
.tl-list-body{
  height:100%;
  background-color: #eee;
  .tl-list-main{
    flex:1;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    justify-content:space-between;

  }
}
</style>
