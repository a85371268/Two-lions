<template>
  <div id="app" class="app">
    <div class="lt-body">
      <router-view/>
    </div>
    <div class="lt-tabbar-wrapper"  v-if="$route.name!=='detail'&&$route.name!=='list'&&$route.name!=='search'">
      <tabbar></tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
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
