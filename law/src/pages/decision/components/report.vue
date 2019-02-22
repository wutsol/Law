<template>
  <div> <!-- 使用组件时最外层必须包裹一个div -->
    <report-header :title="title"></report-header>
    <ul>
      <li
        class="item"
        v-for="item of list"
        :key="item.id"
      > <!-- 跳转到detail页面，并防止router-link使字体变色 -->
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import ReportHeader from 'common/Header'
export default {
  name: 'DecisionReport',
  components: {
    ReportHeader
  },
  data () {
    return {
      title: '分析报告',
      list: []
    }
  },
  methods: {
    getReportInfo () {
      axios.get('/api/report.json')
        .then(this.getReportInfoSuc)
    },
    getReportInfoSuc (res) {
      res = res.data
      if (res.ret && res.data) { // 打字都给打错咯
        const data = res.data
        this.list = data.result
      }
    }
  },
  mounted () {
    this.getReportInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
