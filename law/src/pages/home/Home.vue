<template>
  <div>
    <home-header :title="title"></home-header>
    <home-pictures></home-pictures>
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
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能分析'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能分析'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能分析'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能分析'
      }, {
        'id': '0005',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能分析'
      }, {
        'id': '0006',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能分析'
      }, {
        'id': '0007',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能分析'
      }, {
        'id': '0008',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能分析'
      }],
      recommendList: [{
        'id': '0001',
        'title': '政府强拆民房拒不承认 律师巧妙维权终获正义',
        'desc': '王文梅(化名)等两人均系四川省眉山市富牛镇某村村民，1998年响应原眉山地区行政王文梅(化名)等两人均系四川省眉山市富牛镇某村村民，1998年响应原眉山地区行政'
      }, {
        'id': '0002',
        'title': '政府强拆民房拒不承认 律师巧妙维权终获正义',
        'desc': '王文梅(化名)等两人均系四川省眉山市富牛镇某村村民，1998年响应原眉山地区行政'
      }, {
        'id': '0003',
        'title': '政府强拆民房拒不承认 律师巧妙维权终获正义',
        'desc': '王文梅(化名)等两人均系四川省眉山市富牛镇某村村民，1998年响应原眉山地区行政'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-info
    height 1rem
    background-color: #AFAFAF
</style>
