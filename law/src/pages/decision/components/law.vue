<template>
  <div class="law"> <!-- 使用组件时最外层必须包裹一个div -->
    <div class="law-title">三、法条推荐</div>
    <div class="law-border"></div>
    <ul>
      <li
        class="item"
        v-for="item of lawList"
        :key="item.id"
      >
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <p class="item-detail">{{item.detail}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ReportLaw',
  props: {
    lawList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .law
    background-color: #fff
    .law-title
      height .8rem
      line-height .8rem
      font-size .4rem
      font-weight 400
      padding-left $textPadding
    .law-border
      itemborder()
    .item-info
      margin .1rem auto
      padding .1rem $textPadding
      .item-title
        line-height .5rem
        font-size $titleSize
        font-weight 400
        color #414141
      .item-detail
        margin .1rem 0
        font-size $detailSize
        line-height .43rem
        color #757575
  </style>
