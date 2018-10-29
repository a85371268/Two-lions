<template>
  <div class="tl-home-body">
    <div class="tl-home-body-headerWrapper">
      <home-header></home-header>
      <div class="tl-home-body-tabbar">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">今日推荐</mt-tab-item>
          <mt-tab-item id="2">男装</mt-tab-item>
          <mt-tab-item id="3">男鞋</mt-tab-item>
          <mt-tab-item id="4">个人护理</mt-tab-item>
          <mt-tab-item id="5">手机周边</mt-tab-item>
          <mt-tab-item id="6">男装</mt-tab-item>
          <mt-tab-item id="7">男鞋</mt-tab-item>
          <mt-tab-item id="8">个人护理</mt-tab-item>
          <mt-tab-item id="9">手机周边</mt-tab-item>
        </mt-navbar>
      </div>
    </div>

    <!-- tab-container -->
    <div class="tl-home-body-main">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <swipper :banners="banners" />
          <home-grids :grids="grids" />
          <home-rankings :rankings="rankings"></home-rankings>
          <div class="lists">
            <div class="list-title">
              <span class="line"></span>
              <span class="text">小编精选，每日更新</span>
              <span class="line"></span>
            </div>
            <div class="list-wrapper">
              <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <li v-for="item in list" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
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
import HomeRankings from '@/components/Home/HomeRankings'
import { getHomeData } from '@/axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    Swipper,
    HomeGrids,
    HomeRankings
  },
  data () {
    return {
      selected: '1',
      tabs: [],
      banners: [],
      grids: [],
      rankings: [],
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  mounted () {
    // getHomeTabbar()
    //   .tnen(resp => {
    //     if (resp.data.code === 200) {
    //       console.log(resp.data)
    //       const data = resp.data.data
    //       this.tabs = data.list
    //     }
    //   })
    //   .catch(err => console.error(err))

    getHomeData()
      .then(resp => {
        if (resp.data.code === 200) {
          const data = resp.data.data
          this.banners = data.banners
          this.grids = data.gridsV2
          this.rankings = data.topList
        }
      })
      .catch(err => console.error(err))
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2500)
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
      overflow: auto;
      .mint-navbar{
        display: flex;
        width: 800px;
        background: #f8e372;
        .mint-tab-item{
          color: #666;
          width: 28%;

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
            .list-title{
              height: 40px;
              line-height: 40px;
              text-align: center;
              vertical-align: middle;
              color: #666;
              .line{
                height: 1px;
                display: inline-block;
                width: 60px;
                background: #f8e372;
                vertical-align: middle;
              }
              .text{
                font-size: 12px;
                padding: 0 15px;
              }
            }
          }
        }
      }
    }

  }
</style>
