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
            class="item-title"
            :to="'/lawName/' + item.title"
          >
            {{item.title}}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      list: [{
        'id': '1',
        'title': '诉讼法规'
      }, {
        'id': '2',
        'title': '行政法规'
      }, {
        'id': '3',
        'title': '刑法大全'
      }, {
        'id': '4',
        'title': '宪法大全'
      }, {
        'id': '5',
        'title': '民商法规'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  // .wrapper
  //   margin-top .2rem
    .item
      background-color: #fff
      .item-info
        // height .4rem
        // line-height .4rem
        padding .3rem $textPadding
        .item-title
          color #414141
          line-height .56rem
          height .56rem
          font-size $titleSize
        // .item-desc
        //   margin-top .17rem
        //   line-height .44rem
        //   font-size $detailSize
        //   color #757575
        //   ellipsis()
</style>
