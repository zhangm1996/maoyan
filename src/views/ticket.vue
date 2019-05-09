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
            <div class="score line-ellipsis">{{datalist.sc}}
              <span class="snum">{{arr}}</span>
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
        <div class="arrow-g">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <div id="showDays">
        <ul id="timeline"
            class="mb-line-b">
          <router-link to=''
                       tag='li'
                       activeClass='chosen'
                       class="showDay"
                       v-for="data in time"
                       :key="data.item">{{data}}</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import icon from '../../public/icon/iconfont.css'
import axios from 'axios'

export default {
  data () {
    return {
      datalist: {},
      path: {},
      arr: {},
      time: []


    }
  },

  created () {
    axios({
      url: '/ajax/detailmovie?movieId=248172',

    }).then(res => {
      this.path = this.$options.methods.handlePath(res.data.detailMovie.img)
      this.arr = this.$options.methods.sum(res.data.detailMovie.snum)
      this.datalist = res.data.detailMovie
    })

  },
  mounted () {
    axios({
      method: 'post',
      url: '/ajax/movie?forceUpdate=1557386439279',
      data: {
        'movieId': '248172',
        'day': '2019-05-09',
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


    })
  },
  methods: {
    handlePath (path) {
      return path.replace('w.h', '148.208');
    },
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
    timedata (time) {
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
      return time2
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
    display: inline-block;
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
#showDays,
#showDays #timeline {
  width: 100%;
  background-color: #fff;
  overflow-x: scroll;
  height: 45px;
}
#showDays #timeline {
  padding: 0;
  margin: 0;
  white-space: nowrap;
}
#showDays #timeline .showDay.chosen {
  border-bottom: 2px solid #f03d37;
  color: #f03d37;
}
#showDays #timeline .showDay {
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