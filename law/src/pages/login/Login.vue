<template>
  <div class="login">
    <login-header :title="title"></login-header>
    <div class="login-content">
      <div class="login-name">
         <Input type="text" size="large" v-model="userName" placeholder="用户名" clearable/>
      </div>
      <div class="login-psw">
        <Input type="password" size="large" v-model="userPsw" placeholder="密码" clearable/>
      </div>
      <div class="login-second-psw" v-if="!showLogin">
        <Input type="password" size="large" v-model="confirmPsw" placeholder="确认密码" clearable/>
      </div>
      <Alert class="err" type="error" show-icon v-if="loginErrTip">用户名或密码错误</Alert>
      <Alert class="err" type="error" show-icon v-if="registerErrTip">用户名已存在</Alert>
      <Alert class="err" type="error" show-icon v-show="pswErrTip">两次密码不同</Alert>
      <Alert class="err" type="success" show-icon v-show="loginSucc">登陆成功</Alert>
      <Alert class="err" type="success" show-icon v-show="registerSucc">注册成功</Alert>
      <div class="login-btn" v-if="showLogin">
        <i-button type="success" class="btn" :disabled="userName.length <= 0 || userPsw.length <= 0" long @click="login">登   录</i-button>
      </div>
      <div class="register-btn" v-if="!showLogin">
        <i-button type="success" class="btn" :disabled="userName.length <= 0 || userPsw.length <= 0 || confirmPsw <= 0" long @click="register">注   册</i-button>
      </div>
      <div class="loginNotice" v-if="showLogin" @click="trunToRegister">没有账号？立即注册</div>
      <div class="registerNotice" v-if="!showLogin" @click="trunToLogin">已有账号？立即登陆</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LoginHeader from 'common/Header'
import { mapMutations } from 'vuex' // vuex高级一些的API
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
      confirmPsw: '',
      loginSucc: false,
      registerSucc: false,
      loginErrTip: false,
      registerErrTip: false,
      pswErrTip: false,
      showLogin: true,
      timer: null
    }
  },
  methods: {
    login () { // 登录
      axios.post('/api/login', {
        userName: this.userName,
        userPsw: this.userPsw
      }).then((res) => {
        const data = res.data
        const userName = data.result.userName
        if (data.status === '1') {
          this.loginSucc = true
          this.loginErrTip = false
          this.setName(userName) // vuex
          if (this.timer) { // 做一个节流处理,提高性能
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            this.$router.push('/') // 返回首页
          }, 1000)
        } else {
          this.loginSucc = false
          this.loginErrTip = true
        }
      })
    },
    ...mapMutations(['setName']), // 该方法相当于commit一个请求
    trunToRegister () {
      this.userName = ''
      this.userPsw = ''
      this.confirmPsw = ''
      this.showLogin = false
      this.loginErrTip = false
      this.title = '注册界面'
    },
    register () { // 注册
      if (this.userPsw !== this.confirmPsw) {
        this.pswErrTip = true
      } else {
        this.pswErrTip = false
        axios.post('/api/register', {
          userName: this.userName,
          userPsw: this.userPsw
        }).then((res) => {
          const data = res.data
          if (data.status === '3') {
            this.registerSucc = true
            this.registerErrTip = false
            if (this.timer) { // 做一个节流处理,提高性能
              clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
              this.trunToLogin() // 转到登陆界面
            }, 1000)
          } else {
            this.registerSucc = false
            this.registerErrTip = true
          }
        })
      }
    },
    trunToLogin () {
      this.userName = ''
      this.userPsw = ''
      this.showLogin = true
      this.pswErrTip = false
      this.registerErrTip = false
      this.registerSucc = false
      this.title = '登录界面'
    }
  },
  mounted () {
    this.userName = ''
    this.userPsw = ''
    this.confirmPsw = ''
  },
  activated () { // 页面缓存后清空
    this.userName = ''
    this.userPsw = ''
    this.confirmPsw = ''
    this.loginSucc = false
    this.registerSucc = false
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
    .login-psw
      position absolute
      top 3.5rem
      left .6rem
      right .6rem
    .login-second-psw
      position absolute
      top 4.8rem
      left .6rem
      right .6rem
    .login-btn
    .register-btn
      position absolute
      left .6rem
      right .6rem
      height 1rem
      .btn
        height .77rem
        font-size .33rem
        text-align center
    .login-btn
      top 5rem
    .register-btn
      top 6.3rem
    .err
      position absolute
      top 1.2rem
      left .6rem
      width 6rem
    .loginNotice
    .registerNotice
      position absolute
      left .6rem
      right .6rem
      height 1rem
      line-height 1rem
      text-align center
      font-size .25rem
    .loginNotice
      top 5.8rem
    .registerNotice
      top 7.1rem
</style>
