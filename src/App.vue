<template>
  <div id="app" class="app">
    <div class="lt-body">
       <router-view/>
    </div>
    <tabbar v-if="$route.name!=='detail'&&$route.name!=='list'"></tabbar>
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
    overflow-y: auto;
  }
}
</style>
