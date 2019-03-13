<template>
  <div>
    <home-header :title="title"></home-header>
    <home-pictures :imgUrl="imgUrl"></home-pictures>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <div class="home-info"></div>
  </div>
</template>

<script>
import HomeHeader from 'common/Header'
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
      recommendList: [],
      iconList: [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能决策'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '罪名库'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '法条库'
      }],
      imgUrl: 'http://img.smzy.com/Soft/UploadPic/2016-10/2016102516415011331.jpg'
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
  .home-info
    height 1rem
    background-color: #AFAFAF
</style>
