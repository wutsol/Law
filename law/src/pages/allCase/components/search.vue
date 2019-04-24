<template>
  <div class="header border-bottom"> <!-- 为了页面向下滚动时header部分不动 -->
    <!-- <div class="header-left">
      <div class="iconfont back-icon" @click="handleClick">&#xe62c;</div>
    </div>
    <div class="header-middle">
      <i-input
        search
        enter-button
        v-model="keyword"
        placeholder="输入罪名关键词"
        @on-focus="handleFocus"
      >
      </i-input>
    </div>
    <router-link
      tag="div"
      class="header-right"
      to="/"
    >
      <div class="iconfont home-icon">&#xe61e;</div>
    </router-link> -->
    <!-- </div> -->
  </div>
</template>

<script> // 除主页的header
export default{
  name: 'CaseHeader'
  // props: {
  //   title: String
  // },
  // data () {
  //   return {
  //     keyword: '',
  //     showAbs: true,
  //     opacityStyle: {
  //       opacity: 0
  //     },
  //     data4: ['中华人民共和国刑法', '中华人民共和国民法总则', '中华人民共和国劳动法']
  //   }
  // },
  // methods: {
  //   handleClick () {
  //     this.$router.go(-1) // 返回上一页
  //   },
  //   handleFocus () {
  //     console.log('hi')
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .header
    margin-top $headerHeight
</style>
