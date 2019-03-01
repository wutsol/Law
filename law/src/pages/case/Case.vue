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
      imgUrl: '',
      classifyList: [],
      nameList: []
      // lastList: []
    }
  },
  methods: {
    getCaseInfo () {
      axios.get('/api/case.json') // 获取二级标题
        .then(this.getCaseInfoSucc)
    },
    getCaseInfoSucc (res) { // 数据的获取
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgUrl = data.imgUrl
        this.classifyList = data.classifyList
      }
    },
    getCrimeName () {
      axios.get('/api/crimeName.json') // 获取202个罪名
        .then(this.getCrimeNameSucc)
    },
    getCrimeNameSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.nameList = data.nameList
      }
    }
  },
  mounted () {
    this.getCaseInfo()
    this.getCrimeName()
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
