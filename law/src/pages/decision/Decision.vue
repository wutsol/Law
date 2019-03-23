<template>
  <div class="decision">
    <decision-header :title="title"></decision-header>
    <!-- <div class="decision-input border-bottom">
        <textarea v-model="fact" class="decision-input-textarea" placeholder="请详细描述案情..."></textarea>
    </div> -->
    <Input
      class="decision-input-textarea"
      v-model="fact"
      type="textarea"
      :rows="23"
      placeholder="请详细描述案情..."
    />
    <Alert type="error" show-icon v-if="showErr">请输入长度大于5</Alert>
    <!-- <Spin fix v-show="isSpinShow">
      <Icon type="load-c" size="30" class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
    <div class="decision-submit" @click="sendRequest">发送请求</div> -->
    <!-- <router-link
      tag="div"
      class="decision-submit"
      :to="'/report/' + this.fact"
    >
      提交
    </router-link> -->
    <!-- <div class="login-btn" v-if="showLogin">
      <i-button type="success" class="btn" :disabled="userName.length <= 0 || userPsw.length <= 0" long @click="login">登   录</i-button>
    </div> -->
    <div class="decision-submit">
      <i-button type="success" class="btn" :disabled="fact.length <= 5" long @click="handleSubmit">提   交</i-button>
    </div>
    <!-- <Alert type="error" show-icon >
      An error prompt
      <span slot="desc">
          Custom error description copywriting.
      </span>
    </Alert> -->
  </div>
</template>

<script>
// import axios from 'axios'
import DecisionHeader from 'common/Header'
export default{
  name: 'Decision',
  components: {
    DecisionHeader
  },
  data () {
    return {
      title: '智能决策',
      fact: '',
      changeColor: false,
      showErr: false
      // isSpinShow: false,
      // accu: [], // 罪名
      // accu_prob: [], // 罪名概率
      // accu_rele: [], // 每个罪名相关案例
      // impr: [], // 刑期
      // tiaoli: [], // 法条
      // tiaoli_prob: [] // 法条概率
    }
  },
  methods: {
    handleSubmit () {
      this.$router.push({path: '/report/' + this.fact})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .changeColor
    background-color: #19be6b
  .decision-input-textarea
    margin-top 1.12rem
    width 100%
    height 10rem
    line-height .44rem
    // text-indent .2em
    font-size .3rem
  .decision-submit
    margin .28rem 1rem
    width 5rem
    height .95rem
    line-height .95rem
    .btn
      height .77rem
      font-size .33rem
      text-align center
      border-radius .12rem
  /* 旋转效果 */
  .demo-spin-icon-load
    animation: ani-demo-spin 1s linear infinite
  @keyframes ani-demo-spin
    from { transform: rotate(0deg)}
    50% { transform: rotate(180deg)}
    to { transform: rotate(360deg)}
</style>
