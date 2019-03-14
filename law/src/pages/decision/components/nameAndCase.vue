<template>
  <div class="name">
    <div class="title border-bottom">罪名预测与案例推荐</div>
    <ul>
      <li
        class="accu-name"
        v-for="(item, index) of accu_rele"
        :key="index"
      >
      <div class="item-info">
        <p class="item-name">{{item[0].meta.accusation[0]}}</p>
        <div class="item-border"></div>
      </div>
      <report-case :list="item"></report-case>
      </li>
    </ul>
    <!-- <div class="case-title border-bottom">
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
    </ul> -->
  </div>
</template>

<script>
import ReportCase from './caseList'
export default {
  name: 'ReportName',
  props: {
    accu: Array,
    accu_prob: Array,
    accu_rele: Array
  },
  components: {
    ReportCase
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .name
    margin-top $headerHeight
    background-color: #FFF
    .title
      height 1.2rem
      line-height 1.2rem
      font-size .4rem
      font-weight 400
      text-align center
    // .accu-name
      // height 1.3rem
      // line-height 1.3rem
    .item-info
      padding-left .4rem
      height 1.25rem
      line-height 1.1rem
      background-color: #fff
      ellipsis()
      .item-name
        height 1rem
        font-size .3rem
      .item-border
        itemborder()
  // @import '~styles/mixins.styl'
  // .case
  //   margin .37rem 0 1rem
  //   background-color: #fff
  //   .case-title
  //     padding .15rem $textPadding
  //     height .7rem
  //     line-height .7rem
  //     font-size .38rem
  //     font-weight 420
  //     color #666
  //     .case-title-cion
  //       font-size .42rem
  //   .case-detail
  //     padding .3rem $textPadding 0 $textPadding
  //     .case-detail-title
  //       ellipsis()
  //     .case-detail-border
  //       itemborder()
  //       height .1rem
  //       margin: 0 .1rem
  //       padding-top .2rem
</style>
