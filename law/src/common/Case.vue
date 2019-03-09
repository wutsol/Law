<template>
  <div class="wrapper"> <!-- 使用组件时最外层必须包裹一个div -->
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      > <!-- 跳转到detail页面，并防止router-link使字体变色 -->
        <div class="item-info">
         <!--  <p class="item-title">{{item.title}}</p> -->
          <router-link
            tag="p"
            class="item-desc"
            :to="'/caseDetail/' + item"
          >
            {{item.fact}}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script> // 案例
export default {
  name: 'Case',
  props: {
    list: Array
  },
  mounted () {
    console.log(this.list)
  },
  activated () {
    console.log(this.list)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  // .wrapper
  //   margin-top .2rem
    .item
      background-color: #fff
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
</style>
