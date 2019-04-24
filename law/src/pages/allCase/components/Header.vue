<template>
  <div class="header border-bottom"> <!-- 为了页面向下滚动时header部分不动 -->
    <div class="header-left">
      <div class="iconfont back-icon" @click="handleClick">&#xe62c;</div>
    </div>
    <div class="header-middle">
      <i-input
        search
        enter-button
        v-model="keyword"
        placeholder="输入罪名关键词"
        @on-focus="handleFocus"
      >
      </i-input>
    </div>
    <router-link
      tag="div"
      class="header-right"
      to="/"
    >
      <div class="iconfont home-icon">&#xe61e;</div>
    </router-link>
    <!-- </div> -->
  </div>
</template>

<script> // 除主页的header
export default{
  name: 'CaseHeader',
  props: {
    title: String
  },
  data () {
    return {
      keyword: '',
      showAbs: true,
      opacityStyle: {
        opacity: 0
      },
      data4: ['中华人民共和国刑法', '中华人民共和国民法总则', '中华人民共和国劳动法']
    }
  },
  methods: {
    handleClick () {
      this.$router.go(-1) // 返回上一页
    },
    handleFocus () {
      console.log('hi')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .header
    display flex
    position fixed
    top 0
    width 100%
    z-index 100
    height $headerHeight
    line-height $headerHeight
    // background-color: $bgColor
    background-color: #FFF
    color: #fff
    // box-shadow 0 .05rem .1rem #8b8b8bd6
    .header-left
      width: .86rem
      float: left
      color #333
      .back-icon
        font-size: .48rem
        text-align: center
    .header-middle
      flex: 1
      font-size: .3rem
      // font-weight: 400
      padding .1rem 0
      color #333
      vertical()
    .header-right
      width: 1rem
      padding 0 .1rem
      float: right
      text-align center
      color #333 // 去除使用router-link后字体颜色的变化
      .home-icon
        font-size: .6rem
</style>
