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
import axios from 'axios'
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
      recommendList: [{
        'id': '00001',
        'title': '政府强拆民房拒不承认 律师巧妙维权终获正义',
        'desc': '王文梅(化名)等两人均系四川省眉山市富牛镇某村村民，1998年响应原眉山地区行政'
      }, {
        'id': '00002',
        'title': '政府强拆民房拒不承认 律师巧妙维权终获正义',
        'desc': '王文梅(化名)等两人均系四川省眉山市富牛镇某村村民，1998年响应原眉山地区行政'
      }, {
        'id': '00003',
        'title': '政府强拆民房拒不承认 律师巧妙维权终获正义',
        'desc': '王文梅(化名)等两人均系四川省眉山市富牛镇某村村民，1998年响应原眉山地区行政'
      }],
      iconList: [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能决策'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '案例库'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '法条库'
      }],
      imgUrl: 'http://img.smzy.com/Soft/UploadPic/2016-10/2016102516415011331.jpg'
    }
  },
  // methods: {
  //   test () {
  //     const MongoClient = require('mongodb').MongoClient
  //     const DB_CONN_STR = 'mongodb://user1:user1password@3.16.128.130:27017/law'

  //     const selectData = function (db, callback) {
  //       const collection = db.collection('final') // 连接到表
  //       const whereStr = {'accu_name': '徇私枉法罪'} // 查询数据
  //       collection.find(whereStr).toArray(function (err, result) {
  //         if (err) {
  //           console.log('Error:' + err)
  //           return
  //         }
  //         callback(result)
  //       })
  //     }

  //     MongoClient.connect(DB_CONN_STR, function (err, db) {
  //       if (err) {
  //         console.log('Error:' + err)
  //         return
  //       }
  //       console.log('连接成功！')
  //       selectData(db, function (result) {
  //         console.log(result)
  //         db.close()
  //       })
  //     })
  //   }
  // }
  methods: {
    getHomeInfo () {
      axios.get('/api/getLaw') // 通过创建static目录下的mock文件获取ajax数据,并根据请求的城市加载不同的home页面
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    // getHomeInfoSucc (res) { // 数据的获取
    //   res = res.data
    //   if (res.ret && res.data) {
    //     const data = res.data
    //     this.iconList = data.iconList
    //     this.recommendList = data.recommendList
    //     this.imgUrl = data.imgUrl
    //   }
    // }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .home-info
    height 1rem
    background-color: #AFAFAF
</style>
