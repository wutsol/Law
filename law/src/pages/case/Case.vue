<template>
  <div class="case"> <!-- 使用组件时最外层必须包裹一个div -->
    <case-header :title="title"></case-header>
    <case-pictures :imgUrl="imgUrl"></case-pictures>
    <case-search :nameList="nameList"></case-search>
    <case-classify :classifyList="classifyList"></case-classify>
  </div>
</template>

<script>
import axios from 'axios'
import CaseHeader from 'common/Header'
import CasePictures from 'common/Pictures'
import CaseSearch from './components/caseSearch'
import CaseClassify from './components/classify'
// import { mapState } from 'vuex'
export default {
  name: 'Case',
  components: {
    CaseHeader,
    CasePictures,
    CaseSearch,
    CaseClassify
  },
  data () {
    return {
      title: '案例库',
      imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551018518&di=370e53fb5e39f42594a6009f0513fa39&src=http://img3.iyiou.com/Cover/2016-12-04/hangye-falvfuwu1204.jpg',
      classifyList: [],
      nameList: []
      // lastList: []
      // {
      //   'id': '00010',
      //   'title': '军人违反职业罪'
      // }, {
      //   'id': '00014',
      //   'title': '路冲一次'
      // }],
      // nameList: [{
      //   'id': '0001',
      //   'title': '虐待俘虏罪'
      // }
    }
  },
  methods: {
    getCaseInfo () {
      axios.get('/api/classify') // 获取二级标题
        .then(this.getCaseInfoSucc)
    },
    getCaseInfoSucc (res) { // 数据的获取
      if (res && res.data) {
        this.classifyList = res.data
      }
      // res = res.data
      // if (res.ret && res.data) {
      //   const data = res.data
      //   this.imgUrl = data.imgUrl
      //   this.classifyList = data.classifyList
      // }
    }
  // res => {
  //    this.classifyList = res.data
  //     }
  //   getCrimeName () {
  //     axios.get('/api/crimeName.json') // 获取202个罪名
  //       .then(this.getCrimeNameSucc)
  //   },
  //   getCrimeNameSucc (res) {
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       this.nameList = data.nameList
  //     }
  //   }
  },
  mounted () {
    this.getCaseInfo()
  }
  // computed: {
  //   ...mapState(['list'])
  // },
  // mounted () {
  //   this.lastList = this.list
  //   this.getCaseInfo()
  // }
  // activated () { // 当城市发生变化时要重新发送ajax请求
  //   if (this.lastList !== this.list) {
  //     this.lastList = this.list
  //     this.getCaseInfo()
  //   }
  // }
}

</script>

<style lang="stylus" scoped>
  .case
    background-color: #eee
</style>
