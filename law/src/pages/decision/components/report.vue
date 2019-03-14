<template>
  <div class="report"> <!-- 使用组件时最外层必须包裹一个div -->
    <Spin fix v-show="isSpinShow">
      <Icon type="load-c" size="30" class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
    <report-header :title="title"></report-header>
    <report-name
      :accu="accu"
      :accu_prob="accu_prob"
      :accu_rele="accu_rele"
    >
    </report-name>
    <!-- <ul>
      <li
        class="item"
        v-for="item of list"
        :key="item.id"
      > --> <!-- 跳转到detail页面，并防止router-link使字体变色 -->
        <!-- <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-border"></div>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
    <report-law :lawList="lawList"></report-law>
    <report-case :caseList="caseList"></report-case> -->
  </div>
</template>

<script>
import axios from 'axios'
import ReportHeader from 'common/Header'
import ReportLaw from './law'
import ReportCase from './case'
import ReportName from './nameAndCase'
export default {
  name: 'DecisionReport',
  components: {
    ReportHeader,
    ReportLaw,
    ReportCase,
    ReportName
  },
  data () {
    return {
      title: '分析报告',
      isSpinShow: false,
      accu: [], // 罪名
      accu_prob: [], // 罪名概率
      accu_rele: [], // 每个罪名相关案例
      impr: [], // 刑期
      tiaoli: [], // 法条
      tiaoli_prob: [] // 法条概率
      // list: [],
      // lawList: [],
      // caseList: []
    }
  },
  methods: {
    getReportInfo () {
      if (this.isSpinShow === false) {
        this.isSpinShow = true
        axios.request({ // 向django发送请求
          url: 'http://3.16.128.130:8050/predict',
          method: 'post',
          data: this.$route.params.fact
        }).then(this.getReportInfoSuc)
          .catch((response) => {
            console.log(response)
          })
      }
    },
    getReportInfoSuc (res) {
      if (res.status === 200) {
        const data = res.data
        this.accu = data.accu
        this.accu_prob = data.accu_prob
        this.accu_rele = data.accu_rele
        this.impr = data.impr
        this.tiaoli = data.tiaoli
        this.tiaoli_prob = data.tiaoli_prob
        this.isSpinShow = false
        console.log(this.accu)
      }
    }
  },
  mounted () {
    this.getReportInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .report
    background-color: #eee
    /* 旋转效果 */
    .demo-spin-icon-load
      animation: ani-demo-spin 1s linear infinite
    @keyframes ani-demo-spin
      from { transform: rotate(0deg)}
      50% { transform: rotate(180deg)}
      to { transform: rotate(360deg)}
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
