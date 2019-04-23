<template>
  <div>
    <home-header :title="title"></home-header>
    <home-pictures :imgUrl="imgUrl"></home-pictures>
    <home-icons :list="iconList"></home-icons>
    <home-recommend></home-recommend>
    <div class="home-info"></div>
  </div>
</template>

<script>
import HomeHeader from 'common/HomeHeader'
import HomePictures from 'common/Pictures'
import HomeIcons from './components/iconSwiper'
import HomeRecommend from './components/Recommend'
// import axios from 'axios'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomePictures,
    HomeIcons,
    HomeRecommend
  },
  data () {
    return {
      title: '法务通',
      iconList: [{
        'id': '0001',
        'desc': '辅助办案'
      }, {
        'id': '0002',
        'desc': '罪名查询'
      }, {
        'id': '0003',
        'desc': '法条查询'
      }, {
        'id': '0004',
        'desc': '案例查询'
      }],
      imgUrl: 'http://img.smzy.com/Soft/UploadPic/2016-10/2016102516415011331.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-info
    height 1rem
    background-color: #d2d2d2
</style>
