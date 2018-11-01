<template>
  <div class="tl-list-body body">
    <list-header :goback="true"></list-header>
    <list-nav @sortList="sortList" :status="status"></list-nav>
    <div class="tl-list-main" @scroll="loading">
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
      sort: 0,
      pageIndex: 40,
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
      this.sort = sort
      this.itemList = []
      if (this.isList) {
        this.getSearch()
      } else {
        this.getList()
      }
    },
    getSearch () {
      this.$http.getSearch(this.$route.query.word, this.pageIndex, this.sort).then(resp => {
        resp.list.map(item => {
          this.itemList.push(item)
          return item
        })
      }).catch(err => console.error(err))
    },
    getList () {
      this.$http.getList(this.$route.params.id, this.pageIndex, this.sort).then(resp => {
        resp.items.list.map(item => {
          this.itemList.push(item)
          return item
        })
      }).catch(err => console.error(err))
    },
    loading (e) {
      if (parseInt(e.target.scrollTop) - (e.target.scrollHeight - e.target.offsetHeight) > -2) {
        this.pageIndex += 40
        if (this.pageIndex < 120) {
          if (this.isList) {
            this.getSearch()
          } else {
            this.getList()
          }
        }
      }
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
