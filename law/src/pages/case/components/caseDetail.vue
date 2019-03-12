<template>
  <div class="wraper">
    <case-header :title="headerTitle"></case-header>
    <div class="fact">
      <div class="fact-title border-bottom">案情描述</div>
      <div class="fact-content">{{this.list.fact}}</div>
    </div>
    <div class="prison">
      <div class="prison-title border-bottom">判刑详情</div>
      <div class="prison-content">
        是否死刑： {{this.death}} <br>
        是否无期徒刑： {{this.life}} <br>
        刑期： {{this.imprisonment}}  个月
      </div>
    </div>
    <div class="fine">
      <div class="fine-title border-bottom">罚金</div>
      <div class="fine-content">
        罚款金额： {{this.list.punish_of_money}}
      </div>
    </div>
    <!-- {{this.list}} -->
  </div>
</template>

<script>
// import { mapState } from 'vuex' // vuex高级一些的API
import CaseHeader from 'common/Header'
export default {
  name: 'CaseDetail',
  components: {
    CaseHeader
  },
  data () {
    return {
      headerTitle: '案例库',
      death: '',
      life: '',
      list: {type: Object},
      imprisonment: ''
    }
  },
  // created () {
  //   this.list = JSON.parse(sessionStorage.getItem('obbj')) // 转化为对象，否则是数组
  //   this.death = this.list.prison.death_penalty ? '是' : '否'
  //   this.life = this.list.prison.life_imprisonment ? '是' : '否'
  // },
  activated () { // 因为使用了keep-alive，所以要使用这个钩子取代上面的
    this.list = JSON.parse(sessionStorage.getItem('obbj')) // 转化为对象，否则是数组
    this.death = this.list.prison.death_penalty ? '是' : '否'
    this.life = this.list.prison.life_imprisonment ? '是' : '否'
    this.imprisonment = this.list.prison.imprisonment
  }
  // computed: {
  //   // ...mapState(['item']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .wraper
    background-color: #eee
    .fact
      background-color: #FFF
      margin-top .2rem
      .fact-title
        casetitle()
      .fact-content
        text-indent 2em
        padding .4rem
        font-size .3rem
        line-height .55rem
    .prison
      background-color: #FFF
      margin-top .2rem
      .prison-title
        casetitle()
      .prison-content
        padding .4rem
        font-size .3rem
        line-height .58rem
    .fine
      background-color: #FFF
      margin-top .2rem
      .fine-title
        casetitle()
      .fine-content
        padding .4rem
        font-size .3rem
        line-height .58rem
</style>
