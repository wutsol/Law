<template>
  <div class="report"> <!-- 使用组件时最外层必须包裹一个div -->
    <report-header :title="title"></report-header>
    <ul>
      <li
        class="item"
        v-for="item of list"
        :key="item.id"
      > <!-- 跳转到detail页面，并防止router-link使字体变色 -->
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-border"></div>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
    <report-law :lawList="lawList"></report-law>
    <report-case :caseList="caseList"></report-case>
  </div>
</template>

<script>
// import axios from 'axios'
import ReportHeader from 'common/Header'
import ReportLaw from './law'
import ReportCase from './case'
export default {
  name: 'DecisionReport',
  components: {
    ReportHeader,
    ReportLaw,
    ReportCase
  },
  data () {
    return {
      title: '分析报告',
      list: [],
      lawList: [],
      caseList: []
    }
  }
  // methods: {
  //   getReportInfo () {
  //     axios.get('/api/report.json')
  //       .then(this.getReportInfoSuc)
  //   },
  //   getReportInfoSuc (res) {
  //     res = res.data
  //     if (res.ret && res.data) { // 打字都给打错咯
  //       const data = res.data
  //       this.list = data.result
  //       this.lawList = data.lawList
  //       this.caseList = data.caseList
  //     }
  //   }
  // },
  // mounted () {
  //   this.getReportInfo()
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .report
    background-color: #eee
    .item-info
      padding .2rem
      background-color: #fff
      .item-title
        height .8rem
        line-height .8rem
        font-size .4rem
        font-weight 400
        padding-left .2rem
      .item-border
        itemborder()
      .item-desc
        margin .1rem 0
        padding 0 .2rem
        font-size .3rem
        line-height .5rem
  </style>
