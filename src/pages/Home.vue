<template>
  <div class="tl-home-body">
    <div class="tl-home-body-headerWrapper">
      <home-header></home-header>
      <div class="tl-home-body-tabbar">
        <mt-navbar v-model="selected">
          <mt-tab-item
            v-for="tab in tabs"
            :key="tab.id"
            :id="tab.id.toString()"
          >
            {{tab.name}}
          </mt-tab-item>
        </mt-navbar>
      </div>
    </div>

    <!-- tab-container -->
    <div class="tl-home-body-main">
      <mt-tab-container v-model="selected">
        <!--今日推荐-->
        <mt-tab-container-item id="1">
          <swipper :banners="banners" />
          <home-grids :grids="grids" />
          <home-rankings :rankings="rankings"></home-rankings>
          <div class="lists">
            <list-title>每日推荐，小编精选</list-title>
            <div
              class="list-wrapper"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="loading"
              infinite-scroll-distance="10">
              <product-list
                v-for="item in list"
                :key="item.id"
                :item="item"
                v-if="item.type===1"
              ></product-list>
            </div>
            <div v-show="this.loading" class="load-more">努力加载中…</div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2" class="classify-pages">
          <div class="classify">
            <classify-item
              v-for="item in categorie"
              :key="item.id"
              :categorie="categorie"
            ></classify-item>
          </div>
          <div class="classify-title"></div>
          <div class="classify-list"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 30" :key="n" :title="'护理 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell v-for="n in 6" :key="n" :title="'周边 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import HomeHeader from '../components/Home/HomeHeader'
import Swipper from '@/components/Home/HomeSwipper'
import HomeGrids from '@/components/Home/HomeGrids'
import ProductList from '@/components/List/ListItem'
import ListTitle from '@/components/Home/HomeListTitle'
import HomeRankings from '@/components/Home/HomeRankings'
import ClassifyItem from '@/components/List/Item'
// import { getHomeData } from '@/axios'

export default {
  name: 'home',
  components: {
    HomeHeader,
    Swipper,
    HomeGrids,
    HomeRankings,
    ListTitle,
    ProductList,
    ClassifyItem
  },
  data () {
    return {
      selected: '1',
      tabs: [],
      banners: [],
      grids: [],
      rankings: [],
      list: [],
      nextIndex: 0,
      isEnd: false,
      loading: false,
      categorie: []
    }
  },
  updated () {
    console.log(this.selected)
  },
  mounted () {
    this.$http.default.axios.all([
      this.$http.getHomeTabbar(),
      this.$http.getHomeData(this.selected)
    ]).then(this.$http.default.axios.spread((userResp, reposResp) => {
      const userData = userResp.data.data
      const reposData = reposResp.data.data
      this.tabs = userData.list
      this.banners = reposData.banners
      this.grids = reposData.gridsV2
      this.rankings = reposData.topList
    }))
  },
  methods: {
    loadMore () {
      this.loading = true
      // 此处请求下一组数据
      setTimeout(() => {
        this.$http.getHomeMore(this.nextIndex)
          .then(resp => {
            if (resp.data.code === 200) {
              this.nextIndex = resp.data.data.nextIndex
              this.isEnd = resp.data.data.isEnd
              const newList = this.list.concat(resp.data.data.list)
              this.list = newList
            }
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => { this.loading = false })
      }, 600)
    }
  }
}
</script>

<style lang='scss' scoped>
  .tl-home-body{
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    &-headerWrapper{

    }
    &-tabbar{
      width: 100%;
      background: #f8e372;
      overflow: auto;
      .mint-navbar{
        background: #f8e372;
        height: 40px;
        .mint-tab-item{
          color: #666;
          white-space:nowrap;
          margin-left: 15px;
          margin-right: 15px;
          float: left;
          &-label{
            font-size: 14px !important;
          }
        }
        .is-selected{
          border-bottom:5px solid black;
          color: black;
        }
      }
    }
    &-main{
      flex: 1;
      overflow: auto;
      .mint-tab-container{
        &-wrap{
          .lists{
            .list-wrapper{
              display: flex;
              flex-wrap: wrap;
            }
            .load-more{
              text-align: center;
              line-height: 30px;
              height: 30px;
              color: #ed908e;
            }
          }
        }
      }
      .classify-pages{
        display: flex;
        flex-wrap: wrap;
      }
    }

  }
</style>
