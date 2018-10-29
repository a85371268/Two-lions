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
          <div class="grids">
            <div class="grid" v-for="item in grids" :key="item.id">
              <div class="grid-msg">
                <p class="title">{{item.title}}</p>
                <p class="text">{{item.text}}</p>
              </div>
              <img
                class="grid-img"
                :src="item.imageUrl"
              >
            </div>
          </div>
          <div class="rankings">
            <div class="rankings-head">
              <p class="rankings-head-title">每日排行榜</p>
              <span class="rankings-head-all">查看全部  ></span>
            </div>
            <div class="rankings-swipper">
              <div class="rankings-swipper-wrapper">
                <div
                  class="rankings-swipper-wrapper-item"
                  v-for="rank in rankings"
                  :key="rank.id"
                >
                  <div class="item-img">
                    <img
                      :src="rank.image"
                    >
                  </div>
                  <div class="item-title">{{rank.title}}</div>
                  <div class="item-price">
                    <div class="item-price-left">
                      <span>￥</span>
                      <i>{{rank.price}}</i>
                    </div>
                    <div class="item-price-right">{{rank.saleNum}}人已买</div>
                  </div>
                </div>
                <div class="rankings-swipper-wrapper-item">
                  <div class="item-img">
                    <a href="http://localhost:8080/#/kind" class="seeMore">
                      <span class="text">更多商品</span>
                      <br/>
                      <span class="sub-text">see-more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import { getHomeData } from '@/axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    Swipper
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
          .grids{
            width: 100%;
            height: 145px;
            border-top:1px solid #999;
            border-bottom: 1px solid #999;
            background: white;
            margin-bottom: 10px;
            .grid{
              float: left;
              height: 50%;
              width: 50%;
              padding: 8px;
              position: relative;
              &-msg{
                padding-left: 10px;
                .title{
                  font-size: 14px;
                  color: #634b24;
                  margin-top: 5px;
                }
                .text{
                  color: #f1a263;
                  font-size: 12px;
                  margin-top: 5px;
                }
              }
              &-img{
                width: 56px;
                height: 56px;
                position: absolute;
                left:60%;
                bottom: 10%;
              }
              &:first-child{
                height: 100%;
                border-right: 1px solid #bebebe;
                .grid-img{
                  width: 68px;
                  height: 68px;
                  position: absolute;
                  left: 50%;
                  bottom: 10%;
                  margin-left: -34px;
                }
              }
              &:nth-child(2){
                border-bottom: 1px solid #bebebe;
              }
            }
          }
          .rankings{
            background: white;
            &-head{
              height: 35px;
              line-height: 35px;
              padding: 0 10px;
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              color: #666;
              >span{
                color: #bebebe;
                margin-right: 10px;
              }
            }
            &-swipper{
              height: 163px;
              &-wrapper{
                width: 100%;
                height: 100%;
                overflow-y: hidden;
                display: flex;
                &-item{
                  width: 105px;
                  margin-left: 10px;
                  .item{
                    &-img{
                      width:105px;
                      height: 105px;
                      border: 1px solid #bebebe;
                      >img{
                        width: 100%;
                        height: 100%;
                      }
                      .seeMore{
                        display: block;
                        width: 100%;
                        height: 100%;
                        padding-top: 24px;
                        text-align: center;
                        .text{
                          border-bottom: 1px solid #bebebe;
                          font-size: 15px;
                          padding-bottom: 3px;
                          color: #f1a263;
                        }
                        .sub-text{
                          color: #666;
                          font-size: 15px;
                        }
                      }
                    }
                    &-title{
                      font-size: 12px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      height: 25px;
                      line-height: 25px;
                      padding-left: 5px;
                      color: #666;
                    }
                    &-price{
                      display: flex;
                      font-size: 14px;
                      color:#e76360;
                      &-left{
                        display: flex;
                        >span{
                          font-size: 10px;
                          line-height: 23px;
                        }
                      }
                      &-right{
                        font-size: 10px;
                        line-height: 22px;
                        margin-left: 5px;
                        color: #bebebe;
                      }
                    }
                  }
                }
              }
            }
          }
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
