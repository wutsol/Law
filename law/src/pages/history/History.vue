<template>
  <div class="wrapper">
    <home-header :title="title"></home-header>
    <div class="wrapper">
      <ul>
        <router-link
          tag="li"
          class="wrapper-item border-bottom"
          v-for='(item, index) of this.historyList'
          :key='index'
          :to="'/baikeDetail/' + item.articleTitle"
        >
          <div class="item-info">
            <p class="item-title">{{item.articleTitle}}</p>
            <!-- <p class="item-label">{{item.contentLabels[0]}}{{item.contentLabels[1]}}</p> -->
            <p class="item-desc">{{item.publishDate}}</p>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex' // vuex高级一些的API , mapMutations
import HomeHeader from 'common/Header'
export default{
  name: 'History',
  components: {
    HomeHeader
  },
  data () {
    return {
      title: '我的足迹'
    }
  },
  computed: {
    ...mapState(['historyList']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .wrapper
    margin-top $headerHeight + .2rem
    background-color: #FFF
    .wrapper-item
      position relative
      margin-top .08rem
      width 100%
      height 2.2rem
    .item-info
      padding 0 .1rem 0 .2rem
      min-width 0 // 使省略号正常显示
      .item-title
        line-height .45rem
        font-size .32rem
      .item-desc
        position absolute
        right .08rem
        bottom .3rem
        line-height .44rem
        color #ccc
</style>
