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
            <div class="grid-left">

            </div>
            <div class="grid-right">
              <div class="grid1"></div>
              <div class="grid2"></div>
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
import { getBanner } from '@/axios'
export default {
  name: 'home',
  components: {
    HomeHeader
  },
  data () {
    return {
      selected: '1',
      banners: []
    }
  },
  mounted () {
    getBanner()
      .then(resp => {
        if (resp.data.code === 200) {
          this.banners = resp.data.data.banners
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
    }
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
          display: flex;
          border-top:1px solid #999;
          border-bottom: 1px solid #666;
          .grid-left{
            width: 50%;
            height: 100%;
            padding: 10px;
            border-right: 1px solid #666;
          }
          .grid-right{
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            .grid1{
              height: 50%;
              padding: 10px;
              border-bottom: 1px solid #999;
            }
            .grid2{
              padding: 10px;
              height: 50%;
            }
          }
        }
      }
    }
  }
</style>
