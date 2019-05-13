<template>
    <div class="box">
        <p class="title">近期最受期待</p>
        <div class="swiper-container coming">
            <ul class="swiper-wrapper">
                <li v-for="data in datalist" :key="data.id" class="swiper-slide">
                    <div class="photo-box">
                        <img :src="data.img | path">
                        <div class="heart"><i class="iconfont icon-xin"></i></div>
                        <div class="wish-bg"></div>
                        <span>{{data.wish}}人想看</span>
                    </div>
                    <h5>{{data.nm}}</h5>
                    <p>{{data.comingTitle | time}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import Swiper from 'swiper' //swiper js
import 'swiper/dist/css/swiper.min.css' //swiper css
Vue.filter('path',function(path){
    return path.replace('w.h','170.230')
})
Vue.filter('time',function(time){
   
    return time.slice(0,5)
})
export default {
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
        axios({
            url:'/ajax/mostExpected?ci=65&limit=10&offset=0&token='
        }).then(res=>{
            console.log('aa',res.data.coming)
            this.datalist=res.data.coming
        })
        
    },
    updated(){
        new Swiper('.coming', {
        slidesPerView: 3.5,
        spaceBetween: 5,
        freeMode: true,
      
    });
    }
}
</script>
<style src="../../assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
    .box{
        margin-top: 97px;
        width: 343px;
        padding: 12px 0 12px 15px;
        height: 192px;
        overflow: hidden;
        p{
            font-size: 14px;
            line-height: 19px;
            margin-bottom: 12px;
            color: #333;
        }
        ul{
            li{
                width: 85px;
                margin-right: 10px;
                .photo-box{
                    position: relative;
                    margin-bottom: 6px;
                    img{
                        width: 85px;
                        height: 115px;
                    }
                    .heart{
                        width: 28px;
                        height: 28px;
                        line-height: 26px;
                        text-align: center;
                        background: rgba(61,63,71,.6);
                        border-bottom-right-radius: 10px;
                        position: absolute;
                        top: 0;
                        left: 0; 
                        i{
                            font-size: 13px;
                            color: #c2c2c2;
                        }
                    }
                    .wish-bg{
                        width: 85px;
                        height: 35px;
                        position: absolute;
                        bottom: 0;
                        background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000); 
                    }
                    span{
                        position: absolute;
                        left: 4px;
                        bottom: 2px;
                        color: #faaf00;
                        font-size: 11px;
                        font-weight: 600;
                    }
                }
                h5{
                    margin-bottom: 3px;
                    font-size: 13px;
                    color: #222;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    font-weight: 700;
                }
                p{
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }
</style>

