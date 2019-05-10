<template>
    <div>
        <moviebar></moviebar>
         <router-view></router-view>
    </div>
</template>
<script>
import moviebar from './movie/moviebar'
export default {
     components:{
       moviebar
    }
}
</script>
