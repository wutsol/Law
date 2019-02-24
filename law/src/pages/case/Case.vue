<template>
  <div> <!-- 使用组件时最外层必须包裹一个div -->
    <case-header :title="title"></case-header>
    <case-pictures :imgUrl="imgUrl"></case-pictures>
  </div>
</template>

<script>
import axios from 'axios'
import CaseHeader from 'common/Header'
import CasePictures from 'common/Pictures'
export default {
  name: 'Case',
  components: {
    CaseHeader,
    CasePictures
  },
  data () {
    return {
      title: '案例库',
      imgUrl: ''
    }
  },
  methods: {
    getCaseInfo () {
      axios.get('/api/case.json') // 通过创建static目录下的mock文件获取ajax数据,并根据请求的城市加载不同的home页面
        .then(this.getCaseInfoSucc)
    },
    getCaseInfoSucc (res) { // 数据的获取
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgUrl = data.imgUrl
      }
    }
  },
  mounted () {
    this.getCaseInfo()
  }
}

</script>

<style lang="stylus" scoped>
</style>
