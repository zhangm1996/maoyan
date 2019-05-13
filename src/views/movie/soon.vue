<template>
    <div>
      <swiper></swiper>
        <ul>
            <li v-for="data in datalist" @click="handleChangepage()" :key="data.id">
            <p>{{data.comingTitle}}</p>
            <div class="box">
                <div class="photo">
                    <img :src="data.img | path"/>
                </div>  
                <div class="border-box">
                    <div class="content">
                        <div class="filmName">{{data.nm}}
                            <span v-if="data.preShow"><img src="../../assets/nowimg/ab.png" ></span>
                            <span v-if="data.version==='v2d imax'"><img src="../../assets/nowimg/2.png"></span>
                            <span v-if="data.version==='v3d'"><img src="../../assets/nowimg/3d.png"></span>
                            <span v-if="data.version==='v3d imax'"><img src="../../assets/nowimg/3dimax.png"></span>
                        </div>
                        <div class="wish">
                            <span class="person">{{data.wish}}</span>
                            <span class="p-person">人想看</span>
                        </div>
                            <div class="actor">主演: {{data.star}}</div>
                        <div class="time">{{data.rt}}上映</div>
                        <div class="button">
                            <span class="ys" v-if="data.showst===4">预售</span>
                            <span class="xk" v-if="data.showst===1">想看</span>
                            </div>
                        </div>
                    </div>     
                </div>
            </li>
        </ul>
    </div> 
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import swiper from './swiper'

Vue.filter('path',function(path){
        return path.replace('w.h','128.180')
    })

export default {
    
    data(){
        return{
            datalist:[]
        }
    },
    mounted ( ) {
        axios({
            url:'/ajax/comingList?ci=65&token=&limit=10'
        }).then(res=>{
            console.log(res.data.coming)
            this.datalist = res.data.coming
        })
    },
    methods:{
        handleChangepage (id) {
            this.$router.push(`/detail`)
        }
    },
    components:{
        swiper
    }
}
</script>
<style lang="scss" scoped>
    ul{
        width: 358px;
        box-sizing: border-box;
        padding-top: 10px;
        background: #f5f5f5;
        li{
            width: 100%;
            background: white;
            p{
                font-size: 14px;
                color: #333;
                padding: 12px 15px 0 15px;
            }
           .box{
                box-sizing: border-box;
                padding-left: 15px;
                overflow: hidden;
                position: relative;
                .photo{
                    width: 64px;
                    float: left;
                    box-sizing:  border-box;
                    padding: 12px 0px;
                    img{
                        width: 64px;
                        height: 90px;
                    }
                }
                .border-box{
                    float: left;
                    margin-left: 10px;
                    width: 269px;
                    border-bottom: 1px solid #eeeded;
                    .content{
                        width: 202px;
                        box-sizing: border-box;
                        padding: 12px 0;
                        .filmName{
                            width: 100%;
                            height: 24px;
                            line-height: 24px;
                            font-size: 17px;
                            color: #333;
                            font-weight: 700;
                            padding-right: 5px;
                            margin-bottom: 3px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            span{
                                display: inline-block;
                            }
                        }
                        .wish{
                            .person{
                                font-size: 15px;
                                color: #faaf00;
                                font-weight: 600
                            }
                            .p-person{
                                display: inline-block;
                                font-size: 13px;
                                margin-left: 2px;
                                color: #666;
                            }
                        }
                        .actor,.time{
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            font-size: 13px;
                            color: #666;
                            margin-top: 3px;    
                        }
                        .button{
                            position: absolute;
                            top: 43px;
                            right: 14px;
                            span{
                                display: block;
                                width: 47px;
                                height: 27px;
                                cursor: pointer;
                                box-sizing: border-box;
                                border-radius: 4px;
                                text-align: center;
                                color: #fff;
                                font-size: 12px;
                                line-height: 27px;
                            }
                            .ys{
                                background: #3c9fe6;
                            }
                            .xk{
                                background: #faaf00;
                            }
                        }
                    }
                } 
           }
        }
    }
</style>
