<template>
  <div id="app">
    <tabbar class="aaa"></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import tabbar from './components/tabbar'
export default {
  data () {
    return {

    }
  },
  methods:{

  },

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
  .aaa{
    position: fixed;
    bottom: 0;
    z-index: 9
  }
   ul,li{
    list-style: none;
   }
</style>