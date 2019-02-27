<template>
  <div class="case"> <!-- 使用组件时最外层必须包裹一个div -->
    <case-header :title="title"></case-header>
    <case-pictures :imgUrl="imgUrl" :showAlpha="showAlpha"></case-pictures>
    <case-classify :classifyList="classifyList"></case-classify>
  </div>
</template>

<script>
import axios from 'axios'
import CaseHeader from 'common/Header'
import CasePictures from 'common/Pictures'
import CaseClassify from './components/classify'
export default {
  name: 'Case',
  components: {
    CaseHeader,
    CasePictures,
    CaseClassify
  },
  data () {
    return {
      title: '案例库',
      imgUrl: '',
      classifyList: [],
      showAlpha: true
    }
  },
  methods: {
    getCaseInfo () {
      axios.get('/api/case.json') // 通过创建static目录下的mock文件获取ajax数据
        .then(this.getCaseInfoSucc)
    },
    getCaseInfoSucc (res) { // 数据的获取
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgUrl = data.imgUrl
        this.classifyList = data.classifyList
      }
    }
  },
  mounted () {
    this.getCaseInfo()
  }
}

</script>

<style lang="stylus" scoped>
  .case
    background-color: #eee
</style>
