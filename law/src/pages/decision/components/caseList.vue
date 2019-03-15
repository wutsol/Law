<template>
  <div class="wrapper"> <!-- 使用组件时最外层必须包裹一个div -->
    <ul>
      <li
        class="item border-bottom"
        v-for="(item, index) of list"
        :key="index"
      > <!-- 跳转到detail页面，并防止router-link使字体变色 -->
        <div class="item-info">
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
export default {
  name: 'ReportCase',
  props: {
    list: Array
  },
  methods: {
    handleCaseDetail (index, item) { // 使用动态路由的时候使用query要写成 path: '/caseDetail/' + index的形式。而且传递item对象时也不要使用router-link
      let str = JSON.stringify(item)// 把对象转化为字符串（stringify）存放进sessionStorage
      sessionStorage.setItem('case', str) // 使用localStorage没起作用，待解
      this.$router.push({path: '/caseDetail/' + index, query: {item: item}})
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
    .item
      background-color: #fff
      .item-info
        height 1.3rem
        padding .1rem $textPadding
        .item-desc
          color #414141
          line-height 1.1rem
          height 1.1rem
          ellipsis()
</style>
