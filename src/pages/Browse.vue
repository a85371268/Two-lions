<template>
  <div class="tl-browse-body">
    <div class="tl-browse-header">
      <span><i class="icon iconfont icon-fanhui" @click="goBack"></i></span>
      <p class="title">浏览历史</p>
    </div>
    <div class="tl-browse-wrapper">
      <list-title v-if="browseId.length===0">还没有浏览记录(ง •̀_•́)ง</list-title>
      <list-title v-else>心动不如行动(ง •̀_•́)ง</list-title>
      <div class="tl-browse-list">
        <list-item v-for="item in this.browseId" :key="item.id" :item="item"></list-item>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/List/ListItem'
import ListTitle from '@/components/Home/HomeListTitle'
import { mapState } from 'vuex'
export default {
  name: 'browse',
  methods: {
    goBack () {
      this.$router.back()
    }
  },
  components: {
    ListItem,
    ListTitle
  },
  computed: {
    ...mapState(['browseId'])
  }
}
</script>

<style lang="scss" scoped>
  $main-color: #f8e372;
  .tl-browse-body{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .tl-browse-header {
    height:40px;
    width: 100%;
    background-color: $main-color;
    display: flex;
    >span{
      color:#666;
      margin-left:5px;
      line-height: 40px;
    }
    .title{
      text-align: center;
      flex: 1;
      line-height: 40px;
      color: #666;
      font-size: 15px;
    }
  }
  .list-title{
    background: #f5f5f5;
  }
  .tl-browse-wrapper{
    flex: 1;
    overflow-x: hidden;
  }
  .tl-browse-list{
    background: #f5f5f5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
  }
</style>
