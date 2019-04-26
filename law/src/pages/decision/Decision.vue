<template>
  <div class="decision">
    <decision-header :title="title"></decision-header>
    <!-- <div class="decision-input border-bottom">
        <textarea v-model="fact" class="decision-input-textarea" placeholder="请详细描述案情..."></textarea>
    </div> -->
    <div class="decision-wrapper">
      <div class="wrapper">
        <Input
          class="decision-input-textarea"
          v-model="fact"
          type="textarea"
          :rows="10"
          placeholder="请详细描述案情经过，以获得更位准确的预测结果"
        />
        <Alert type="error" show-icon v-if="showErr">请输入长度大于5</Alert>
        <p class="decision-notice">
          <span style="color: #5151f7">输入示例:   </span>
          <span style="color: #4e4d4df0">男方女方大奖赛大家阿斯顿就爱是的哈接电话卡时间和大家好大数据和打击打击萨达还是觉得 sad哈吉斯大火开始的骄傲和
          </span>
        </p>
      </div>
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
import DecisionHeader from 'common/NewHeader'
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
  .decision
    background-color: #ccc
    height 100%
    .decision-wrapper
      height 100%
      // background-color: red
      .wrapper
        width 95%
        margin 0 auto
        margin-top 1.3rem
        // border 1px solid #dcdee2c2
        // border-radius .12rem
        padding .25rem
        .decision-input-textarea
          width 100%
          line-height .44rem
          font-size .3rem
        .decision-notice
          padding 0 .1rem
          letter-spacing .012rem
          line-height .38rem
          margin .4rem 0 .28rem 0
      .decision-submit
        position absolute
        bottom 1rem
        margin 0 .4rem
        width 90%
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
