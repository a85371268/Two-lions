<template>
<div class="tl-cart-cartitem-select">
  <label for="sele" v-if="title">
    {{title}}
    <input type="checkBox" name='sele' :checked='isAllChecked' @click="allChecked">
    <span></span>
  </label>
  <div v-else>
    <input type="checkBox" name='sele' :checked='isChecked' @click="changeChecked(id)">
    <span></span>
  </div>
</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'checkBox',
  props: ['title', 'id', 'isChecked'],
  methods: {
    ...mapMutations(['changeChecked', 'allChecked'])
  },
  computed: {
    ...mapGetters(['isAllChecked'])
  }
}
</script>

<style lang='scss' scoped>
  .tl-cart-cartitem-select{
    width:40px;
    position: relative;
    label{
      font-size: 12px;
      color:#666;
      line-height: 44px;
      input,span:after,span:before{
        right:-48px;
        top:4px;
      }
    }
    input{
      position:absolute;
      z-index: 1000;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin:auto;
      opacity: 0;
    }
    span{
      width:100%;
      height:100%;
    }
    span:after{
      content: '';
      position:absolute;
      width:12px;
      height:12px;
      border:1px solid #ccc;
      border-radius: 50%;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin:auto;
    }
    span:before{
      content: '';
      position:absolute;
      width:10px;
      height:10px;
      background-color: #ccc;
      border-radius: 50%;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin:auto;
      display: none;
    }
    input:checked +span:before{
      display: block;
    }
  }
</style>
