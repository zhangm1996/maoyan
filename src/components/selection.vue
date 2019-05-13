<template>
    <div v-if="datalist" class="main">
        <ul>
            <li @click="change(index)" v-for="data,index in brand" :class="brandCurrent===index?'active':''">{{data}}</li>   
        </ul>
        <div v-show="isShow" class="block">
            <div class="part">
            <div v-for="data,index in part" @click="changeColor(index)" :class="partCurrent===index?'active':''">
                {{data}}
            </div>
            </div>
            <div class="subItems">
                <div class="left" v-for="data,index in list" @click="changeRegion(index)" :class="subItemsCurrent===index?'active':''">
                    <div >{{data.name}}({{data.count}})</div>
                </div>
                <div class="region">
                    <div v-for="data,index in region?region:1" :class="0===index?'active':''"
                    @click="request(index,$event)"> 
                        
                    <p>{{data.name?data.name:'全部'}}</p> <p>{{data.count?data.count:datalist.district.subItems[subItemsCurrent].count}}</p>
                    </div>

             </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{            
            datalist:null,
            brand:['全城','品牌','特色'],
            part:['商区','地铁站'],
            brandCurrent:99,
            partCurrent:0,
            number:0,
            list:null,
            region:null,
            subItemsCurrent:0,
            isShow:false
        }
    },
    mounted(){
        axios('/ajax/filterCinemas?ci=65').then(res=>{
         
            this.datalist = res.data
            this.list = this.datalist.district.subItems
        })
    },
    methods:{
        request(index,data){
            console.log(data.target.innerHTML)
            if(index===0){
                this.brand = [this.datalist.district.subItems[this.subItemsCurrent].name,'品牌','特色']
            }
            if(index>0){
               this.brand = [data.target.innerHTML,'品牌','特色'] 
            }
            
            this.isShow = false
            this.brandCurrent = 99
        },
        changeRegion(index){
            if(index===0){
                 this.brand=['全城','品牌','特色']
                 this.isShow = false
                this.brandCurrent = 99
            }
            this.subItemsCurrent = index   
            if(this.partCurrent===0){ 
                this.region = this.datalist.district.subItems[index].subItems
            }
            if(this.partCurrent===1){
                this.region = this.datalist.subway.subItems[index].subItems
            }
            
        },
        change(thing){
            this.isShow = true
            this.brandCurrent = thing   
        },
         changeColor(index){
            this.partCurrent = index;
            this.number = index;  
            if(index ===0){
                this.list = this.datalist.district.subItems
            }
            if(index ===1){
                this.list = this.datalist.subway.subItems
            }                       
            },
    }
}
</script>
<style lang="scss" scoped>
.main{
    
    position: relative;
    .block{
        width: 100%;
      position: absolute;
      top: 40px;
      left: 0; 
      background: white; 
      z-index: 99;
    }
    .region{
        position: absolute;
        top: 5%;
        left: 40%;
        height: 400px;
        // overflow: auto;
        div{
            height: 100%;
            overflow:auto;
            p:nth-of-type(1){
                float: left;
                width: 150px;
            }
            p:nth-of-type(2){
                float: right;
            }
        }
    }
    .subItems{
        height: 400px;
        overflow: auto;
       .left{
           padding-left: 5px;
       }
        
        div{
            height: 30px;
            line-height: 30px;
        }
    }
}
.active{
    color: red;
}
.part{
    display: flex;
    justify-content: space-around;
    div{
        width: 50%;
        text-align: center;
    }
}
ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    li{ 
            
            text-align: center;
            line-height: 40px;
            position: relative;
            white-space: nowrap;
            overflow: hidden;
            font-size: 13px;
            text-overflow: ellipsis;
    }
}
</style>
