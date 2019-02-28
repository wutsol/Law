<template>
  <div class="container">
    <case-header :title="headerTitle"></case-header>
    <case-banner :smallTitle="smallTitle" :bigTitle="bigTitle"></case-banner>
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <router-link
          tag="div"
          class="wrapper-item border-bottom"
          v-for='item of page'
          :key='item.id'
          :to="'/caseDetail/' + item.id"
        >
          <div class="item-title">
            {{item.title}}
          </div>
        </router-link>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script> // 该Gallery为公用图片画廊,数据都为外部传递
import axios from 'axios'
import CaseHeader from 'common/Header'
import CaseBanner from 'common/Banner'
export default {
  name: 'CaseAccusation',
  components: {
    CaseHeader,
    CaseBanner
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 配置swiper,详情见swiper官网
        paginationType: 'fraction', // 使滚动形式变成1/30的类型
        observeParents: true, // 下面两行解决加载时尺寸出错的问题
        observer: true
      },
      accusationList: [],
      headerTitle: '案例库',
      bigTitle: '',
      smallTitle: '',
      lastId: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/accusation.json', { // 这里用动态路由，获取不同案例，取代之前所有案例与罪名放在同一文件下，
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.accusationList = data.accusationList
        this.bigTitle = data.upperclass
        this.smallTitle = data.title
      }
    }
  },
  computed: { // 实现多余的icon出现在第二张page上
    pages () {
      const pages = []
      this.accusationList.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container // 解决1/30被hidden的问题
      overflow: inherit
  .container
    background-color: #eee
    .wrapper
      margin-top .2rem
      background-color: #FFF
      .wrapper-item
        width 100%
        height 1rem
        line-height 1rem
        padding-left .4rem
        font-size .3rem
      .swiper-pagination
        color #bbb
        bottom -.5rem // 使1/30在图片下方显示
</style>
