<template>
<div class="tl-list-nav">
  <div :class="currentId!==nav.id?'tl-list-nav-item':'tl-list-nav-item active'"
  v-for="nav in listNavList"
  :key="nav.id"
  @click="sortList(nav.id)">{{nav.text}}</div>
</div>
</template>

<script>
export default {
  name: 'listNav',
  props: ['status'],
  data () {
    return {
      currentId: 0,
      listNavList: [{
        id: 0,
        text: '默认排序'
      }, {
        id: 1,
        text: '价格最低'
      }, {
        id: 2,
        text: '销量最高'
      }
      ]
    }
  },
  methods: {
    sortList (id) {
      this.$emit('sortList', id)
      this.currentId = id
    }
  }
}
</script>

<style lang='scss' scoped>
.tl-list-nav{
  display: flex;
  height:40px;
  line-height: 40px;
  background-color: #fff;
  box-shadow: 1px 2px 5px hsla(0,11%,79%,.5);
  .tl-list-nav-item{
    flex:1;
    text-align: center;
    font-size: 12px;
    color:#666;
  }
  .active{
    color:#f50;
  }
}
</style>
