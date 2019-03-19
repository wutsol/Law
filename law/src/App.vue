<template>
  <div id="app">
    <keep-alive>
     <router-view/>
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  .ivu-collapse-header // 修改折叠板样式
    height 1.3rem !important
    line-height 1.3rem !important
  .ivu-drawer-header // 修改菜单栏中的样式
    height 1.2rem
    line-height 1.2rem
    padding .15rem .4rem
    .ivu-drawer-header-inner
      font-size .32rem
  .ivu-drawer-body
    padding 0
    .user-info
      display flex
      height 1.5rem
      background-color: #ccc
      .user-avatar
        width 1.1rem
        height 1.1rem
        border-radius 50%
        overflow hidden
        margin .2rem
        float left
        background-color: #fff
      .user-login
      .user-name
        flex 1
        padding .32rem
        font-size .3rem
</style>
