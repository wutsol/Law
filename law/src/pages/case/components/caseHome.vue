<template>
  <div class="wraper">
    <case-header :title="headerTitle"></case-header>
    <case-banner :smallTitle="smallTitle" :bigTitle="bigTitle"></case-banner>
    <case-list :list="list"></case-list>
  </div>
</template>

<script>
// import { mapState } from 'vuex' // vuex高级一些的API
import axios from 'axios'
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
      list: [],
      lastId: ''
      // change: {
      //   background-color: '#fff'
      // }
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/caseDetail.json', { // 这里用动态路由，获取不同案例，取代之前所有案例与罪名放在同一文件下，
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.caseList
        this.bigTitle = data.upperclass
        this.smallTitle = data.title
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  activated () { // 当城市发生变化时要重新发送ajax请求
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  }
  // computed: {
  //   ...mapState(['list']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
  // },
  // created () {
  //   this.bigTitle = this.$route.query.bigTitle
  //   this.smallTitle = this.$route.query.smallTitle // 接受传递过来的数据
  // }
}
</script>

<style lang="stylus" scoped>
  .wraper
    background-color: #eee
</style>
