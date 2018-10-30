<template>
  <div class="tl-home-body">
    <div class="tl-home-body-headerWrapper">
      <home-header></home-header>
      <div class="tl-home-body-tabbar">
        <div class="tl-home-body-tabbar-wrapper">
          <ul class="body-tabbar">
            <li
              v-for="item in tabs"
              :key="item.id"
              @click="goClassify(item.id)"
              :class="selected===item.id?'active':''"
            >{{item.name}}</li>
          </ul>
        </div>
        <span class="navbar-btn" @click="showClassify=!showClassify"></span>
        <div class="navbar-title" v-show="showClassify">全部分类</div>
        <div class="navbar" v-show="showClassify">
          <classify-item
            v-for="item in tabs"
            :key="item.id"
            :tabs="item"
            @set-id="goClassify"
            :class="selected===item.id?'active':''"
          ></classify-item>
        </div>
      </div>
    </div>

    <!-- tab-container -->
    <div class="tl-home-body-main">
      <div v-if="selected===1">
        <!--今日推荐-->
        <div class="home-page">
          <swipper :banners="banners" />
          <home-grids :grids="grids" />
          <home-rankings :rankings="rankings"></home-rankings>
          <div class="lists">
            <list-title>{{note}}</list-title>
            <div
              class="list-wrapper">
              <!-- v-infinite-scroll="loadMore"
              infinite-scroll-disabled="loading"
              infinite-scroll-distance="10" -->
              <product-list
                v-for="item in list"
                :key="item.id"
                :item="item"
                v-if="item.type===1"
              ></product-list>
            </div>
            <div v-show="this.loading" class="load-more">努力加载中…</div>
          </div>
        </div>
        <!-- <mt-tab-container-item id="4">
          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 30" :key="n" :title="'护理 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell v-for="n in 6" :key="n" :title="'周边 ' + n" />
        </mt-tab-container-item> -->
      </div>
      <div class="classify-pages" v-else>
        <div class="classify-wrapper">
          <list-classify-item
            v-for="item in categories"
            :key="item.id"
            :categorie="item"
            v-model="selected"
          ></list-classify-item>
        </div>
        <div
          class="list-wrapper">
          <product-list
            v-for="item in list"
            :key="item.id"
            :item="item"
          ></product-list>
        </div>
      </div>
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
import ClassifyItem from '@/components/Home/HomeClassifyItem'
import ListClassifyItem from '@/components/List/Item'
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
    ClassifyItem,
    ListClassifyItem
  },
  data () {
    return {
      selected: 1,
      tabs: [],
      banners: [],
      grids: [],
      rankings: [],
      list: [],
      note: '',
      nextIndex: 0,
      isEnd: false,
      loading: false,
      categories: [],
      classfiyTabs: [],
      showClassify: false,
      data: []
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
      const userData = userResp
      const reposData = reposResp
      this.tabs = userData.list
      this.banners = reposData.banners
      this.grids = reposData.gridsV2
      this.rankings = reposData.topList
      this.note = reposData.note
      this.classfiyTabs = userData.list.filter(item => item.name !== '今日推荐')
      this.categories = reposData.categories
      this.list = reposData.items.list
    }))
  },
  methods: {
    setSelected (id) {
      this.selected = id
    },
    goClassify (id) {
      this.selected = id
      this.$http.getHomeData(id)
        .then(resp => {
          this.categories = resp.categories
          this.list = resp.items.list
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.showClassify = false
        })
    },
    loadHooo () {
      console.log(123)
    },
    loadMore () {
      console.log(456)
      this.loading = true
      // 此处请求下一组数据
      setTimeout(() => {
        this.$http.getHomeMore(this.nextIndex)
          .then(resp => {
            this.nextIndex = resp.nextIndex
            this.isEnd = resp.isEnd
            const newList = this.list.concat(resp.list)
            this.list = newList
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
      display: flex;
      justify-content: space-between;
      position: relative;
      &-wrapper{
        width: 90%;
        overflow-y: hidden;
        >ul{
          display: flex;
          height: 40px;
          >li{
            white-space: nowrap;
            margin-left: 12px;
            margin-right: 12px;
            line-height: 40px;
            font-size: 14px;
            color: #666;
          }
          .active{
            color: black;
            border-bottom: 2px solid black;
          }
        }
      }
      .navbar-btn{
        display: inline-block;
        background:url(//img6.lukou.com/js/img/goto-search.479cb6c.png) center center no-repeat;
        background-size: 50% 50%;
        flex: 1;
        z-index: 1;
      }
      .navbar-title{
        width: 92%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: white;
        text-align: center;
        line-height: 40px;
        background: #f8e372;
        font-size: 14px;
        color: #666;
      }
      .navbar{
        width: 100%;
        background: white;
        position: absolute;
        top: 38px;
        left: 0;
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
      }

    }
    &-main{
      flex: 1;
      overflow-x: hidden;
      .lists{
        .list-wrapper{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .load-more{
          text-align: center;
          line-height: 30px;
          height: 30px;
          color: #ed908e;
        }
      }
      .classify-pages{
        .classify-wrapper{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          background: white;
          margin-bottom: 20px;
          border-bottom: 1px solid #999;
        }
        .list-wrapper{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      }
    }
  }
</style>
