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
  <header class="Tnav">
    <div class="Tnav-left">
      <a href="#"><i class="iconfont icon-zuojiantou"></i></a>
    </div>
    <h1 class="Tnav-header">{{this.datalist.nm}}</h1>
  </header>

</template>
<script>
import icon from '../../public/icon/iconfont.css'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: {}
    }
  },
  created () {
    axios({
      url: '/ajax/detailmovie?movieId=248172',
    }).then(res => {
      this.datalist = res.data.detailMovie
      console.log(res.data.detailMovie)
    })
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
}
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
}
.Tnav-left a {
  height: 50px;
  width: 22.5px;
  line-height: 50px;
  padding: 0 15px;
  display: inline-block;
}
.icon-zuojiantou {
  display: inline-block;
  width: 22.5px;
  height: 22.5px;
  vertical-align: middle;
  position: relative;
}
</style>