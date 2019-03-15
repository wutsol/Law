<template>
  <div class="law"> <!-- 使用组件时最外层必须包裹一个div -->
    <div class="law-title border-bottom">法条预测</div>
    <ul>
      <li
        class="law-content"
        v-for="(item, index) of lawList"
        :key="index"
      >
        刑法： 第 {{item}} 条
        <i-circle
          :size="24"
          :trail-width="4"
          :stroke-width="5"
          :percent="0"
          stroke-linecap="square"
          stroke-color="#43a3fb"
        >
          <div class="demo-Circle-custom">
            <span>{{probList[index]}}</span>
          </div>
        </i-circle>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ReportLaw',
  props: {
    lawList: Array,
    probList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .law
    background-color: #fff
    margin-top .2rem
    .law-title
      height 1.2rem
      line-height 1.2rem
      font-size .4rem
      font-weight 400
      text-align center
    .law-content
      padding .4rem
      font-size .3rem
      line-height .55rem
      .ivu-chart-circle
        float right
        .demo-Circle-custom
          text-align center
          & span
            display block
            color #657180
            font-size .08rem
  </style>
