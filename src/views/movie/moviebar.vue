<template>
    <div>
        <ul>
            <router-link to='/movie/now' tag='li' activeClass="active">正在热映</router-link>
            <router-link to='/movie/soon' tag='li' activeClass='active'>即将上映</router-link>
        </ul>
    </div>
</template>
<script>
export default {
    mounted(){
       
    },
    props:{
        myfixed:Function
    }
}

</script>

<style lang="scss" scoped>
div{
     width: 100%;
    ul{
        display: flex;
       
        background: white;
        li{
            flex:1;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }
    }
    }
    .active{
        color: red;
        border-bottom:3px solid red;
    }
</style>
