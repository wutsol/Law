<template>
  <div class="wraper">
    <case-header :title="article.summary"></case-header>
    <div class="title">
      {{this.article.summary}}
    </div>
    <div class="case">
      <div class="case-title">案情</div>
      <div class="case-text">{{this.article.fact}}</div>
    </div>
    <div class="accusation">
      <div class="accusation-title">罪名</div>
      <ul class="accusation-text"><!-- v-if="article.meta" 解决accusation渲染失败的情况 -->
        <router-link
          tag="li"
          v-if="article && article.meta"
          v-for="(item, index) of article.meta.accusation"
          :key="index"
          :to="'/crimeDetail/' + item"
        >
          <Icon type="ios-link" />
          {{item}}
        </router-link>
      </ul>
    </div>
    <div class="law">
      <div class="law-title">相关法条</div>
      <Collapse simple> <!-- 折叠面板 -->
        <Panel
          v-if="article && article.meta"
          v-for="(item, index) of article.meta.relevant_articles"
          :key="index"
        ><!-- class="law-text" -->
          <div class="law-text-title">
            <Icon type="ios-link" />
            《中华人民共和国刑法》第{{item}}条
          </div>
          <p slot="content">
            <span>{{contentList[index]}}</span>
            hi
           <!--  <div v-if="contentList"> --><!--  class="law-text-content" -->
             <!--  <p>{{contentList[index]}}</p> --> <!-- class="law-down" -->
            <!-- </div> -->
          </p>
        </Panel>
      </Collapse>
    </div>
    <!-- <div class="law">
      <div class="law-title">相关法条</div>
      <ul class="law-text"> --><!-- 解决accusation渲染失败的情况 -->
       <!--  <li
          v-if="article && article.meta"
          v-for="(item, index) of article.meta.relevant_articles"
          :key="index"
        >
          <p class="law-text-title">
            <Icon type="ios-link" />
            《中华人民共和国刑法》第{{item}}条
          </p>
          <div v-if="contentList" class="law-text-content">
            <p class="law-down">{{contentList[index]}}</p>
          </div>
        </li>
      </ul>
    </div> -->
    <div v-if="article && article.meta" class="judge">
      <div class="judge-title">判决详情</div>
      <div class="judge-text">
        <div class="judge-content">
          <span v-show="article.meta.term_of_imprisonment.death_penalty">死刑 <br></span>
          <span v-show="article.meta.term_of_imprisonment.life_imprisonment">无期徒刑 <br></span>
          <span v-show="!death && !life">刑期： {{article.meta.term_of_imprisonment.imprisonment}}  个月 <br></span>
          罚款金额： {{article.meta.punish_of_money}}
          <span v-show="article.meta.punish_of_money > 0">人民币</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex' // vuex高级一些的API
import axios from 'axios'
import CaseHeader from 'common/NewHeader'
export default {
  name: 'CaseDetail',
  components: {
    CaseHeader
  },
  data () {
    return {
      death: false,
      life: false,
      list: {type: Object},
      imprisonment: '',
      contentList: [],
      money: 0
    }
  },
  computed: {
    ...mapState(['article']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
  },
  watch: {
    article () {
      if (this.article && this.article.meta) {
        // console.log(this.article.meta)
        const newMeta = this.article.meta
        // newMeta.accusation.forEach((item, index) => { // 为了能正确给casedetail发送数据
        //   this.article.meta.accusation[index] = item + '罪'
        // })
        newMeta.relevant_articles.forEach((item, index) => {
          axios.request({ // 向django发送请求,获取推荐内容
            url: 'http://47.101.221.46:8050/xingfa',
            method: 'post',
            data: item
          }).then((res) => {
            console.log(res)
            // this.contentList[index] = []
            this.contentList.push(res.data[0].content)
            console.log(this.contentList[index])
          })
            .catch((response) => {
              console.log(response)
            })
        })
      }
    }
  },
  mounted () {
    // if (this.article && this.article.meta) {
    //   console.log(this.article + 'mounted')
    //   const newMeta = this.article.meta
    //   // newMeta.accusation.forEach((item, index) => { // 为了能正确给casedetail发送数据
    //   //   this.article.meta.accusation[index] = item + '罪'
    //   // })
    //   newMeta.relevant_articles.forEach((item, index) => {
    //     axios.request({ // 向django发送请求,获取推荐内容
    //       url: 'http://47.101.221.46:8050/xingfa',
    //       method: 'post',
    //       data: item
    //     }).then((res) => {
    //       // console.log(res)
    //       this.contentList[index] = res.data[0]
    //       console.log(this.contentList[index])
    //     })
    //       .catch((response) => {
    //         console.log(response)
    //       })
    //   })
    // }
  },
  activated () { // 因为使用了keep-alive，所以要使用这个钩子取代上面的
    // console.log(this.article)
    // this.list = JSON.parse(sessionStorage.getItem('obbj')) // 转化为对象，否则是数组
    // this.article.meta.relevant_articles.forEach((item, index) => {
    //   axios.request({ // 向django发送请求,获取推荐内容
    //     url: 'http://47.101.221.46:8050/xingfa',
    //     method: 'post',
    //     data: item
    //   }).then((res) => {
    //     console.log(res)
    //     this.contentList[index] = []
    //     this.contentList[index].push(res.data[0].content)
    //     console.log(this.contentList[index])
    //   })
    //     .catch((response) => {
    //       console.log(response)
    //     })
    // })
    // this.money = this.article.meta.punish_of_money
    // this.death = this.article.meta.term_of_imprisonment.death_penalty
    // this.life = this.article.meta.term_of_imprisonment.life_imprisonment
    // this.imprisonment = this.article.meta.term_of_imprisonment.imprisonment
  }
  // computed: {
  //   // ...mapState(['item']) // 将vuex公用数据映射给计算属性并命名为city,用this.city取代html中this.$store.state.city
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .wraper
    background-color: #fff
    .title
      margin-top $headerHeight + .1rem
      padding .1rem .12rem
      font-size .35rem
      color #414141
      line-height .4rem
    .case
    .accusation
    .law
    .judge
      margin-top .3rem
      .case-title
      .accusation-title
      .law-title
      .judge-title
        height .7rem
        line-height .7rem
        font-size .355rem
        text-align left
        padding-left .2rem
        color: #2c3e50
        font-weight: bold
      .case-text
      .accusation-text
      .law-text
      .judge-text
        font-size .3rem
        padding .25rem .35rem
        margin-top .1rem
        line-height .53rem
        border()
    .law-text-title
      display inline-block
      margin-left -.15rem
      font-size .32rem
      color #333
    .law-down
      line-height .5rem
      font-size .28rem
      color #666666e8
      text-indent 2em
    .fact
      background-color: #FFF
      margin-top 1.12rem
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
