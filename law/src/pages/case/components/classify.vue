<template>
  <div class="classify"> <!-- 使用组件时最外层必须包裹一个div -->
     <ul>
      <li
        class="item"
        v-for="(item, index) of classifyList"
        :key="item.id"
      > <!-- 一级标题 -->
        <div class="item-title border-bottom">{{item.title}}</div>
        <ul class="item-info" :class="{changeHeight: item.isActivated}">
          <router-link
            tag="li"
            class="item-info-li"
            v-for="smallItem of item.class"
            :key="smallItem.id"
            :to="'/accusation/' + smallItem.id"
          > <!-- 二级标题 query传递小标题 @click="handleCaseClick(smallItem.id, smallItem.upperclass, smallItem.title, smallItem.list)" -->
            <p class="item-info-title">{{smallItem.title}}</p>
          </router-link>
        </ul>
        <div class="item-more border-top" @click="handleMoreClick(index)"> <!-- 显示更多 -->
          <div class="iconfont" v-show="!item.isActivated">&#xe7a9;</div>
          <div class="iconfont" v-show="item.isActivated">&#xe7aa;</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script> // 一级标题
// import { mapMutations } from 'vuex' // vuex高级一些的API
export default {
  name: 'CaseClassify',
  props: {
    classifyList: Array
  },
  data () {
    return { // 决定高度
      isActivated: true // 决定箭头方向
    }
  },
  methods: {
    handleMoreClick (index) {
      this.classifyList[index].isActivated = !this.classifyList[index].isActivated
      this.classifyList.splice(index, 1, this.classifyList[index]) // 更新数组
    }
    // handleCaseClick (id, bigTitle, smallTitle, list) {
    //   this.$router.push({path: '/caseDetail/' + id, query: {bigTitle: bigTitle, smallTitle: smallTitle}}) // 用编程式导航，传递数据
    //   this.pushCaseList(list) // 借助vuex实现案例数据的传递
    // },
    // ...mapMutations(['pushCaseList']) // 该方法相当于commit一个请求
  },
  mounted () { // 映射每个item
    this.classifyList.map(el => {
      el.isActivated = true
      return el
    })
  }
}

</script>

<style lang="stylus" scoped>
  .changeHeight
    height 3rem !important
  .item-title
    margin-top .2rem
    height 1.3rem
    line-height 1.3rem
    padding 0 .25rem
    font-size .42rem
    background-color: #FFF
  .item-info
    overflow hidden
    height 2rem
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
