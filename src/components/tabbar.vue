<template>
    <nav>
        <ul>
            <router-link to='/movie' tag='li' activeClass='active'><i class="iconfont icondianying"></i><span>电影</span></router-link>
            <router-link to='/cinema' tag='li' activeClass='active'><i class="iconfont iconyingyuana"></i><span>影院</span></router-link>
            <router-link to='/center' tag='li' activeClass='active'><i class="iconfont iconwode"></i><span>我的</span></router-link>    
        </ul>
    </nav>
</template>
<style src="../assets/iconfont/iconfont.css"></style>
<style lang='scss' scoped>
     nav{
        z-index: 999;
        background: white;
        position: fixed;
        width: 100%;
        left: 0px;
        bottom: 0px;
        color: black;
        line-height: 30px;
        ul{
            display: flex;
            border-top: 1px solid #dbd9d9;
            li{
                height: 48px;
                flex: 1;
                text-align: center;
                position: relative;
                i{
                    font-size: 22px;
                    line-height: 34px;
                    text-align: center;
                    position: absolute;
                    left:50px;
                    top:0px ;

                }
                .last{
                    font-size: 24px;
                }
                span{
                    line-height: 12px;
                    font-size: 10px;
                    position: absolute;
                    top: 33px;
                    left: 0;
                    right: 0;

                }
            }
        }
    }
    .active{
        color: red;
    }
</style>
