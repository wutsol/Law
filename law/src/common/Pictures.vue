<template>
  <div class="wraper">
    <img class="swiper-img" :src=imgUrl>
  </div>
</template>

<script>
export default {
  name: 'Pictures',
  props: {
    imgUrl: String
  }
  // props: {
  //   imgUrl: String
  // }
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
      width 100%
</style>
