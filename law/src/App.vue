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
  .vertical-center-modal // 会话框居中
    display: flex
    align-items: center
    justify-content: center
    .ivu-modal-footer
      height 1rem
      padding .2rem
    .ivu-modal
      top 0
      .ivu-modal-body
        height 1.6rem
        font-size .3rem
        line-height 1rem
  .ivu-collapse-header // 修改折叠板样式
    height 1.3rem !important
    line-height 1.3rem !important
  .ivu-drawer-header // 修改菜单栏中的样式
    height 1.2rem
    line-height 1.2rem
    padding .15rem .4rem
    .ivu-drawer-header-inner
      font-size .38rem
  .ivu-drawer-body // 个人主页样式
    padding 0
    .user-info
      display flex
      height 2rem
      background-color: #ccc
      .user-avatar
        position relative
        width 1.6rem
        height 1.6rem
        border-radius 50%
        overflow hidden
        margin .2rem
        float left
        background-color: #fff
        .user-icon
          position absolute
          top .22rem
          left .22rem
          color #666565
      .user-login
      .user-name
        flex 1
        padding .5rem .44rem
        font-size .35rem
        height 1rem
        line-height 1rem
    .user-history
    .user-logout
      display flex
      margin-top .2rem
      height 1rem
      padding .2rem
      background-color: #eee
      .history-icon
      .logout-icon
        float left
        width 1rem
      .history-text
      .logout-text
        flex 1
        padding-left .2rem
        font-size .3rem
        height .6rem
        line-height .6rem
</style>
