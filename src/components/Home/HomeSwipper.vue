<template>
<div class="swiper">
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="imgs in banners" :key = "imgs.id">
      <img :src="imgs.imageUrl">
    </mt-swipe-item>
  </mt-swipe>
</div>
</template>

<script>
export default {
  name: 'swiper',
  props: ['banners']
}
</script>

<style lang='scss' scoped>
.swiper{
  height: 0px;
  width: 100%;
  padding-top: 37%;
  position: relative;
  .mint-swipe{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .mint-swipe-item{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    >img{
      width: 100%;
    }
  }
}
</style>
