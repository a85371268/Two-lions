<template>
<div class="tl-list-main-left">
  <ul>
    <li v-for="item in kindsList" :key="item.id" @click="$emit('gitsubItem',item.id)">{{item.name}}</li>
  </ul>
</div>
</template>

<script>
import { getKindList } from '@/axios'

export default {
  name: 'ListLeft',
  data () {
    return {
      kindsList: []
    }
  },
  mounted () {
    getKindList().then(resp => {
      if (resp.data.code === 200) {
        this.kindsList = resp.data.data.list.filter(item => item.name !== '今日推荐')
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.tl-list-main-left{
  width:80px;
  // height:800px;
  border-right:1px solid #dfdfdf;
  overflow: auto;
  ul{
    display: flex;
    flex-direction: column;
    li{
      height:50px;
      line-height: 50px;
      font-size: 12px;
      color:#666;
      text-align: center;
    }
  }
}
</style>
