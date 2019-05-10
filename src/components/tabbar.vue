<template>
    <nav>
        <ul>
            <router-link to='/movie' tag='li' activeClass='active'><p class="iconfont icon-dianying"></p>电影</router-link>
            <router-link to='/cinema' tag='li' activeClass='active'><p class="iconfont icon-yingyuanA"></p>影院</router-link>
            <router-link to='/center' tag='li' activeClass='active'><p class="iconfont icon-wode"></p>我的</router-link>    
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style src="../assets/css/iconfont.css"></style>

<style lang='scss' scoped>
    ul{
        background: white;
        width: 100%;
        display: flex;
        position: fixed;
        z-index: 9;
            bottom: 0;
            left: 0;
        li{
            flex: 1;
            text-align: center;
            height: 48px;
            font-size: 14px;
            p{
                font-size: 26px;
               
            }
            
        }
    }
    .active{
        color: red;
    }
</style>
