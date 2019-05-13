<template>
  <div id="app">
    <selection></selection>
    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import tabbar from './components/tabbar'
import selection from './components/selection'
export default {
  components:{
    tabbar,
    selection
  }
}
</script>

<style>

   *{
    margin: 0;
    padding: 0;
   }

   html,body{
    height: 100%;
   }

   ul,li{
    list-style: none;
   }
</style>