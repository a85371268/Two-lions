<template>
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
          @click="goDetail(rank.id)"
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
</template>

<script>
export default {
  name: 'homerankings',
  props: ['rankings'],
  methods: {
    goDetail (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang='scss' scoped>
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
</style>
