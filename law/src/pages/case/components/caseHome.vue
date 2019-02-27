<template>
  <div class="wraper">
    <case-header :title="headerTitle"></case-header>
    <case-banner :smallTitle="smallTitle" :bigTitle="bigTitle"></case-banner>
    <case-list :list="list"></case-list>
  </div>
</template>

<script>
import CaseHeader from 'common/Header'
import CaseBanner from './detailBanner'
import CaseList from 'common/Case'
export default {
  name: 'CaseHome',
  components: {
    CaseHeader,
    CaseBanner,
    CaseList
  },
  data () {
    return {
      headerTitle: '案例库',
      bigTitle: '',
      smallTitle: '',
      list: []
    }
  },
  created () {
    this.bigTitle = this.$route.query.bigTitle
    this.smallTitle = this.$route.query.smallTitle // 接受传递过来的数据
    this.list = this.$route.query.list
  }
}
</script>

<style lang="stylus" scoped>
  .wraper
    background-color: #eee
</style>
