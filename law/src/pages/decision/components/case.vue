<template>
  <div class="case">
    <div class="case-title border-bottom">
      <span class="iconfont case-title-cion">&#xe611;</span>
      相关案例
    </div>
    <ul>
      <li
        class="case-detail"
        v-for="item of caseList"
        :key="item.id"
      >
        <div class="case-detail-title">{{item.title}}</div>
        <div class="case-detail-border"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ReportCase',
  props: {
    caseList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .case
    margin .37rem 0 1rem
    background-color: #fff
    .case-title
      padding .15rem $textPadding
      height .7rem
      line-height .7rem
      font-size .38rem
      font-weight 420
      color #666
      .case-title-cion
        font-size .42rem
    .case-detail
      padding .3rem $textPadding 0 $textPadding
      .case-detail-title
        ellipsis()
      .case-detail-border
        itemborder()
        height .1rem
        margin: 0 .1rem
        padding-top .2rem
</style>
