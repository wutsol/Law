<template>
  <div class="header border-bottom"> <!-- 为了页面向下滚动时header部分不动 -->
    <!-- <div class="header-abs" v-show="showfixed" @click="handleClick">
      <div class="iconfont header-abs-back">&#xe622;</div>
    </div> -->
    <!-- <div class="header-show" -->  <!-- v-show="!showfixed" :style="opacityStyle" -->
    <!-- <div class="header-left">
      <div class="iconfont back-icon" @click="handleClick">&#xe622;</div>
    </div> -->
    <Icon type="md-menu" class="header-left" size="35" @click="showMenu = true"/>
    <Drawer title="个人主页" placement="left" :closable="false" v-model="showMenu">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="user-login" @click="turnToLogin">点击登录</div>
          <div class="user-name"></div>
        </div>
    </Drawer>
    <div class="header-middle">{{title}}</div>
    <router-link
      tag="div"
      class="header-right"
      to="/"
     >
      <div class="iconfont home-icon">&#xe61e;</div>
    </router-link>
    <!-- </div> -->
  </div>
</template>

<script> // header部分，fixed
export default{
  name: 'HomeHeader',
  props: {
    title: String
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    turnToLogin () {
      this.showMenu = false
      this.$router.push('/login')
    }
    // handleClick () {
    //   this.$router.go(-1) // 返回上一页
    // }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display flex
    position fixed
    top 0
    width 100%
    z-index 100
    height $headerHeight
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff
    .header-left
      width: .86rem
      float: left
      padding .2rem .1rem
      text-align: center
    .header-middle
      flex: 1
      font-size: .46rem
      font-weight: 400
      text-align: center
    .header-right
      width: .86rem
      padding 0 .1rem
      float: right
      text-align center
      color #fff // 去除使用router-link后字体颜色的变化
      .home-icon
        font-size: .6rem
</style>
