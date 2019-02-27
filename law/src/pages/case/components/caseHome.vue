<template>
  <div class="wraper">
    <case-header :title="headerTitle"></case-header>
    <case-banner :smallTitle="smallTitle" :bigTitle="bigTitle"></case-banner>
    <case-list :list="this.list" :style="[change]"></case-list>
  </div>
</template>

<script>
import { mapState } from 'vuex' // vuex高级一些的API
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
      change: {
        background-color: '#fff'
      }
    }
  },
  computed: {
    ...mapState(['list']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
  },
  created () {
    this.bigTitle = this.$route.query.bigTitle
    this.smallTitle = this.$route.query.smallTitle // 接受传递过来的数据
  }
}
</script>

<style lang="stylus" scoped>
  .wraper
    background-color: #eee
</style>
