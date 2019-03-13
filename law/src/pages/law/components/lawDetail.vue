<template>
  <div class="container">
    <law-header :title="headerTitle"></law-header>
    <ul class="item">
      <li
        v-for="(item, index) of lawList"
        :key="index"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script> // 二级标题
import axios from 'axios'
import LawHeader from 'common/Header'
export default {
  name: 'LawDetail',
  components: {
    LawHeader
  },
  data () {
    return {
      lawList: [],
      headerTitle: '法条库',
      lastId: ''
    }
  },
  methods: {
    getDetailInfo () { // 获取具体法条
      axios.get('/api/getLawDetail/' + this.$route.params.law
      ).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      if (res && res.data) {
        this.lawList = res.data[0].content
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.law
    this.getDetailInfo()
  },
  activated () { // 当内容发生变化时要重新发送ajax请求
    if (this.lastId !== this.$route.params.law) {
      this.lastId = this.$route.params.law
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .container
    margin-top $headerHeight
    .item
      padding: .4rem
      line-height .5rem
</style>
