<template>
<div class="tl-list-main-left">
  <ul>
    <li
    v-for="item in kindsList"
    :key="item.id"
    @click="gitsubItem(item.id)"
    :class="currentId===item.id?'active':''">{{item.name}}</li>
  </ul>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getKindList } from '@/axios'

export default {
  name: 'ListLeft',
  data () {
    return {
      kindsList: []
    }
  },
  computed: {
    ...mapState(['currentId'])
  },
  mounted () {
    getKindList().then(resp => {
      this.kindsList = resp.list.filter(item => item.name !== '今日推荐')
    })
  },
  methods: {
    ...mapMutations(['changeCurrentId']),
    gitsubItem (id) {
      this.changeCurrentId(id)
      this.$emit('gitsubItem', id)
    }
  }
}
</script>

<style lang='scss' scoped>
.tl-list-main-left{
  width:80px;
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
    .active{
      color:#f8e372;
    }
  }
}
</style>
