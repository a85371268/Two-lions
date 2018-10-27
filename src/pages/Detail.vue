<template>
  <div class="tl-detail-body body">
    <div class="tl-detail-top">
      <div class="tl-detail-slider">
        <div class="back" @click="goBack">
          <i class="icon iconfont icon-fanhui"></i>
        </div>
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="slider in sliderList" :key="slider.id">
            <img :src="slider.url" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="tl-detail-info">
        <div class="tl-detail-info-des">{{proInfo.title}}</div>
        <div class="tl-deatil-info-price">
          <div class="tl-deatil-info-price-left">
            ￥{{proInfo.price}}
          </div>
          <div class="tl-deatil-info-price-right">
            <span>{{saleNum}}人已买</span>
          </div>
        </div>
        <div class="tl-detail-info-pinkage">
          <dl v-for="(accessoryHint, index) in accessoryHints" :key="index">
            <dt><i class="icon iconfont icon-xuan"></i></dt>
            <dd>{{accessoryHint}}</dd>
          </dl>
        </div>
      </div>
      <div class="tl-detail-shop">
        <div class="tl-detail-shop-logo">
          <img :src="picUrl" alt="">
        </div>
        <div class="tl-detail-shop-info">
          <div class="tl-detail-shop-info-title">{{shopTitle}}</div>
          <div class="tl-detail-shop-info-eval">
            <span>描述：{{deliveryScore}}</span>
            <span>服务：{{serviceScore}}</span>
            <span>物流：{{itemScore}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tl-detail-btn">
      <button @click="addCart(proInfo)">加入购物车</button>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import { getDetail } from '@/axios'
import { mapMutations } from 'vuex'

export default {
  name: 'detail',
  data () {
    return {
      sliderList: [],
      saleNum: 0,
      accessoryHints: [],
      picUrl: '',
      shopTitle: '',
      serviceScore: '',
      itemScore: '',
      deliveryScore: '',
      proInfo: {
        id: this.$route.params.id,
        title: '',
        price: 0,
        img: ''
      }
    }
  },
  mounted () {
    getDetail(this.$route.params.id).then(resp => {
      if (resp.data.code === 200) {
        const data = resp.data.data.detail
        this.sliderList = data.photo
        this.proInfo.img = data.photo[0].url
        this.proInfo.title = data.title
        this.proInfo.price = data.price
        this.saleNum = data.saleNum
        this.accessoryHints = data.accessoryHints
        this.picUrl = data.shop.picUrl
        this.shopTitle = data.shop.title
        this.serviceScore = data.shop.serviceScore
        this.itemScore = data.shop.itemScore
        this.deliveryScore = data.shop.deliveryScore
      }
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    ...mapMutations(['addCart'])
  }
}
</script>

<style lang='scss' scoped>
.tl-detail-body{
  height:100%;
  background-color: #eeee;
  .tl-detail-top{
    flex:1;
    overflow-y: auto;
    .tl-detail-slider{
      height:400px;
      position: relative;
      .back{
        position: absolute;
        top:5px;
        left:5px;
        z-index: 1000;
        width:30px;
        height:30px;
        background-color: rgba(0,0,0,0.5);
        text-align: center;
        line-height: 30px;
        color:#fff;
        border-radius: 50%;
        // background-color: #F50;
      }
    }
    .tl-detail-info{
      padding:15px;
      margin-bottom:5px;
      background-color: #fff;
      .tl-detail-info-des{
        font-size: 13px;
        line-height:20px;
        color:#666;
      }
      .tl-deatil-info-price{
        display: flex;
        margin-top:10px;
        .tl-deatil-info-price-left{
          color:#f50;
          font-size: 25px;
          margin-right:20px;
        }
        .tl-deatil-info-price-right{
          color:#666;
          font-size: 12px;
          line-height: 44px;
        }
      }
      .tl-detail-info-pinkage{
        border-top:1px solid #dfdfdf;
        height:40px;
        display: flex;
        dl{
          margin:0 10px;
          dt{
            margin-right:2px;
            display: inline-block;
            vertical-align: middle;
            color:#f50;
          }
          dd{
            font-size: 12px;
            color:#666;
            display: inline-block;
          }
        }
      }
    }
    .tl-detail-shop{
      background-color: #fff;
      height:50px;
      padding-left:15px;
      padding-top:5px;
      display: flex;
      .tl-detail-shop-logo{
        width:40px;
        height:40px;
        border: 1px solid #dfdfdf;
        img{
          width:100%;
        }
      }
      .tl-detail-shop-info{
        margin-left:15px;
        .tl-detail-shop-info-title{
          font-size: 12px;
          color:#666;
        }
        .tl-detail-shop-info-eval{
          font-size: 12px;
          color:#666;
          margin-top:5px;
          span{
            margin-right:10px;
          }
        }
      }
    }
  }
  .tl-detail-btn{
    display: flex;
    height:40px;
    button{
      width:50%;
      height:40px;
      color:#fff;
      background-color: #f50;
      border:0;
    }
    button+button{
      background-color: #26a2ff;
    }
  }
}
</style>
