<template>
  <div class="decision">
    <decision-header :title="title"></decision-header>
    <div class="decision-input border-bottom">
        <textarea class="decision-input-textarea" placeholder="请详细描述案情..."></textarea>
    </div>
    <Spin fix v-show="isSpinShow">
      <Icon type="load-c" size="30" class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
    <div class="decision-submit" @click="sendRequest">发送请求</div>
    <!-- <router-link
      tag="div"
      class="decision-submit"
      to="/report"
    >
      提交
    </router-link> -->
  </div>
</template>

<script>
import DecisionHeader from 'common/Header'
export default{
  name: 'Decision',
  components: {
    DecisionHeader
  },
  data () {
    return {
      title: '智能决策',
      isSpinShow: false
    }
  },
  methods: {
    handleSubmit () {
      this.title = '分析报告'
    },
    sendRequest () {
      if (this.isSpinShow === false) {
        this.isSpinShow = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .decision-input
    margin-top 1.12rem
    .decision-input-textarea
      width 100%
      height 10.7rem
      line-height .44rem
      text-indent .2em
      font-size .3rem
  .decision-submit
    margin .28rem 1rem
    width 5rem
    height .95rem
    line-height .95rem
    text-align center
    background-color: #ccc
    border-radius .1rem
  /* 旋转效果 */
  .demo-spin-icon-load
    animation: ani-demo-spin 1s linear infinite
  @keyframes ani-demo-spin
    from { transform: rotate(0deg)}
    50% { transform: rotate(180deg)}
    to { transform: rotate(360deg)}
</style>
