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
      categorieName: '',
      cacheData: window.localStorage.getItem('tl-cachData') ? JSON.parse(window.localStorage.getItem('tl-cachData')) : []
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
      if (this.cacheData.some(item => id === item.id)) {
        const newArr = this.cacheData.filter(item => item.id === id)
        this.categories = newArr[0].data
        this.categorieName = newArr[0].categorieName
      } else {
        this.$http.getItem(id).then(resp => {
          console.log(resp)
          this.categories = resp.categories
          this.categorieName = resp.category.name
          this.cacheData.push({id: id, data: resp.categories, categorieName: resp.category.name})
          window.localStorage.setItem('tl-cachData', JSON.stringify(this.cacheData))
        }).catch(err => console.error(err))
      }
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
