<template>
  <dl @click="goToClassify">
    <dt><img :src="tabs.imageUrl" alt=""></dt>
    <dd>{{tabs.name}}</dd>
  </dl>
</template>

<script>
export default {
  name: 'Item',
  props: ['tabs'],
  methods: {
    goToClassify () {
      console.log(this.tabs.id)
    }
  }
}
</script>

<style lang='scss' scoped>
dl{
  width:50px;
  margin:12px;
  dt{
    height:40px;
    text-align: center;
    img{
      width:40px;
      height:40px;
    }
  }
  dd{
    font-size: 12px;
    margin-top: 8px;
    color:#666;
    text-align:center;
  }
}
</style>
