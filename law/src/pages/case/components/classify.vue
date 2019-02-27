<template>
  <div class="classify"> <!-- 使用组件时最外层必须包裹一个div -->
     <ul>
      <li
        class="item"
        v-for="item of classifyList"
        :key="item.id"
      > <!-- 一级标题 -->
        <div class="item-title border-bottom">{{item.title}}</div>
        <ul class="item-info" :style="changeHeight">
          <router-link
            tag="li"
            class="item-info-li"
            v-for="smallItem of item.class"
            :key="smallItem.id"
            :to="{path:'/caseDetail/' + smallItem.id, query: {bigTitle: smallItem.upperclass,smallTitle: smallItem.title, list: [smallItem.list]}}"
          > <!-- 二级标题 query传递小标题 -->
            <p class="item-info-title">{{smallItem.title}}</p>
          </router-link>
        </ul>
        <div class="item-more border-top" @click="handleMoreClick"> <!-- 显示更多 -->
          <div class="iconfont" v-show="isActivated">&#xe7a9;</div>
          <div class="iconfont" v-show="!isActivated">&#xe7aa;</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CaseClassify',
  props: {
    classifyList: Array
  },
  data () {
    return {
      changeHeight: { // 决定高度
        height: '2rem'
      },
      isActivated: true // 决定箭头方向
    }
  },
  methods: {
    handleMoreClick () {
      this.changeHeight.height = this.changeHeight.height === '2rem' ? '3rem' : '2rem'
      this.isActivated = !this.isActivated
    }
  }
}

</script>

<style lang="stylus" scoped>
  .item-title
    margin-top .2rem
    height 1.3rem
    line-height 1.3rem
    padding 0 .25rem
    font-size .42rem
    background-color: #FFF
  .item-info
    overflow hidden
    padding .3rem .3rem
    background-color: #FFF
    .item-info-li
      float: left
      box-sizing: border-box
      width 25%
      .item-info-title
        height 1rem
        line-height 1rem
        font-size .3rem
        text-align center
        color #666
  .item-more
      height .8rem
      line-height .8rem
      text-align center
      font-size .3rem
      color #666
      background-color: #FFF
</style>
