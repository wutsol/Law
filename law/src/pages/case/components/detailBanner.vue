<template>
  <div class="banner border-bottom">
    <!-- <p>案例</p> -->
    <span class="iconfont icon"></span>
    <p>{{bigTitle}}</p>
    <p>{{smallTitle}}</p>
  </div>
</template>

<script> // 该部分实现类似导航功能
export default {
  name: 'CaseDetailBanner',
  props: {
    smallTitle: String,
    bigTitle: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .banner
    height .4rem
    line-height .4rem
    padding .5rem
    font-size $titleSize
</style>
