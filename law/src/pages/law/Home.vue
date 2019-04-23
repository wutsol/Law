<template>
  <div>
    <home-header :title="title"></home-header>
    <!-- <home-pictures :imgUrl="imgUrl"></home-pictures> -->
    <home-search></home-search>
    <home-law></home-law>
  </div>
</template>

<script>
import HomeHeader from 'common/Header'
// import HomePictures from 'common/Pictures'
import HomeSearch from './components/search'
import HomeLaw from './components/title'
// import axios from 'axios'
export default{
  name: 'LawHome',
  components: {
    HomeHeader,
    // HomePictures,
    HomeSearch,
    HomeLaw
  },
  data () {
    return {
      title: '法条库'
    }
  }
  // methods: {
  //   getHomeInfo () {
  //     axios.get('/api/index.json') // 通过创建static目录下的mock文件获取ajax数据,并根据请求的城市加载不同的home页面
  //       .then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc (res) { // 数据的获取
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       this.iconList = data.iconList
  //       this.recommendList = data.recommendList
  //       this.imgUrl = data.imgUrl
  //     }
  //   }
  // },
  // mounted () {
  //   this.getHomeInfo()
  // }
}
</script>

<style lang="stylus" scoped>
</style>
