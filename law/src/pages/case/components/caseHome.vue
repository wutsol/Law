<template>
  <div class="wraper">
    <case-header :title="headerTitle"></case-header>
    <!-- <case-banner :smallTitle="smallTitle" :bigTitle="bigTitle"></case-banner> -->
    <crime-concept ref="cons" :name="accu_name" :concept="accu_gainian"></crime-concept>
    <case-tab
      :accu_goucheng="accu_goucheng"
      :accu_jieshi="accu_jieshi"
      :accu_lian="accu_lian"
      :accu_rending="accu_rending"
      :list="list"
      :topHeight="topHeight"
    ><!-- :accu_gainian="accu_gainian" :accu_name="accu_name" -->
    </case-tab>
    <!-- <case-list :list="list"></case-list> -->
  </div>
</template>

<script> // 罪名详情页
// import { mapState } from 'vuex' // vuex高级一些的API
import axios from 'axios'
import CaseHeader from 'common/Header'
// import CaseBanner from 'common/Banner'
// import CaseList from 'common/Case'
import CrimeConcept from './crimeConcept'
import CaseTab from 'common/Tab2'
export default {
  name: 'CaseHome',
  components: {
    CaseHeader,
    // CaseBanner,
    CrimeConcept,
    // CaseList,
    CaseTab
  },
  data () {
    return {
      headerTitle: '案例库',
      accu_name: '',
      accu_gainian: [],
      accu_goucheng: [],
      accu_jieshi: [],
      accu_lian: [],
      // accu_liangxing: [],
      accu_rending: [],
      list: [],
      lastId: '',
      topHeight: 0
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/getDeatil/' + this.$route.params.accu_name)
      // { // 这里用动态路由，获取不同案例，取代之前所有案例与罪名放在同一文件下，
      //   params: {
      //     id: this.$route.params.id
      //   }
      // })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      // res = res.data
      if (res && res.data) {
        const data = res.data[0] // 由于数据是个只包含一个对象的数组，所以加【0】
        this.accu_name = data.accu_name
        this.accu_gainian = data.accu_gainian
        this.accu_goucheng = data.accu_goucheng
        this.accu_jieshi = data.accu_jieshi
        this.accu_lian = data.accu_lian
        this.accu_rending = data.accu_rending
        // this.accu_liangxing = data.accu_liangxing
        this.list = data.accu_fact
        // this.bigTitle = data.upperclass
        // this.smallTitle = data.title
        console.log(this.list)
      }
    }
  },
  mounted () {
    this.topHeight = this.$refs.cons.$el.scrollHeight + 56 // 获取concept的高度
    this.lastId = this.$route.params.accu_name
    this.getDetailInfo()
    // console.log(this.topHeight)
  },
  activated () { // 当城市发生变化时要重新发送ajax请求
    if (this.lastId !== this.$route.params.accu_name) {
      this.topHeight = this.$refs.cons.$el.scrollHeight + 56 // 目前数据加载过慢导致出错
      this.lastId = this.$route.params.accu_name
      this.getDetailInfo()
      // console.log(this.topHeight)
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
