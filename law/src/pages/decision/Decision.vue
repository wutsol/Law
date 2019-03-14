<template>
  <div class="decision">
    <decision-header :title="title"></decision-header>
    <div class="decision-input border-bottom">
        <textarea v-model="fact" class="decision-input-textarea" placeholder="请详细描述案情..."></textarea>
    </div>
    <!-- <Spin fix v-show="isSpinShow">
      <Icon type="load-c" size="30" class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
    <div class="decision-submit" @click="sendRequest">发送请求</div> -->
    <router-link
      tag="div"
      class="decision-submit"
      :to="'/report/' + this.fact"
    >
      提交
    </router-link>
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
      fact: ''
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
      this.title = '分析报告'
    }
    // sendRequest () {
    //   if (this.isSpinShow === false) {
    //     this.isSpinShow = true
    //     axios.request({ // 向django发送请求
    //       url: 'http://3.16.128.130:8050/predict',
    //       method: 'post',
    //       data: this.fact
    //     }).then((response) => {
    //       if (response.status === 200) {
    //         const data = response.data
    //         this.accu = data.accu
    //         this.accu_prob = data.accu_prob
    //         this.accu_rele = data.accu_rele
    //         this.impr = data.impr
    //         this.tiaoli = data.tiaoli
    //         this.tiaoli_prob = data.tiaoli_prob
    //         this.isSpinShow = false
    //       }
    //     }).catch((response) => {
    //       console.log(response)
    //     })
    //   }
    // }
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
