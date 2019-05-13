<template>
<div>
    <div class="title">
        <h1>影院</h1>
    </div>
    <div class="title2">
        <div class="city">大连</div>
        <div class="search">
            <img src="/img/2.png" alt="">
            <span>搜影院</span>
        </div>
    </div>
    <div class="nav">
        
        <div :class="'nav-city'" @click="change">全城</div>
        <div :class="'nav-brand'" @click="change">品牌</div>
        <div :class="'nav-item'" @click="change">特色</div>
    </div>
    <div class="cinema">
        <ul v-infinite-scroll="myLoadMore"
        infinite-scroll-immediate-check="false"
		infinite-scroll-disabled="loading"
        >
            <li v-for="data in datalist">
                <div class="cn">
                    <span class="cn-nm">{{data.nm}}</span>
                    <span class="cn-price">{{data.sellPrice}}</span>
                    <span class="yq">元起</span>
                </div>
                <div class="ad">
                    <div class="ad-addr">{{data.addr}}</div>
                    <div class="ad-distance">{{data.distance}}</div>
                </div>
                <div class="ps">
                    <span class="ps-refunf" v-if="data.tag.allowRefund">退票</span>
                    <span class="ps-endorse" v-if="data.tag.endorse">改签</span>
                    <span class="ps-snack" v-if="data.tag.snack">小吃</span>
                    <span class="ps-vip" v-if="data.tag.vipTag">{{data.tag.vipTag}}</span>
                    <span class="ps-cinema" v-for="data in data.tag.hallType">{{data}}</span>
                </div>
                <div class="at" v-if="data.promotion.cardPromotionTag">
                    <div class="at-img"><img src="/img/1.png" alt=""></div>
                    <div class="at-yh">{{data.promotion.cardPromotionTag}}</div>
                </div>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'

export default {
    data () {
        return {
            datalist : [],
            loading :false,
            total: 0,
            current:0,
            isShow:true,
        }
    },
    mounted(){

			axios({
		    url:`/ajax/cinemaList?day=2019-05-09&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1557371103008&cityId=65`,
		    }).then(res=>{
                
                this.datalist= res.data.cinemas
                this.total = res.data.paging.total //列表总长度
            }) 
        },
    methods:{
           myLoadMore () {
             console.log ("到底了")

             this.loading =  true;//禁用滚动加载
             this.current+=20;
            
            if(this.datalist.length===this.total){
					this.isShow = false;
					return ;
                }

                axios({
					url:`/ajax/cinemaList?day=2019-05-09&offset=${this.current}&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=false&reqId=1557389234409&cityId=65`,
				}).then(res=>{
                    console.log(res.data);
					this.datalist = [...this.datalist,...res.data.cinemas]
					this.loading =  false;//禁用滚动加载
				})
           },
           change(){

           }
    }
    }
</script>

<style lang="scss" scoped>
    
    .title {
        background: #e54847;
        height: 50.5px;
        text-align: center;
        color: #ffffff;
        line-height: 50.5px;
    }
    .title h1 {
        font-size: 18px;
    }
    .title2 {
        height: 44px;
        display: flex;
        background: #f5f5f5;
        align-items: center;
    }
    .city {
        padding-left: 15px;
        color: #666;
    }
    .search {
        display: flex;
        align-items: center;
        height: 28px;
        font-size: 13px;
        color: #b2b2b2;
        margin-left: 18px;
        border: .5px solid #e6e6e6;
        border-radius: 5px;
        margin-right: 15px;
        background: white;
        width: 280px;
        line-height: 28px;
        justify-content: center;
    }
    .search img {
          
    }
    .nav {
        display: flex;
        background-size: 1px 1px;
        font-size: 14px;
        color: #777;
        height: 40px;
        line-height: 40px;
    }
    .nav-city {
        text-align: center;
        white-space: nowrap;
        font-size: 13px;
        width: 125px;
        height: 40px;
    }
    .nav-brand {
        text-align: center;
        white-space: nowrap;
        font-size: 13px;
        width: 125px;
        height: 40px;
        border-left: 1px solid #e8e8e8;
    }
    .nav-item {
        text-align: center;
        white-space: nowrap;
        font-size: 13px;
        width: 125px;
        height: 40px;
        border-left: 1px solid #e8e8e8;
    }
    .active{
        color: red;
    }
    .cinema li {
        height: 100px;
        padding: 13px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
    }
    .cn-nm {
        line-height: 23px;
        font-size: 16px;
        color: #000;
    }
    .cn-price {
        color: #f03d37;
        font-size: 18px;
        padding-top: 9px;
        padding-left: 3px;
    }
    .yq {
        color: #f03d37;
        margin-left: 3px;
        font-size: 11px;
    }
    .ad {
        display: flex;
        align-items: center;
        margin-top: 6px;
    }
    .ad-addr {
        width: 85%;
        font-size: 13px;
        color: #666;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .ad-distance {
        
        font-size: 13px;
        color: #666;
    }
    .ps {
        margin: 4px 0 4px 0;
        width: 315px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .ps-vip {
        color: #f90;
        border: 1px solid #f90;
        font-size: 10px;
        border-radius: 2px;
        padding: 0 3px;
        margin-left: 5px;
    }
    .ps-cinema {
        color: #589daf;
        border: 1px solid #589daf;
        margin-left: 5px;
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: 10px;
    }
    .ps-refunf {
        color: #589daf;
        border: 1px solid #589daf;
        margin-left: 5px;
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: 10px;
    }
    .ps-endorse {
        color: #589daf;
        border: 1px solid #589daf;
        margin-left: 5px;
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: 10px;
    }
    .ps-snack {
        color: #f90;
        border: 1px solid #f90;
        font-size: 10px;
        border-radius: 2px;
        padding: 0 3px;
        margin-left: 5px;
    }
    .at {
        display: flex;
        align-items: center;
    }
    .at-img img{
        width: 15px;
        height: 14px;
        margin-right: 5px;
    }
    .at-yh {
        font-size: 11px;
        color: #999;
    }
</style>
