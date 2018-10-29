<template>
  <div class="tl-list-body body">
    <list-header></list-header>
    <div class="tl-list-main">
      <list-left @gitsubItem="gitsubItem"></list-left>
      <list-right :categories="categories" :categorieName='categorieName'></list-right>
    </div>
  </div>
</template>

<script>
import ListHeader from '../components/List/ListHeader'
import ListLeft from '../components/List/ListLeft'
import ListRight from '../components/List/ListRight'

export default {
  name: 'kind',
  components: {
    ListHeader,
    ListLeft,
    ListRight
  },
  data () {
    return {
      categories: [],
      categorieName: ''
    }
  },
  mounted () {
    this.geData(2)
  },
  methods: {
    gitsubItem (id) {
      this.geData(id)
    },
    geData (id) {
      this.$http.getItem(id).then(resp => {
        if (resp.data.code === 200) {
          this.categories = resp.data.data.categories
          this.categorieName = resp.data.data.category.name
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
  .tl-list-main{
    flex:1;
    // overflow-y: auto;
    display: flex;
  }
}
</style>
