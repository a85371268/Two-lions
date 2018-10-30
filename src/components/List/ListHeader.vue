<template>
  <div class="tl-list-header">
    <span v-if="goback"><i class="icon iconfont icon-fanhui" @click="goBack"></i></span>
    <div class="tl-list-seach" v-if="isInput===true">
      <i class="icon iconfont icon-seach"></i>
      <input
      type="text"
      placeholder="套装 女"
      v-model="searchText"
      ref="inp"
      @keyup.enter="search">
      <button @click.enter="search">搜索</button>
    </div>
    <div class="tl-list-seach" @click="goSearch" v-else>
      <i class="icon iconfont icon-seach"></i>
      <span>套装 女</span>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'ListHeader',
  props: ['goback', 'isInput'],
  data () {
    return {
      searchText: '套装 女'
    }
  },
  mounted () {
    if (this.isInput) {
      this.$refs.inp.focus()
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    goSearch () {
      this.$router.push('/search')
    },
    search () {
      this.addHistory(this.searchText)
      this.$router.push(`/list/1?word=${this.searchText}`)
    },
    ...mapMutations(['addHistory'])
  }
}
</script>

<style lang='scss' scoped>
$main-color: #f8e372;
.tl-list-header {
    height:40px;
    background-color: $main-color;
    position: relative;
    display: flex;
    >span{
      color:#666;
      margin-left:5px;
      line-height: 40px;
    }
    >.tl-list-seach {
      background-color: #fff;
      height:25px;
      border-radius: 5px;
      width:80%;
      position: absolute;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      margin:auto;
      padding-left:10px;
      overflow: hidden;
      display: flex;
      >i{
        font-size: 25px;
        display: inline-block;
        vertical-align: middle;
        margin-left:15px;
      }
      >span{
        font-size: 12px;
        color:#666;
        line-height: 26px;
      }
      input{
        width:80%;
        flex: 1;
        height:100%;
        font-size: 12px;
        color:#666;
      }
      button{
        border:0;
        background-color: #e1c115;
        color:#fff;
      }
    }
  }
</style>
