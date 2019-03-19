<template>
  <div class="login">
    <login-header :title="title"></login-header>
    <div class="login-content">
      <div class="login-name">
         <Input type="text" v-model="userName" placeholder="用户名" clearable/>
      </div>
      <div class="login-psw">
        <Input type="password" v-model="userPsw" placeholder="密码" clearable/>
      </div>
      <Alert type="error" show-icon v-if="errTip">用户名或密码错误</Alert>
      <div class="login-btn">
        <i-button type="success" class="btn" :disabled="userName.length <= 0 || userPsw.length <= 0" long @click="login">登   录</i-button>
      </div>
      <div class="notice">没有账号？立即注册</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LoginHeader from 'common/Header'
export default {
  name: 'LoginHome',
  components: {
    LoginHeader
  },
  data () {
    return {
      title: '登录界面',
      userName: '',
      userPsw: '',
      errTip: false
    }
  },
  methods: {
    login () { // 登录
      axios.post('/api/login', {
        userName: this.userName,
        userPsw: this.userPsw
      }).then((res) => {
        const data = res.data
        console.log(data)
        if (data.status === '1') {
          this.errTip = false
        } else {
          this.errTip = true
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .login-content
    position relative
    margin-top 2.5rem
    height 8rem
    // background-color: #ccc
    .login-name
      position absolute
      top 2.2rem
      left .6rem
      right .6rem
      height 1rem
    .login-psw
      position absolute
      top 3.5rem
      left .6rem
      right .6rem
      height 1rem
    .login-btn
      position absolute
      top 5rem
      left .6rem
      right .6rem
      height 1rem
      .btn
        height .77rem
        font-size .33rem
        text-align center
    .notice
      position absolute
      top 5.8rem
      left .6rem
      right .6rem
      height 1rem
      line-height 1rem
      text-align center
      font-size .25rem
</style>
