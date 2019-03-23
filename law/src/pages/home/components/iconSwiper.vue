<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <router-link
          tag="div"
          class="icon"
          v-for='item of page'
          :key='item.id'
          :to="'/detail/' + item.id"
        >
          <div class="icon-image">
            <!-- <img class="icon-image-content" :src="item.imgUrl"> -->  <!-- src前必须加冒号 -->
            <Icon v-if="item.id === '0001'" class="icon-image-content" type="md-bulb"
            size=55 />
            <!-- <Icon type="md-ionitron" /> -->
            <Icon v-if="item.id === '0002'" class="icon-image-content" type="md-document"
            size=55 />
            <Icon v-if="item.id === '0003'" class="icon-image-content" type="md-bookmarks" size=55 />
            <Icon v-if="item.id === '0004'" class="icon-image-content" type="ios-bookmarks" size=55 />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </router-link>
      </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false // 阻止自动滚动
        // onClick (swiper) {
        //   // alert('点击', swiper.clickedIndex)
        //   console.log('当前点击索引：', swiper.clickedSlide)
        //   // vm.handleClickSlide(swiper.clickIndex)
        // }
      }
    }
  },
  computed: { // 实现多余的icon出现在第二张page上
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
  // methods: {
  //   handleClickSlide (index) {
  //     console.log('当前点击索引：', index)
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container // 实现icons区域整体可轮播
    height 0
    padding-bottom 25%
  .icons
    padding-bottom .2rem
    margin-top .4rem
    .icon
      float left
      position relative
      width 25%
      height 0
      padding-bottom 25%
      .icon-image
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box // 限制盒子大小
        padding 0 .1rem
        .icon-image-content
          color #8e928fc9
          display block // 图片居中
          margin-left .3rem // 图片居中
          margin-top .1rem
          height 100% //缩小图片
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .45rem
        line-height .45rem
        text-align center
        color $darkTextColor
        ellipsis() // 实现文字过多时显示省略号的效果
</style>
