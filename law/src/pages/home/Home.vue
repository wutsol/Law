<template>
  <div>
    <home-header :title="title"></home-header>
    <home-pictures></home-pictures>
    <home-icons :list="iconList"></home-icons>
  </div>
</template>

<script>
import HomeHeader from 'common/Header'
import HomePictures from 'common/Pictures'
import HomeIcons from './components/iconSwiper'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomePictures,
    HomeIcons
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
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
