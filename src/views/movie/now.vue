<template>
    <div>
        now
        <ul>
            <router-link to='/ticket/id' tag='li' activeClass="active">跳转特惠购票页</router-link>
           
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
        axios('/ajax/movieOnInfoList?token=').then(res=>{
            console.log(res.data)
        })
    }
}
</script>
