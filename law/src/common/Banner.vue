<template>
  <div class="banner border-bottom">
    <i>罪名</i>
    <i class="iconfont banner-icon">&#xe7ab;</i>
    <router-link
      tag="p"
      class="banner-bigTitle"
      to="/detail/0002"
     >
      {{bigTitle}}
   </router-link>
    <!-- <i class="iconfont banner-icon">&#xe7ab;</i>
    <i>{{smallTitle}}</i> -->
  </div>
</template>

<script> // 该部分实现类似导航功能
export default {
  name: 'Banner',
  props: {
    // smallTitle: String,
    bigTitle: String
  }
}
</script>

<style lang="stylus" scoped>
  // @import '~styles/variables.styl'
  .banner
    height .38rem
    line-height .38rem
    padding .45rem
    font-size .3rem
    background-color: #FFF
    .banner-icon
      height .4rem
      line-height .4rem
      margin .05rem
      color #666
      text-align center
      font-size .4rem
    .banner-bigTitle
      display inline
</style>
