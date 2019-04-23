<template>
  <div class="container">
    <law-header :title="headerTitle"></law-header>
    <div class="law">
      <div class="law-title">{{this.chinese_name}}</div>
      <div class="law-info">
        <div class="info-department">
          【发布部门】  {{this.department}}
        </div>
        <div class="info-issue">
          【发文字号】  {{this.store_issue}}
        </div>
        <div class="info-time">
          <div class="time-start">【发布日期】  {{this.start_date}}</div>
          <div class="time-exec">【实施日期】  {{this.exec_date}}</div>
        </div>
        <div class="info-eff">
          <div class="effective">【时效性】  {{this.effective}}</div>
          <div class="level">【效力级别】  {{this.level}}</div>
        </div>
      </div>
      <div class="law-detail" v-for="(value, key, index) in article" :key="index">
        <div class="law-one">
          {{key}}  &ensp; {{value}}
        </div>
      </div>
    </div>
    <BackTop :height="100" :bottom="50" :right="15"></BackTop>
    <loading :isSpinShow="isSpinShow"></loading>
  </div>
</template>

<script> // 二级标题
import axios from 'axios'
import LawHeader from 'common/Header'
import Loading from 'common/Loading'
export default {
  name: 'LawDetail',
  components: {
    LawHeader,
    Loading
  },
  data () {
    return {
      headerTitle: '法条库',
      lastId: '',
      isSpinShow: false,
      chinese_name: '',
      department: '',
      store_issue: '',
      start_date: '',
      exec_date: '',
      effective: '',
      level: '',
      article: {}
    }
  },
  methods: {
    getDetailInfo () { // 获取具体法条
      if (this.isSpinShow === false) {
        this.isSpinShow = true
        axios.request({ // 向django发送请求,获取推荐内容
          url: 'http://47.101.221.46:8050/tiaoli2',
          method: 'post',
          data: this.$route.params.chinese_name
        }).then(this.getDetailInfoSucc)
          .catch((response) => {
            console.log(response)
          })
        // axios.get('/api/getLawDetail/' + this.$route.params.chinese_name
        // ).then(this.getDetailInfoSucc)
      }
    },
    getDetailInfoSucc (res) {
      if (res && res.data) {
        const data = res.data[0]
        this.chinese_name = data.chinese_name
        this.department = data.department // 发布部门
        this.store_issue = data.store_issue // 发文字号
        this.start_date = data.start_date // 发布日期
        this.exec_date = data.exec_date // 实施日期
        this.effective = data.effective // 时效性
        this.level = data.level // 效力级别
        this.article = data.article // 法条
        this.isSpinShow = false
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.chinese_name
    this.getDetailInfo()
  },
  activated () { // 当内容发生变化时要重新发送ajax请求
    if (this.lastId !== this.$route.params.chinese_name) {
      this.lastId = this.$route.params.chinese_name
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .container
    margin-top $headerHeight
    .law-title
      padding-top .2rem
      min-height 1rem
      line-height .6rem
      text-align center
      font-size .33rem
      font-weight 550
    .law-info
      font-size $detailSize
      // text-align center
      .info-department
      .info-issue
      .info-time
      .info-eff
        padding-left .2rem
        height .5rem
        line-height .5rem
      .info-time
      .info-eff
        display flex
        .time-start
        .time-exec
        .effective
        .level
          float left
          flex 1
    .law-detail
      font-size .3rem
      padding 0 .35rem
      .law-one
        margin .3rem 0
        line-height .5rem
  //   .item
  //     padding: .4rem
  //     line-height .5rem
</style>
