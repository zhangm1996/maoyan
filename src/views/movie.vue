<template>
    <div>
        <moviebar class='fixed'></moviebar>
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

<style lang="scss" scoped>
	.fixed{
		position: fixed;
		top: 0;
		left: 0;
 		height: 40px;
        width: 100%;
        background:white;
        color: black;
        z-index: 999;
	}
</style>