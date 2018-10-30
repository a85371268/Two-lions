<template>
  <div class="tl-search-body">
    <list-header :goback="true" :isInput="true"></list-header>
    <h1><span>搜索历史</span><i class="icon iconfont icon-ziyuan" @click="clearHistory"></i></h1>
    <sarch-item></sarch-item>
  </div>
</template>

<script>
import ListHeader from '../components/List/ListHeader'
import SarchItem from '../components/Search/searchItem'
import { mapMutations } from 'vuex'

export default {
  name: 'search',
  components: {
    ListHeader,
    SarchItem
  },
  methods: {
    ...mapMutations(['clearHistory'])
  }
}
</script>

<style lang='scss' scoped>
.tl-search-body{
  h1{
    font-size: 12px;
    color:#555;
    padding:0 15px;
    margin-top:15px;
    display: flex;
    justify-content: space-between
  }
}
</style>
