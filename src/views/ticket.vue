<template>
  <div>
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
    <nav class="nav">
      <div>
        <a href=""><i></i></a>
      </div>
      <h1 class="Tnav-header">{{this.datalist.nm}}</h1>
    </nav>

  </div>

</template>
<script>
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
.nav {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.Tnav-header {
  display: block;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  margin: 0 52.5px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>