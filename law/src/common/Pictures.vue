<template>
  <div class="wraper">
    <img class="swiper-img" :src=imgUrl>
    <!-- <div class="search" v-show="showAlpha">
      <input class="search-input" placeholder="请输入罪名关键词...">
      <button class="search-btn">提交</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Pictures',
  props: {
    imgUrl: String
  }
}
</script>

<style lang="stylus" scoped>
  .wraper // 防止页面加载时有明显跳动
    position relative
    overflow hidden
    width 100%
    height 0
    padding-bottom 57%
    background-color #ccc
    .swiper-img
      width 100%
  //   .search
  //     position absolute
  //     top 2.2rem
  //     left .8rem
  //     font-size .3rem
  //     .search-input
  //       box-sizing border-box
  //       padding  0 .1rem
  //       height .8rem
  //       line-height .8rem
  //       width 4.8rem
  //       background-color: #eee
  //       color #333
  //       border-radius .1rem 0 0 .1rem
  //       opacity .8
  //     .search-btn
  //       position absolute
  //       top 0
  //       left 4.8rem
  //       width 1.1rem
  //       height .8rem
  //       line-height .8rem
  //       text-align center
  //       border-radius 0 .1rem .1rem 0
  //       background-color: #c86d60f5
  // .showAlpha
  //   opacity .8
</style>
