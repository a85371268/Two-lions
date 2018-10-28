<template>
  <div id="app" class="app">
    <div class="lt-body">
      <router-view/>
    </div>
    <div class="lt-tabbar-wrapper">
      <tabbar v-if="$route.name!=='detail'&&$route.name!=='list'"></tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang='scss'>
.app {
  height:100%;
  display:flex;
  flex-direction: column;
  .lt-body{
    flex:1;
    overflow-x: hidden;
  }
  .lt-tabbar-wrapper{
    height: 50px;
    overflow: hidden;
  }
}
</style>
