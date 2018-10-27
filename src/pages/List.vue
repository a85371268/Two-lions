<template>
  <div class="tl-list-body">
    <list-header></list-header>
    <div class="tl-list-main">
      <list-left @gitsubItem="gitsubItem"></list-left>
      <list-right :categories="categories"></list-right>
    </div>
  </div>
</template>

<script>
import ListHeader from '../components/List/ListHeader'
import ListLeft from '../components/List/ListLeft'
import ListRight from '../components/List/ListRight'
import { getItem } from '@/axios'

export default {
  name: 'list',
  components: {
    ListHeader,
    ListLeft,
    ListRight
  },
  data () {
    return {
      categories: []
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
  }
}
</style>
