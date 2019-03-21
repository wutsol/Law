<template>
  <div class="container">
    <law-header :title="headerTitle"></law-header>
    <div class="baike">
      <div class="baike-title">{{this.articleTitle}}</div>
      <!-- <div class="baike-img">
        <img class="img-content" :src="imageUrl">
      </div> -->
      <div class="baike-date">
        <p class="date">{{this.publishDate}}</p>
      </div>
      <div
        class="baike-content"
        v-for="item of content"
        :key="item.articleId"
      >
        <!-- <p>&nbsp;</p> -->
        {{item}}
      </div>
      <!-- <div class="article-url">
        本文从无讼网站爬取，原文链接
        <a :href="this.articleUrl">{{this.articleUrl}}</a>
      </div> -->
    </div>
    <!-- <div class="law" ref="law">
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
    </div> -->
    <loading :isSpinShow="isSpinShow"></loading>
  </div>
</template>

<script> // 二级标题
import axios from 'axios'
import LawHeader from 'common/Header'
import Loading from 'common/Loading'
export default {
  name: 'BaikeDetail',
  components: {
    LawHeader,
    Loading
  },
  data () {
    return {
      headerTitle: '干货',
      lastId: '',
      isSpinShow: false,
      articleTitle: '',
      articleUrl: '',
      // imageUrl: '',
      // contentLabels: [],
      publishDate: '',
      // hitResult: '',
      content: []
    }
  },
  methods: {
    getDetailInfo () { // 获取具体干货
      if (this.isSpinShow === false) {
        this.isSpinShow = true
        axios.get('/api/getBaikeDetail/' + this.$route.params.articleTitle
        ).then(this.getDetailInfoSucc)
      }
    },
    getDetailInfoSucc (res) {
      if (res && res.data) {
        const data = res.data[0]
        this.articleTitle = data.articleTitle
        this.publishDate = data.publishDate
        this.articleUrl = data.articleUrl
        this.content = data.content
        this.isSpinShow = false
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.articleTitle
    this.getDetailInfo()
  },
  activated () { // 当内容发生变化时要重新发送ajax请求
    if (this.lastId !== this.$route.params.articleTitle) {
      this.lastId = this.$route.params.articleTitle
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
    .baike-title
      margin-top $headerHeight + .1rem
      padding .2rem
      min-height 1rem
      line-height .6rem
      text-align justify
      font-size .35rem
      color #4C4D4E
    // .baike-img
    //   width 100%
    //   height 3rem
    //   padding 0 .35rem 0 .35rem
    //   .img-content
    //     width 100%
    .baike-date
      margin-top .15rem
      position relative
      height .3rem
      padding-right .2rem
      color #B3B4B5
      .date
        position absolute
        right .35rem
    .baike-content
      margin .35rem 0
      padding 0 .35rem
      font-size .3rem
      line-height .6rem
      text-align justify
</style>
