<template>
    <div>
       <ul v-for="data in datalist">
           <li class="fir" @click="handleChangePage(data.id)" :key="data.id">
               <img :src="data.img | path">
           </li>
           <li class="sec">
            <div class="h2">{{data.nm}}
                    <span v-if="data.preShow"><img src="../../assets/nowimg/ab.png" ></span>
                    <span v-if="data.version==='v2d imax'"><img src="../../assets/nowimg/2.png"></span>
                    <span v-if="data.version==='v3d'"><img src="../../assets/nowimg/3d.png"></span>
                    <span v-if="data.version==='v3d imax'"><img src="../../assets/nowimg/3dimax.png"></span>
            </div>
            <div class="score">
                <span v-if="data.sc===0 && data.showst===4">{{data.wish}}人想看</span>
                <span v-if="data.sc===0 && data.showst===3">暂无评分</span>
                <span v-if="data.sc!==0">观众评{{data.sc}}</span>
            </div>
               <p>主演：{{data.star}}</p>
               <p>{{data.showInfo}}</p> 
                <div class="btn">
                  <span class="buy" v-if="data.showst===3">购票</span>
                  <span class="order" v-if="data.showst===4">预约</span>
               </div>
           </li>
       </ul>
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'
//import moviebar from './moviebar'
import Vue from 'vue'
Vue.filter('path',function(path){
    return path.replace('w.h','128.180')
})
export default {
    data () {
        return{
            datalist:[],
            //loading:false,
            //total:0,
            //current:1,
            //isShow:true,
            //isFixed:false
        }
    },
    mounted(){
        axios('/ajax/movieOnInfoList?token=').then(res=>{
            console.log(res.data)
            this.datalist=[...this.datalist,...res.data.movieList];
            //this.total = res.data.data.total
        })
    },

    destroyed(){
       
    },
    methods:{
        handleChangePage (id) {
            this.$router.push(`/detail/${id}`)
        }

    }
}
</script>
<style lang="scss" scoped>
   ul{  
        position: relative;
        top: 90px;
        .fir{
            overflow:hidden;
            width: 64px;
            height: 90px;
            position: relative;
            margin-top: 12px;
            margin-left: 12px;
            float:left;
            img{
                background:#e1e1e1;
                height: 90px;
                width: 100px;
            }
        }
        .sec{
            padding: 12px 15px 12px 12px;
            margin-left: 74px;
            margin-right: 30px;
            height: 90px;
            width: 210px;
            position: relative;
            border-bottom: 1px solid #eeeded;
            .h2{
                width: 100%;
                height: 24px;
                line-height: 24px;
                font-size: 15px;
                color: #333;
                font-weight: 700;
                padding-right: 5px;
                margin-bottom: 3px;
                flex-shrink:1;
                text-overflow:ellipsis;
                overflow: hidden;
                white-space: nowrap;
                span{
                    display: inline-block;
                }
            }
            .score{
                span{
                  font-size: 13px;
                  color: #666;
                  margin-top:6px;
                  line-height: 15px;
                  text-overflow:ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
            }
            p{
                font-size: 13px;
                color: #666;
                margin-top:6px;
                line-height: 15px;
                text-overflow:ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .btn{
               position: absolute;
               top: 43px;
               right: -35px;
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
                line-height: 28px;
                white-space: nowrap;
                cursor: pointer;
                }
                .buy{
                    background:#f03d37;
                }
                .order{
                    background:#3c9fe6;
                }
            }
        }
    }
</style>
