<template>
  <div> <!-- 使用组件时最外层必须包裹一个div -->
    <div class="title border-top">最新案例</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      > <!-- 跳转到detail页面，并防止router-link使字体变色 -->
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
    <div class="item-more">查看更多</div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
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
    // border-top 1px solid #eee
    // box-shadow 0 1px 1px rgba(0,0,0,.1)
  .item-info
    height 1.1rem
    padding $textPadding .35rem
    .item-title
      color #414141
      line-height .56rem
      height .56rem
      font-size $titleSize
      ellipsis()
    .item-desc
      margin-top .17rem
      line-height .44rem
      font-size $detailSize
      color #757575
      ellipsis()
.item-more
    height 1rem
    line-height 1rem
    text-align center
    font-size .3rem
    color #666
</style>
