<template>
  <div class="wraper">
    <img class="swiper-img" :class="{showAlpha: showAlpha}" :src=imgUrl>
    <div class="search" v-show="showAlpha">
      <input class="search-input" placeholder="请输入">
      <button class="search-btn">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pictures',
  props: {
    imgUrl: String,
    showAlpha: Boolean
  }
}
</script>

<style lang="stylus" scoped>
  .wraper // 防止页面加载时有明显跳动
    overflow hidden
    width 100%
    height 0
    padding-bottom 57%
    background-color #ccc
    .swiper-img
      position relative
      width 100%
    .search
      position absolute
      top 3.2rem
      left 1rem
      font-size .3rem
      .search-input
        padding-left .1rem
        height .8rem
        line-height .8rem
        width 4.2rem
        background-color: #eee
        color #bbb
        border-radius .1rem 0 0 .1rem
        opacity .8
      .search-btn
        position absolute
        top 0
        left 4.2rem
        width 1.1rem
        height .8rem
        line-height .8rem
        text-align center
        border-radius 0 .1rem .1rem 0
        background-color: #60c86f
  .showAlpha
    opacity .8
</style>
