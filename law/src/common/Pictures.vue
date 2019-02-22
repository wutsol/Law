<template>
  <div class="wraper">
    <img class="swiper-img" :src=imgUrl>
  </div>
</template>

<script>
export default {
  name: 'Pictures',
  data () {
    return {
      imgUrl: 'http://img.smzy.com/Soft/UploadPic/2016-10/2016102516415011331.jpg'
    }
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
