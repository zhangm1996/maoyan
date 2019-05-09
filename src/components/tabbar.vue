<template>
    <nav>
        <ul>
            <router-link to='/movie' tag='li' activeClass='active'>电影</router-link>
            <router-link to='/cinema' tag='li' activeClass='active'>影院</router-link>
            <router-link to='/center' tag='li' activeClass='active'>我的</router-link>    
        </ul>
    </nav>
</template>
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
            height: 40px;
            line-height: 40px;
            
        }
    }
    .active{
        color: red;
    }
</style>
