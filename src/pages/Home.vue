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
          <div class="swiper">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="imgs in banners" :key = "imgs.id">
                <img :src="imgs.imageUrl">
              </mt-swipe-item>
            </mt-swipe>
          </div>
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
                    <a href="/list" class="seeMore">
                      <p class="text">更多商品</p>
                      <p class="sub-text">see-more</p>
                    </a>
                  </div>
                </div>
              </div>
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
import { getHomeData } from '@/axios'
export default {
  name: 'home',
  components: {
    HomeHeader
  },
  data () {
    return {
      selected: '1',
      tabs: [],
      banners: [],
      grids: [],
      rankings: []
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
  }
}
</script>

<style lang='scss' scoped>
  .tl-home-body{
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
          .swiper{
            height: 0px;
            width: 100%;
            padding-top: 37%;
            position: relative;
            .mint-swipe{
              height: 100%;
              width: 100%;
              position: absolute;
              left: 0;
              top: 0;
            }
            .mint-swipe-item{
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              >img{
                width: 100%;
              }
            }
          }
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
              border-bottom: 1px solid;
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
                      width:100%;
                      height: 105px;
                      border: 1px solid #bebebe;
                      >img{
                        width: 100%;
                        height: 100%;
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
        }
      }
    }

  }
</style>
