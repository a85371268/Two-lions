<template>
  <div class="tl-mine-body">
    <div class="tl-mine-top">
      <div class="tl-mine-top-icon">
        <i class="iconfont icon-lingdang"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
      <mine-bgbox></mine-bgbox>
    </div>
    <div class="null-box"></div>
    <div class="tl-mine-middle">
      <mine-item>签到养竹笋</mine-item>
    </div>
    <div class="tl-mine-bottom">
      <mine-item v-for="text in itemText" :key="text" class="bottom-item">{{text}}</mine-item>
    </div>
  </div>
</template>

<script>
import MineItem from '@/components/Mine/MineItem'

import MineBgbox from '@/components/Mine/MineBgbox'
export default {
  name: 'mine',
  components: {
    MineItem,
    MineBgbox
  },
  data () {
    return {
      itemText: [
        '推荐APP给小伙伴',
        '求打分给好评啦~',
        '帮助与反馈',
        '关于双狮优选'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .tl-mine-body{
    height: 100%;
    .null-box{
    height: 13%;
    background: #f5f5f5;
  }
  }
.tl-mine{
  &-top{
    height: 26%;
    background: #f8e372;
    position: relative;
    &-icon{
      text-align: right;
      padding-top: 30px;
      >i{
        margin-right: 20px;
        font-size: 25px;
      }
    }
  }
  &-middle{
    background: #f5f5f5;
    padding-top:10px;
    padding-bottom: 10px;
  }
  &-bottom{
    background: white;
    .bottom-item{
      border-color: #f5f5f5;
    }
  }
}
</style>
