<template>
  <div class="wrapper"> <!-- 使用组件时最外层必须包裹一个div -->
    <ul>
      <li
        class="item border-bottom"
        v-for="(item, index) of list"
        :key="index"
      > <!-- 跳转到detail页面，并防止router-link使字体变色 -->
        <div class="item-info">
         <!--  <p class="item-title">{{item.title}}</p> -->
          <p
            class="item-desc"
            @click="handleCaseDetail(index, item)"
          >
            {{item.fact}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script> // 案例
// import { mapMutations } from 'vuex' // vuex高级一些的API
export default {
  name: 'Case',
  props: {
    list: Array
  },
  data () {
    return {
      lastFact: ''
    }
  },
  methods: {
    handleCaseDetail (index, item) { // 使用动态路由的时候使用query要写成 path: '/caseDetail/' + index的形式。而且传递item对象时也不要使用router-link
      this.lastFact = item.fact
      let fact = JSON.stringify(item.fact)
      let str = JSON.stringify(item)// 把对象转化为字符串（stringify）存放进sessionStorage
      sessionStorage.setItem('obbj', str) // 使用localStorage没起作用，待解
      sessionStorage.setItem('fact', fact)
      if (this.lastFact !== JSON.parse(sessionStorage.getItem(fact))) {
        sessionStorage.removeItem('obbj')
        let str = JSON.stringify(item)
        sessionStorage.setItem('obbj', str)
      }
      this.$router.push({path: '/caseDetail/' + index, query: {item: item}})
    }
    // ...mapMutations(['pushCaseList']) // 该方法相当于commit一个请求
  }
  // mounted () {
  //   console.log(this.list)
  // },
  // activated () {
  //   console.log(this.list)
  // }
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
