<template>
  <div class="wrapper">
    <div class="home-border"></div>
    <Tabs size="default" class="tab">
      <TabPane label="登录">
        <login></login>
      </TabPane>
      <TabPane label="注册">
        <register></register>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import Login from './login'
import Register from './register'
export default {
  name: 'LoginTab',
  components: {
    Login,
    Register
  }
}
</script>

<style lang="stylus" scoped>
  .home-border
    width 100%
    height 1rem
    border-top 1px solid #ccc
    border-radius .4rem
  .tab
    margin-top -.8rem
  .myTab
    width 100%
    height 1.2rem
    line-height 1.2rem
    background-color: #f4f4f4ba
    .normal
      display inline-block
      font-size .28rem
      color #999
      width 20%
      text-align center
    .active
      font-size .4rem
      color #333
      font-weight 530
  .tab-con
    background-color: #FFF
</style>
