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
    },
    mounted(){
        this.$store.commit("TabbarMutation",false)
        axios('/ajax/cinemaDetail?cinemaId=24114&movieId=346629').then(res=>{            
            this.datalist = res.data 
        })
    },
}
</script>
