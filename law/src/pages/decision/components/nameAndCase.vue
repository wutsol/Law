<template>
  <div class="name">
    <div class="title border-bottom">罪名预测与案例推荐</div>
    <Collapse simple accordion> <!-- 折叠面板 -->
      <Panel
        v-for="(item, index) of accu_rele"
        :key="index"
      >
        <p
          class="test"
        >
          {{accu[index]}} <!-- 罪名改进 -->
          <!-- {{item[0].meta.accusation[0]}} --> <!-- 罪名 -->
        </p>
        <i-circle
          :size="24"
          :trail-width="4"
          :stroke-width="5"
          :percent="accu_prob[index]"
          stroke-linecap="square"
          stroke-color="#43a3fb"
        >
          <div class="demo-Circle-custom">
            <span>{{accu_prob[index] + "%"}}</span>
          </div>
        </i-circle>
        <p slot="content">
          <Divider orientation="center" size="small">
            相关案例
          </Divider>
          <report-case :list="item"></report-case> <!-- 案例 -->
        </p>
      </Panel>
    </Collapse>
    <!-- <ul>
      <li
        class="accu-name"
        v-for="(item, index) of accu_rele"
        :key="index"
      >
      <div class="item-info">
        <p class="item-name">{{item[0].meta.accusation[0]}}</p>
      </div>
      <report-case :list="item"></report-case>
      </li>
    </ul> -->
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
    .test
      display inline-block
      margin-left -.15rem
      font-size .32rem
      color #333
    .ivu-chart-circle
      float right
      .demo-Circle-custom
        margin-top .5rem
        & span
          display block
          color #657180
          font-size .2rem
    .title
      height 1.2rem
      line-height 1.2rem
      font-size .4rem
      font-weight 400
      text-align center
    .item-info
      // height 1.25rem
      line-height 1.1rem
      background-color: #fff
      ellipsis()
      .item-name
        padding-left .4rem
        height .8rem
        font-size .32rem
        font-weight 450
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
