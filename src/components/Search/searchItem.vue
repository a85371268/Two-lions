<template>
  <ul>
    <li v-for="history in historys" :key="history" @click="goList(history)">{{history}}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'searchItem',
  computed: {
    ...mapState(['historys'])
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
  }
}

</style>
