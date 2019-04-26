<template>
  <div class="wrapper">
    <!-- <div class="home-border"></div> -->
    <Tabs size="default" class="tab">
      <TabPane label="罪名预测">
        <report-name
          :accu="accu"
          :accu_prob="accu_prob"
          :accu_rele="accu_rele"
          :seriesData="seriesData"
        >
        </report-name>
      </TabPane>
      <TabPane label="刑期预测">
      </TabPane>
      <TabPane label="相关法规">
      </TabPane>
      <TabPane label="相似案例">
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import ReportName from './nameAndCase'
export default {
  name: 'DecisionTab',
  components: {
    ReportName
    // Login,
    // Register
  },
  props: {
    accu: Array,
    accu_prob: Array,
    accu_rele: Array,
    seriesData: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .wrapper >>> .ivu-tabs-tab
  .wrapper >>> .ivu-tabs-tab-active
  .wrapper >>> .ivu-tabs-tab-focused
    width 25%
    float left
  // .wrapper >>> .ivu-tabs
  //   width 100%
  //   margin-top $headerHeight
  // .wrapper >>> .ivu-tabs-bar
  .wrapper >>> .ivu-tabs-nav-container
  .wrapper >>> .ivu-tabs-nav-scroll
  .wrapper >>> .ivu-tabs-nav-wrap
    width 100%
  // .wrapper >>> .ivu-tabs-tab // tab
  // .wrapper >>> .ivu-tabs-ink-bar
  //   color #9a9a9b
  //   width 20% !important
  //   width 25%
  // .wrapper >>> .ivu-tabs-tab-active // activetab
  //   font-size .36rem
  //   color #333
  .wrapper >>> .ivu-tabs-bar // 除去下划线
    border-bottom 0
    // margin-left .2rem
  .wrapper
    margin-top $headerHeight
    background-color: #FFF
    .home-border
      width 100%
      height 1rem
    // .tab
    //   margin-top -.8rem
    .myTab
      width 100%
      height 1.2rem
      line-height 1.2rem
      background-color: #f4f4f4ba
      .normal
        display inline-block
        font-size .28rem
        color #999
        width 20%
        text-align center
      .active
        font-size .4rem
        color #333
        font-weight 530
    .tab-con
      background-color: #FFF
</style>
