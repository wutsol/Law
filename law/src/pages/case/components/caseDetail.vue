<template>
  <div class="wraper">
    <case-header :title="headerTitle"></case-header>
    <case-detail-banner :smallTitle="smallTitle" :bigTitle="bigTitle"></case-detail-banner>
  </div>
</template>

<script>
import CaseHeader from 'common/Header'
import CaseDetailBanner from './detailBanner'
export default {
  name: 'CaseDetail',
  components: {
    CaseHeader,
    CaseDetailBanner
  },
  data () {
    return {
      headerTitle: '案例库',
      bigTitle: '',
      smallTitle: ''
    }
  },
  created () {
    this.bigTitle = this.$route.query.bigTitle
    this.smallTitle = this.$route.query.smallTitle // 接受传递过来的数据
  }
}
</script>

<style lang="stylus" scoped>

</style>
