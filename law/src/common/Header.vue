<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe622;</div>
    </div>
    <div class="header-middle">{{title}}</div>
    <div class="header-right">
      <div class="iconfont home-icon">&#xe61e;</div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display flex
    height $headerHeight
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff
    .header-left
      width: .86rem
      float: left
      .back-icon
        font-size: .46rem
        text-align: center
    .header-middle
      flex: 1
      font-size: .46rem
      font-weight: 400
      text-align: center
    .header-right
      width: .86rem
      padding 0 .1rem
      float: right
      text-align center
      color #fff // 去除使用router-link后字体颜色的变化
      .home-icon
        font-size: .6rem
</style>
