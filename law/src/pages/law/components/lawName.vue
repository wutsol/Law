<template>
  <div class="container">
    <law-header :title="headerTitle"></law-header>
    <law-banner :bigTitle="bigTitle" :title="lawTitle"></law-banner> <!-- :smallTitle="smallTitle" -->
    <div class="wrapper">
      <swiper :options="swiperOptions"> <!--  v-if="showSwiper" -->
        <!-- slides -->
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <router-link
            tag="div"
            class="wrapper-item border-bottom"
            v-for='item of page'
            :key='item.id'
            :to="'/lawDetail/' + item.law"
          >
            <div class="item-title">
             {{item.law}}
            </div>
          </router-link>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <loading :isSpinShow="isSpinShow"></loading>
  </div>
</template>

<script> // 二级标题
import axios from 'axios'
import LawHeader from 'common/Header'
import LawBanner from './lawBanner'
import Loading from 'common/Loading'
export default {
  name: 'LawName',
  components: {
    LawHeader,
    LawBanner,
    Loading
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 配置swiper,详情见swiper官网
        paginationType: 'fraction', // 使滚动形式变成1/30的类型
        observeParents: true, // 下面两行解决加载时尺寸出错的问题
        observer: true
      },
      lawList: [],
      headerTitle: '法条库',
      lawTitle: '条例',
      bigTitle: '',
      lastId: '',
      isSpinShow: false
    }
  },
  methods: {
    getDetailInfo () {
      if (this.isSpinShow === false) {
        this.isSpinShow = true
        // console.log(this.$route.params._id)
        axios.get('/api/getLaw/' + this.$route.params.title // 这里用动态路由，获取不同案例，取代之前所有案例与罪名放在同一文件下，不要使用下面注释的内容！！否则mongoose无法正确查找！！
          // params: {
          //   name: this.$route.params._id
          // }
        ).then(this.getDetailInfoSucc)
      }
    },
    getDetailInfoSucc (res) {
      if (res && res.data) {
        this.lawList = res.data
        this.isSpinShow = false
      }
      // res = res.data
      // if (res.ret && res.data) {
      //   const data = res.data
      //   this.accusationList = data.accusationList
      //   this.bigTitle = data.upperclass
      //   this.smallTitle = data.title
      // }
    }
  },
  computed: { // 实现多余的icon出现在第二张page上
    pages () {
      const pages = []
      this.lawList.forEach((item, index) => {
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
    this.bigTitle = this.$route.params.title
    this.lastId = this.$route.params.title
    this.getDetailInfo()
  },
  activated () { // 当城市发生变化时要重新发送ajax请求
    if (this.lastId !== this.$route.params.title) {
      this.bigTitle = this.$route.params.title
      this.lastId = this.$route.params.title
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .container >>> .swiper-container // 解决1/30被hidden的问题
      overflow: inherit
  .container
    background-color: #eee
    .wrapper
      margin-top .2rem
      background-color: #FFF
      .wrapper-item
        position relative
        width 100%
        height 1rem
        line-height 1rem
        padding-left .4rem
        padding-right .1rem
        font-size .25rem
      .item-title
        position absolute // 解决轮播中长度超过屏幕的问题
        left .4rem
        right 1rem
        top 0
        ellipsis()
      .swiper-pagination
        color #bbb
        bottom -.5rem // 使1/30在图片下方显示
</style>
