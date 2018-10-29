<template>
  <span :class="count>99?'more':count">{{count>99?'99+':count}}</span>
</template>

<script>
export default {
  name: 'badge',
  props: ['count']

}
</script>

<style lang='scss' scoped>
span{
  position: absolute;
  right:10px;
  width:20px;
  height:20px!important;
  background-color: #F50;
  border-radius: 50%;
  color:#fff!important;
  line-height: 20px!important;
  text-align: center;
  font-size: 12px;
}
.more{
  border-radius: 30px;
  width:30px;
  right:2px;
}
</style>
