<template>
  <div class="header border-bottom">
    <Icon type="md-menu" class="header-left" size="35" @click="showMenu = true"/>
    <Drawer title="个人主页" placement="left" :closable="false" v-model="showMenu">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="user-login" @click="turnToLogin">{{this.name}}</div>
          <!-- <div class="user-name" v-show="this.name.length > 0">{{this.name}}</div> -->
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
import { mapState } from 'vuex' // vuex高级一些的API
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
  },
  computed: {
    ...mapState(['name']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
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
