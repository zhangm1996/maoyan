<template>
  <!-- ticket
    <ul>
      <router-link to='/detail/id'
                   tag='li'
                   activeClass="active">跳转详情页</router-link>
    </ul>
    <ul>
      <router-link to='/studios/id'
                   tag='li'
                   activeClass="active">跳转具体影城页</router-link>
    </ul> -->
  <div>
    <header class="Tnav">
      <div class="Tnav-left">
        <a href="#"><i class="iconfont icon-zuojiantou"></i></a>
      </div>
      <h1 class="Tnav-header">{{datalist.nm}}</h1>
    </header>
    <div class="body">
      <div class="movie-detail">
        <div class="movie-filter"></div>
        <div class="poster-bg"></div>
        <div class="detail box-flex">
          <div class="poter">
            <img :src="path">
          </div>
          <div class="content flex">
            <div class="title middle line-ellipsis">{{datalist.nm}}</div>
            <div class="title-en-name line-ellipsis">{{datalist.enm}}</div>
            <div class="score line-ellipsis"
                 :style="{fontSize:checkType?'14px':'18px'}">{{ell}}
              <span class="snum"
                    v-show="isshowsc">{{arr}}</span>
            </div>
            <div class="type line-ellipsis">
              <span>{{datalist.cat}}</span>
              <div class="type-group">
                <!-- <img style="width: 42px;"
                     class="sd-imax"> -->
              </div>
            </div>
            <div class="src line-ellipsis">{{datalist.src}}/{{datalist.episodeDur}}分钟</div>
            <div class="pubDesc line-ellipsis">{{datalist.pubDesc}}</div>
          </div>
        </div>
        <div class="arrow-g"
             @click="qiehuandetail()">
          <!-- 跳转详情页 -->
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <div id="showDays">
        <!-- <ticketdata :class="isShow?'min-line':''"
                    ref="swiper"></ticketdata> -->

        <ul id="timeline"
            :class="isShow?'min-line':''"
            ref="swiper1">
          <router-link to=''
                       tag='li'
                       :class="{active:current==index}"
                       v-for="(data,index) in time"
                       :key="data.item"
                       @click.native="handedata(index)"
                       ref="swiper">{{data}}</router-link>

        </ul>
      </div>
      <!-- 中间导航栏————————待完成-->
      <!-- <div></div> -->
      <!-- 影院 -->
      <div class="cinema-list cinema"
           style="margin-top: 86px;">
        <div class="list-wrap"
             style="min-height: 503px;"
             v-infinite-scroll="zxloadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-immediate-check="false">
          <div class="item mb-line-b"
               v-for="(item,index) in filmes"
               :key="index">
            <div class="title-block box-flex middle">
              <div class="title line-ellipsis">
                <span>{{filmes[index].nm}}</span>
                <span class="price-block">
                  <span class="price">{{filmes[index].sellPrice}}</span>
                  <span class="q">元起</span>
                </span>
              </div>
              <div class="location-block box-flex">
                <div class="flex line-ellipsis">{{filmes[index].addr}}</div>
                <div class="distance">{{filmes[index].distance}}</div>

              </div>
              <div class="flex"></div>
              <div class="label-block">
                <div class="endorse">改签</div>
                <div class="snack">小吃</div>
                <div class="vipTag">折扣卡</div>
                <div class="hallType">IMAX厅</div>
                <div class="hallType">RealD 6FL厅</div>
                <div class="hallType">4DX厅</div>
                <div class="hallType">儿童厅</div>
              </div>
              <div class="discount-block">
                <div class="Tadd">
                  <div class="discount-label normal card">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                         alt="">
                  </div>
                  <div class="discount-label-text">{{filmes[index].promotion.cardPromotionTag}}</div>
                </div>

              </div>
            </div>
            <div class="min-show-block  disabled  J-fload">
              <span>近期场次：</span>
              <span class="time-line">{{filmes[index].showTimes}}</span>
              <!-- <span class="time-line"> 11:45 </span>
              <span class="time-line"> 13:00</span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import icon from '../../public/icon/iconfont.css'
import axios from 'axios'
import { Indicator } from 'mint-ui'


export default {
  data () {
    return {
      datalist: {},//头部数据
      path: {}, //头部图片过滤
      arr: {},  //评论计算
      filmes: {}, //影院对象
      offset: 0,  //传给后端的影院值
      total: 56, //影院总长度
      isShow: false,
      time: [],   //日期对象
      current: 0, //加载数据需要的属性
      day: [],  //日期
      days: '', //获取点击日期
      today: '', //获取今天日期
      isshowsc: true, //判断电影是否上映然后显示或者隐藏
      ell: '', //动态切换数据
      checkType: false  //动态切换font-size
    }
  },
  created () {
    //懒加载
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    //片头请求
    axios({
      url: '/ajax/detailmovie?movieId=248172',

    }).then(res => {
      this.path = this.$options.methods.handlePath(res.data.detailMovie.img)
      this.datalist = res.data.detailMovie
      let nodat = new Date()
      let a = nodat.getFullYear()
      let b = nodat.getMonth() + 1
      let c = nodat.getDate()
      if (b < 10) {
        b = '0' + b
      }
      let d = a + '-' + b + '-' + c
      if (res.data.detailMovie.rt > d) {
        this.isshowsc = false
        this.checkType = true
        this.ell = res.data.detailMovie.wish + '人想看'

      } else {
        this.checkType = false
        this.isshowsc = true
        this.ell = res.data.detailMovie.sc
        this.arr = this.$options.methods.sum(res.data.detailMovie.snum)

      }

      Indicator.close()
    })
  },

  mounted () {
    //懒加载
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });

    //日期请求
    axios({
      method: 'post',
      url: '/ajax/movie?forceUpdate=1557386439279',
      data: {
        'movieId': '248172',
        'day': '2019-05-10',
        'offset': '0',
        'limit': '20',
        'districtId': '-1',
        'lineId': '-1',
        'hallType': '-1',
        'brandId': '-1',
        'serviceId': ' -1',
        'areaId': '-1',
        'stationId': '-1',
        'updateShowDay': 'true',
        'reqId': '1557386661020',
        'cityId': '65'
      }
    }).then(res => {
      this.time = this.$options.methods.timedata(res.data.showDays.dates)
      for (let i = 0; i < res.data.showDays.dates.length; i++) {
        this.day.push(res.data.showDays.dates[i].date)
      }

    })
    //影院请求
    axios({
      method: 'post',
      url: '/ajax/movie?forceUpdate=1557459142350',

      data: {
        'movieId': '248172',
        'day': this.today,
        'offset': '0',
        'limit': '20',
        'districtId': '-1',
        'lineId': '-1',
        'hallType': '-1',
        'brandId': '-1',
        'serviceId': ' -1',
        'areaId': '-1',
        'stationId': '-1',
        'updateShowDay': 'true',
        'reqId': '1557459142180',
        'cityId': '65'
      }
    }).then(res => {

      this.filmes = res.data.cinemas


    })
    window.onscroll = this.handScroll
  },
  destroyed () {
    window.onscroll = null
  },

  methods: {
    //过滤方法
    handlePath (path) {
      return path.replace('w.h', '148.208');
    },
    //评论计算的方法
    sum (arr) {


      if (arr > 1000000) {
        arr = arr / 10000
        arr = Math.round(arr * 100) / 100 + ''
        arr = arr.slice(0, 5)
        return '(' + arr + '万人评' + ')'

      } if (arr > 100000) {
        arr = arr / 10000
        arr = Math.round(arr * 100) / 100 + ''
        arr = arr.slice(0, 4)
        return '(' + arr + '万人评' + ')'
      } else {
        arr = arr / 10000
        arr = Math.round(arr * 100) / 100 + ''
        arr = arr.slice(0, 3)
        return '(' + arr + '万人评' + ')'
      }



    },

    //滚动加载的方法 和 滚动请求
    zxloadMore () {
      if (this.filmes.length > 40 && this.filmes.length <= this.total) {
        return
      } else {
        this.offset += 20

      }
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      axios({
        method: 'post',
        url: '/ajax/movie?forceUpdate=1557470548690',
        data: {
          'movieId': '248172',
          'day': this.days,
          'offset': this.offset,
          'limit': '20',
          'districtId': '-1',
          'lineId': '-1',
          'hallType': '-1',
          'brandId': '-1',
          'serviceId': ' -1',
          'areaId': '-1',
          'stationId': '-1',
          'updateShowDay': 'true',
          'reqId': '1557470548682',
          'cityId': '65'
        },

      }).then(res => {
        this.filmes = [...this.filmes, ...res.data.cinemas]
        Indicator.close()
      })
      Indicator.close()
    },
    //详情页跳转
    qiehuandetail () {

    },
    //日期待完成...
    timedata (time) {
      this.today = time[0].date //获取今天的日期 传给today 为了要那天的数据如果写死，则会在第二天返回空数据

      let time2 = []
      for (let i = 0; i < time.length; i++) {
        let a = time[i].date.slice(4, 5)
        let b = time[i].date.slice(7, 8)
        let c = time[i].date.slice(5, 7)
        let d = time[i].date.slice(8, 10)
        a = '月'
        b = '日'
        let f = c + a + d + b
        time2.push(f)
      }

      let arry = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']


      time2[0] = "今天" + time2[0]
      time2[1] = '明天' + time2[1]
      time2[2] = '后天' + time2[2]


      return time2
    },
    //点击特殊样式 和请求
    handedata (index) {
      this.current = index

      this.days = this.day[index]

      axios({
        method: 'post',
        url: '/ajax/movie?forceUpdate=1557486095840',
        data: {
          'movieId': '248172',
          'day': this.days,
          'offset': '0',
          'limit': '20',
          'districtId': '-1',
          'lineId': '-1',
          'hallType': '-1',
          'brandId': '-1',
          'serviceId': '-1',
          'areaId': '-1',
          'stationId': '-1 ',
          'updateShowDay': 'false',
          'reqId': '1557484634327',
          'cityId': '65'
        }
      }).then(res => {
        this.filmes = res.data.cinemas

      })
    },

    //吸顶效果
    handScroll () {
      if ((document.documentElement.scrollTop || document.body.scrollTop) >= 200) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }


  }

}

</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  display: block;
}
ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}
.Tnav {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  overflow: hidden;
  .Tnav-header {
    display: block;
    font-size: 18px;
    -webkit-box-flex: 1;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0 52.5px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    float: right;
    width: 200px;
  }
  .Tnav-left {
    height: 50.5px;
    line-height: 50.5px;
    width: 50px;
    float: left;
    a {
      height: 50px;
      width: 22.5px;
      line-height: 50px;
      padding: 0 15px;
      display: inline-block;
      .icon-zuojiantou {
        display: inline-block;
        width: 22.5px;
        height: 22.5px;
        vertical-align: middle;
        position: relative;
      }
    }
  }
}

//图片
.movie-detail {
  height: 188px;
  position: relative;
  cursor: pointer;
  .movie-filter {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #333;
  }
  .poster-bg {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    -webkit-filter: blur(1.2rem);
    filter: blur(1.2rem);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.55;
  }
  .arrow-g {
    position: absolute;
    width: 10px;
    right: 15px;
    top: 50%;
  }
}

.detail {
  height: 150px;
  padding: 19px 30px 19px 15px;
  img {
    width: 110px;
    height: 150px;
    box-sizing: border-box;
    display: inline-block;
  }
}
.flex {
  flex: 1;
}
.box-flex {
  display: flex;
}
.content {
  overflow-x: hidden;
  margin-left: 12.5px;
  line-height: 1;
  color: #fff;
  .title {
    font-size: 20px;
    margin-top: 2px;
    font-weight: 700;
    overflow: hidden;
  }
  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .score {
    font-size: 18px;
    font-weight: 700;
    color: #fc0;
    margin-top: 11px;
  }
  .snum,
  .type,
  .src,
  .title-en-name,
  .pubDesc {
    margin-top: 10px;
    font-size: 12px;
    color: #fff;
    opacity: 0.8;
  }
}
#showDays {
  width: 100%;
  background-color: #fff;
  overflow-x: scroll;
  height: 45px;
}
.cinema-list .list-wrap {
  background-color: #fff;
  .item {
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    border-bottom: 0.5px rgb(155, 155, 155, 0.3) solid;
  }
  .title-block {
    display: block;
    .title {
      height: 23px;
      line-height: 23px;
      font-size: 16px;
      color: #000;
      .price-block {
        padding-top: 9px;
        padding-left: 3px;
        .price {
          font-size: 18px;
          color: #f03d37;
        }
        .q {
          margin-left: 3px;
          color: #f03d37;
          font-size: 11px;
        }
      }
    }
    .location-block {
      margin-top: 6px;
      font-size: 13px;
      color: #666;
    }
    .label-block {
      height: 17px;
      line-height: 17px;
      margin-top: 4px;
      margin-bottom: 4px;
      overflow: hidden;
      font-size: 0;
      flex-shrink: 0;
      div {
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: 0.6rem;
      }
      div + div {
        margin-left: 5px;
      }
    }
    .discount-block {
      color: #999;
      margin-bottom: 4px;

      .discount-label {
        width: 15px;
        height: 14px;
        position: relative;
        top: 3px;
        display: inline-block;
        img {
          width: 15px;
          height: 14px;
          display: inline-block;
        }
      }
    }
    .discount-label-text {
      margin-left: 3px;
      font-size: 11px;
      display: inline-block;
    }
  }
  .min-show-block {
    padding: 0 15px 0 0;
    margin-right: -15px;
    line-height: 1.5;
    font-size: 0;

    span {
      font-size: 12px;
      color: #999;
    }
    .time-line {
      display: inline-block;
      position: relative;
    }
  }
  .cinema-list .location-block,
  .cinema-list .price-block,
  .cinema-list .title-block {
    line-height: 1.5;
  }
  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .cinema-list .list-wrap .location-block .distance,
  .cinema-list .list-wrap .location-block .region {
    margin-left: 5px;
  }
  .flex {
    flex: 1;
  }

  .endorse,
  .hallType {
    color: #589daf;
    border: 1px solid #589daf;
  }
  .snack,
  .vipTag {
    color: #f90;
    border: 1px solid #f90;
  }
  .cinema-list .list-wrap .price-block .d,
  .cinema-list .list-wrap .price-block .price,
  .cinema-list .list-wrap .price-block .q {
    color: #f03d37;
  }
}
.min-line {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  overflow-x: scroll;
  height: 45px;
  white-space: nowrap;
  z-index: 100;
}
.min-line::-webkit-scrollbar {
  display: none;
}
#showDays #timeline {
  width: 100%;
  background-color: #fff;
  overflow-x: scroll;
  height: 45px;
}
//默认浏览器滚动条隐藏,有兼容问题
#timeline::-webkit-scrollbar {
  display: none;
}
#timeline {
  padding: 0;
  margin: 0;
  white-space: nowrap;
}
#timeline .active {
  border-bottom: 2px solid #f03d37;
  color: #f03d37;
}
#timeline li {
  position: relative;
  display: inline-block;
  width: 115px;
  line-height: 43px;
  margin-left: 4.5px;
  font-size: 14px;
  text-align: center;
  list-style: none;
  color: #666;
}
</style>