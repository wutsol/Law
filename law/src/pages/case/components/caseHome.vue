<template>
  <div class="wraper">
    <case-header :title="headerTitle"></case-header>
    <!-- <case-banner :smallTitle="smallTitle" :bigTitle="bigTitle"></case-banner> -->
    <crime-concept ref="cont" :name="accu_name" :concept="accu_gainian"></crime-concept>
    <case-tab
      ref="tab"
      :accu_goucheng="accu_goucheng"
      :accu_jieshi="accu_jieshi"
      :accu_lian="accu_lian"
      :accu_rending="accu_rending"
      :list="list"
      :topHeight="topHeight"
    ><!-- :accu_gainian="accu_gainian" :accu_name="accu_name" -->
    </case-tab>
    <Spin fix v-show="isSpinShow">
      <Icon type="load-c" size="30" class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
  </div>
</template>

<script> // 罪名详情页
// import { mapState } from 'vuex' // vuex高级一些的API
import axios from 'axios'
import CaseHeader from 'common/Header'
import CrimeConcept from './crimeConcept'
import CaseTab from 'common/Tab2'
export default {
  name: 'CaseHome',
  components: {
    CaseHeader,
    CrimeConcept,
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
      accu_rending: [],
      list: [],
      lastId: '',
      topHeight: 0,
      isSpinShow: false
    }
  },
  watch: {
    list () { // 在数据加载完成后再获取高度
      this.$nextTick(function () {
        this.getHeight()
      })
    }
  },
  methods: {
    getDetailInfo () {
      if (this.isSpinShow === false) {
        this.isSpinShow = true
        axios.get('/api/getAccusationDeatil/' + this.$route.params.accu_name)
        // { // 这里用动态路由，获取不同案例，取代之前所有案例与罪名放在同一文件下，
        //   params: {
        //     id: this.$route.params.id
        //   }
        // })
          .then(this.getDetailInfoSucc)
      }
    },
    getDetailInfoSucc (res) {
      if (res && res.data) {
        const data = res.data[0] // 由于数据是个只包含一个对象的数组，所以加【0】
        this.accu_name = data.accu_name
        this.accu_gainian = data.accu_gainian
        this.accu_goucheng = data.accu_goucheng
        this.accu_jieshi = data.accu_jieshi
        this.accu_lian = data.accu_lian
        this.accu_rending = data.accu_rending
        this.list = data.accu_fact
        this.isSpinShow = false
      }
    },
    getHeight () {
      this.topHeight = this.$refs.cont.$el.offsetHeight // 获取concept的高度
    }
  },
  mounted () {
    this.getDetailInfo()
    this.lastId = this.$route.params.accu_name
  },
  activated () { // 当城市发生变化时要重新发送ajax请求
    if (this.lastId !== this.$route.params.accu_name) {
      this.getDetailInfo()
      this.lastId = this.$route.params.accu_name
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wraper
    background-color: #eee
    /* 旋转效果 */
  .demo-spin-icon-load
    animation: ani-demo-spin 1s linear infinite
  @keyframes ani-demo-spin
    from { transform: rotate(0deg)}
    50% { transform: rotate(180deg)}
    to { transform: rotate(360deg)}
</style>
