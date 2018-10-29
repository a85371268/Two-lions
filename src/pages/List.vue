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
      itemList: []
    }
  },
  methods: {
    gitsubItem (id) {
      this.$http.getItem(id).then(resp => {
        if (resp.data.code === 200) {
          this.categories = resp.data.data.categories
        }
      }).catch(err => console.error(err))
    }
  },
  mounted () {
    this.$http.getList(this.$route.params.id).then(resp => {
      if (resp.data.code === 200) {
        this.itemList = resp.data.data.items.list
      }
    }).catch(err => console.error(err))
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
