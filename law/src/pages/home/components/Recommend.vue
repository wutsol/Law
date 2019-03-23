<template>
  <div class="recommend"> <!-- 使用组件时最外层必须包裹一个div -->
    <div class="title border-top">干货推荐</div>
    <div class="wrapper">
      <ul>
        <router-link
          tag="li"
          class="wrapper-item border-bottom"
          v-for='(item, index) of list'
          :key='index'
          :to="'/baikeDetail/' + item.articleTitle"
        >
          <img class="item-img" :src="item.imageUrl">
          <div class="item-info">
            <p class="item-title">{{item.articleTitle}}</p>
            <!-- <p class="item-label">{{item.contentLabels[0]}}{{item.contentLabels[1]}}</p> -->
            <p class="item-desc">{{item.publishDate}}</p>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="item-more" @click="seeMore">查看更多</div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  methods: {
    seeMore () {
      this.$router.push('/detail/0004')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .title
    margin-top .3rem
    height 1rem
    line-height 1rem
    font-size .4rem
    text-align center
    background-color: #eee
  .wrapper
    background-color: #FFF
    .wrapper-item
      position relative
      margin-top .08rem
      width 100%
      height 2.2rem
      overflow hidden
      display flex
    .item-img
      height 1.8rem
      width 1.8rem
      padding .05rem
    .item-info
      flex 1
      padding 0 .1rem 0 .2rem
      min-width 0 // 使省略号正常显示
      .item-title
        line-height .45rem
        font-size .32rem
      .item-desc
        position absolute
        right .08rem
        bottom .3rem
        line-height .44rem
        color #ccc
  .item-more
      height .9rem
      line-height .9rem
      text-align center
      font-size .3rem
      color #666
</style>
