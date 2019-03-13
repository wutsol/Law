<template>
  <div class="decision">
    <decision-header :title="title"></decision-header>
    <div class="decision-input border-bottom">
        <textarea class="decision-input-textarea" placeholder="请详细描述案情..."></textarea>
    </div>
    <router-link
      tag="div"
      class="decision-submit"
      to="/report"
    >
      提交
    </router-link>
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
      title: '智能决策'
    }
  },
  methods: {
    handleSubmit () {
      this.title = '分析报告'
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
</style>
