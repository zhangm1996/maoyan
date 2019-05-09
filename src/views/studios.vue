<template>
    <div v-if="datalist" class="main">
        <div  class="title">
           
            <span>{{datalist.cinemaData.nm}}</span>
        </div>
        <div class="swiper"  v-if="datalist">
            <swiper ref="swiper">
                <div class="swiper-slide" v-for="data,index in datalist.showData.movies" :key="data.id">
                        <img :src="handlePath(data.img)" @click="change(index)"/>         
                </div>
            </swiper>
            <!-- <information></information> -->
           
        </div>
            <div class="information">
                <span>{{datalist.showData.movies[num].nm}}</span>
                <span v-if="datalist.showData.movies[num].sc!=='0.0'">{{datalist.showData.movies[num].sc}}<span>分</span></span>
                 <span v-if="datalist.showData.movies[num].sc==='0.0'">{{datalist.showData.movies[num].wish}}<span>人想看</span></span>
                <p>{{datalist.showData.movies[num].desc}}</p>
            </div>
            <ul>
                <li v-for="data,index in datalist.showData.movies[num].shows" 
                @click="changeColor(index)" :class="current===index?'active':''">
                    {{data.dateShow}}
                </li>
            </ul>
            <div class="discount">
                <span>{{datalist.showData.vipInfo[0].tag}}</span>
                <span>{{datalist.showData.vipInfo[0].title}}</span>
                <span>{{datalist.showData.vipInfo[0].process}}</span>
            </div>
            
            <div v-for="data,index in datalist.showData.movies[num].shows" v-show="number===index">
                <div v-if="data.plist.length===0" class="no">
                   <p>影片未上映</p>
                    <img src="data:image/png;base64,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">
                    </div>
                <div v-for="data in data.plist" class="buy">
                    <div class="begin"> {{data.tm}}</div>
                    <div class="lang">{{data.lang}} {{data.tp}}</div>
                    <div class="price"><span>￥</span>33</div>
                    <div class="vip"><span> {{data.vipPriceName}}</span><span>￥{{data.vipPrice}}</span></div>
                    <div class="end">{{datalist.showData.movies[num].dur}}分钟后散场</div>
                    
                    <div class="th">{{data.th}}</div>
                    <div class="extraDesc">{{data.extraDesc}}</div>
                    <div class="ticket">购票</div>
                </div>    
            </div>
            <div class="setmeal">
                <div class="tit">影院超值套餐</div>
                <div v-for="data in datalist.dealList.dealList" class="block">
                    <img :src="handlePath(data.imageUrl)">
                    <div class="top">
                        <span>双人</span>{{data.title}}
                    </div>
                    <div class="price">
                        <span>￥</span>{{data.price}}
                    </div>
                    <div class="curNumberDesc">{{data.curNumberDesc}}</div>
                    <div class="gobuy">去购买</div>
                    <div class="hot" v-if="data.cardTag">{{data.cardTag}}</div>
                </div>
            </div>
    </div>
</template>
<script>
import axios from 'axios'
import swiper from './studios/swiper'
// import setmeal from './studios/setmeal'
export default {
    data(){
        return{
            datalist:null,
            num:0,
            current:0,
            number:0,
            endtime:'22:22'
        }
    },
    mounted(){
        axios('/ajax/cinemaDetail?cinemaId=25107&movieId=248172').then(res=>{
            console.log(res.data.showData.movies)
            this.datalist = res.data
            
        })
    },
    components:{
        swiper,
        // setmeal
    },
    methods:{
        handlePath(path){
        return path.replace('w.h','148.208');
        },
        change(index){
            this.num =index
            this.current = 0;
            this.number = 0;
            // this.$router.push(`/studios/${id}`)
        },
        changeColor(index){
              this.current = index;
              this.number = index;
            },
        
    }
}
</script>
<style lang="scss" scoped>
.main{
    .no{
        text-align: center;
        
    }
    padding-bottom: 40px;
    .tit{
        line-height: 45px;
        height: 45px;
        font-size: 15px;
        color: #666;
        border-bottom: 1px solid #eee;
    }
    .setmeal{
        padding-left: 15px;
        
        .block{
            padding-bottom: 10px;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid #eee;
            margin: 10px 0;
            .hot{
               position: absolute;
                left: 0;
                top: 0px;
               
                height: 18px;
                line-height: 18px;
                background-color: #fa5939;
                font-size: 12px;
                padding: 0 5px;
                color: #fff;
                border-bottom-right-radius: 2px;
             }
            img{
            width: 92px;
            }
            div{
                position: absolute;
               
            }
            .top{
                top: 2px;
                left: 100px;
                font-size: 14px;
                line-height: 18px;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                span{
                        display: inline-block;
                        vertical-align: top;
                        margin-top: 1px;
                        margin-right: 7px;
                        padding: 0 4px;
                        font-size: 10px;
                        line-height: 15px;
                        height: 15px;
                        background: #f90;
                        border-radius: 2px;
                        color: #fff;
                }
                
            }
            .price{
                top:70px;
                left: 100px;
                color: #f03d37;
                font-size: 17px;
                span{
                    font-size: 12px;
                }
            }
            .curNumberDesc{
                bottom: 45px;
                right: 15px;
                line-height: 16px;
                height: 16px;
                font-size: 12px;
                color: #999;
            }
            .gobuy{
                padding: 0 8px;
                height: 27px;
                line-height: 27px;
                font-size: 12px;
                border-radius: 3px;
                color: #fff;
                background-color: #f03d37;
                top: 65px;
                right: 15px;
            }
        }
        
    }
}
.buy{
    border-bottom: 1px solid #eee;
    padding: 17px 0;
    margin-left: 12.5px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .ticket{
        position: absolute;
        background: #f03d37;
        right: 15px;
        top:35%;
        width: 50px;
            height: 27px;
        line-height: 28px;
        font-size: 12px;
        color: #fff;
        border-radius: 4px;
        text-align: center;
        
    }
    .begin{
            font-size: 20px;
    color: #333;
    line-height: 1;
    white-space: nowrap;
    margin-right: 43px;
    }
    .lang{
            margin-top: 2px;
            line-height: 18px;
            font-size: 13px;
            color: #333;
            white-space: normal;
            margin-right: 20px;
    }
    .price{
        line-height: 1;
    color: #f03d37;
    margin-top: 1px;
    font-size: 19px;
    span{
        font-size: 10px;
    }
   
    }
    .vip{
        display: flex;
         margin-right: 50px;
        align-items: center;
        span{
        display: block;
        line-height: 15px;
        height: 15px;
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: left;
        transform-origin: left;
        margin-right: -8px;
        border: 1px solid #ff9000;
        border-radius: 2px;
        font-size: 12px;
        }
        span:nth-of-type(1){
            color: #fff;
            background-color: #f90;
       
        }
         span:nth-of-type(2){
             color: #f90;
            background-color: #fff;
             
         }
    }
    .end,.th,.extraDesc{
            margin-top: 10px;
            color: #999;
            font-size: 11px;
            line-height: 1;
            white-space: nowrap;
            margin-right: 20px;
    }
    .th{
margin-right: 30px;
    }
}
.active{
    color: red;
    border-bottom: 2px solid red;
}
.discount{
    padding: 0 15px;
    height: 42px;
    line-height: 42px;
        background-color: #fff5ea;
    span:nth-of-type(1){
            border-radius: 2px;
            font-size: 10px;
            line-height: 15px;
            height: 15px;
            width: 34px;
            text-align: center;
            color: #fff;
            margin-top: 13px;
            margin-right: 10px;
            background-color: #ff941a;
    }
    span:nth-of-type(2){
        color: #fa9600;
        font-size: 12px;
    }
    span:nth-of-type(3){
       line-height: 42px;
    color: #999;
    font-size: 12px;
    float: right;
    }
}
.title{
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0 52.5px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
        color: #fff;
    background: #e54847;
}
    .swiper{
    width: 100%;
    background-color: #40454d;
    }
    .information{
        padding: 5px 0;
        background: white;
        text-align:center;
        span:nth-of-type(1){
            height: 24px;
            line-height: 24px;
            font-size: 17px;
            color: #333;
            font-weight: 700;
            margin-right: 5px;
        }
        span:nth-of-type(2){
            color: #ffb400;
            font-size: 16px;
            span{
                    font-size: 10px;
                     color: #ffb400;
            }
        }
        p{
            margin-top: 2px;
            height: 18.5px;
            line-height: 18.5px;
            font-size: 13px;
            color: #999;
        }
        
    }
    ul{
            display: flex;
            width: 100%;
            li{
                margin:0 5px;
                height: 45px;
                line-height: 45px;
            }
        }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
     .swiper-container img{
         display: block;
         width: 85px;
         height: 120px;
     }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
	  transition: 300ms;
    }
	.swiper-slide:not(.swiper-slide-active){
      transform: scale(0.8);
	}
</style>
