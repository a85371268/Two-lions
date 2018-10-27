<template>
  <dl @click="goToDetail()">
    <dt><img :src="categorie.imageUrl" alt=""></dt>
    <dd>{{categorie.title}}</dd>
  </dl>
</template>

<script>
export default {
  name: 'Item',
  props: ['categorie'],
  methods: {
    goToDetail () {
      const id = this.categorie.url.split('?')[1].split('=')[1]
      console.log(id)
      this.$router.push(`/list/${id}`)
    }
  }
}
</script>

<style lang='scss' scoped>
dl{
  width:50px;
  margin:15px;
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
    color:#666;
    text-align:center;
  }
}
</style>
