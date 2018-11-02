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
              :class="homeId===item.id?'active':''"
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
            :class="homeId===item.id?'active':''"
          ></classify-item>
        </div>
      </div>
    </div>

    <!-- tab-container -->
    <div class="tl-home-body-main">
      <div v-if="this.homeId===1">
        <!--今日推荐-->
        <div class="home-page">
          <swipper :banners="banners" />
          <home-grids :grids="grids" />
          <home-rankings :rankings="rankings"></home-rankings>
          <div class="lists">
            <list-title>{{note}}</list-title>
            <div
              class="list-wrapper">
              <product-list
                v-for="item in list"
                :key="item.id"
                :item="item"
                v-if="item.type===1"
              ></product-list>
            </div>
            <mt-button plain class="load-more" v-if="this.isEnd">已经是最后一页啦Σ(*ﾟдﾟﾉ)ﾉ</mt-button>
            <mt-button plain class="load-more" v-else @click="loadMore">点击加载更多Σ(*ﾟдﾟﾉ)ﾉ</mt-button>
          </div>
        </div>
      </div>
      <div class="classify-pages" v-else>
        <div class="classify-wrapper">
          <list-classify-item
            v-for="item in categories"
            :key="item.id"
            :categorie="item"
            v-model="homeId"
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
        <mt-button plain class="load-more" v-if="this.isEnd">已经是最后一页啦Σ(*ﾟдﾟﾉ)ﾉ</mt-button>
        <mt-button plain class="load-more" v-else @click="loadMore">点击加载更多Σ(*ﾟдﾟﾉ)ﾉ</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from '../components/List/ListHeader'
import ProductList from '@/components/List/ListItem'
import ListClassifyItem from '@/components/List/Item'
import {
  Swipper,
  HomeGrids,
  ListTitle,
  HomeRankings,
  ClassifyItem
} from '@/components/Home'
import {mapMutations, mapState} from 'vuex'

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
      tabs: [],
      banners: [],
      grids: [],
      rankings: [],
      list: [],
      note: '',
      nextIndex: 0,
      isEnd: false,
      categories: [],
      classfiyTabs: [],
      showClassify: false,
      data: []
    }
  },
  mounted () {
    this.$http.default.axios.all([
      this.$http.getHomeTabbar(),
      this.$http.getHomeData(this.homeId)
    ]).then(this.$http.default.axios.spread((userResp, reposResp) => {
      this.tabs = userResp.list
      this.banners = reposResp.banners
      this.grids = reposResp.gridsV2
      this.rankings = reposResp.topList
      this.note = reposResp.note
      this.classfiyTabs = userResp.list.filter(item => item.name !== '今日推荐')
      this.categories = reposResp.categories
      this.list = reposResp.items.list
    }))
  },
  methods: {
    ...mapMutations(['changeHomeId']),
    goClassify (id) {
      this.nextIndex = 0
      this.isEnd = false
      this.changeHomeId(id)
      this.$http.getHomeData(id)
        .then(resp => {
          this.banners = resp.banners
          this.grids = resp.gridsV2
          this.rankings = resp.topList
          this.categories = resp.categories
          this.list = resp.items.list
          this.note = resp.note
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.showClassify = false
        })
    },
    loadMore () {
      // 此处请求下一组数据
      this.nextIndex += 30
      this.$http.getHomeMore(this.homeId, this.nextIndex)
        .then(resp => {
          this.isEnd = resp.isEnd
          const newList = this.list.concat(resp.list)
          this.list = newList
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapState(['homeId'])
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
          width: 100%;
          background: #f8e372;
          opacity: .8;
          border: 0;
          font-size: 13px;
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
          box-shadow: 0px 3px 15px -1px #bebebe;
        }
        .list-wrapper{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .load-more{
          width: 100%;
          background: #f8e372;
          opacity: .8;
          border: 0;
          font-size: 13px;
        }
      }
    }
  }
</style>
