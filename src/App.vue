<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import tabbar from './components/tabbar'
export default {
  components:{
    tabbar
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