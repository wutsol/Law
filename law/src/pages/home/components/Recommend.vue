<template>
  <div> <!-- 使用组件时最外层必须包裹一个div -->
    <div class="title border-top">最新案例</div>
    <recommend-case :list="list"></recommend-case>
    <div class="item-more">查看更多</div>
  </div>
</template>

<script>
import RecommendCase from 'common/Case'
export default {
  name: 'HomeRecommend',
  components: {
    RecommendCase
  },
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .title
    margin-top .3rem
    height 1rem
    line-height 1rem
    font-size .4rem
    text-align center
    background-color: #eee
    // border-top 1px solid #eee
    // box-shadow 0 1px 1px rgba(0,0,0,.1)
  .item-more
      height 1rem
      line-height 1rem
      text-align center
      font-size .3rem
      color #666
</style>
