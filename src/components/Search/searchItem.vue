<template>
  <ul v-if='!isHot'>
    <li v-for="history in historys" :key="history" @click="goList(history)">{{history}}</li>
  </ul>
  <ul v-else>
    <li v-for="hot in hotList" :key="hot">{{hot}}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import { getHot } from '@/axios'

export default {
  name: 'searchItem',
  props: ['isHot'],
  data () {
    return {
      hotList: []
    }
  },
  computed: {
    ...mapState(['historys'])
  },
  created () {
    getHot().then(resp => {
      this.hotList = resp
    }).catch(err => console.error(err))
  },
  methods: {
    goList (word) {
      this.$router.push(`/list/1?word=${word}`)
    }
  }
}
</script>

<style lang='scss' scoped>
ul{
  display: flex;
  flex-wrap:wrap;
  margin:10px;
  li{
    padding:5px 8px;
    background-color: #eee;
    border-radius: 8px;
    margin-left:15px;
    font-size: 12px;
    color:#666;
    border-bottom:1px solid #dfdfdf;
    margin-top: 15px;
  }
}

</style>
