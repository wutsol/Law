<template>
  <div class="law"> <!-- 使用组件时最外层必须包裹一个div -->
    <ul>
      <li
        class="law-content"
        v-for="(item, index) of tiaoli"
        :key="index"
      >
        刑法： 第 {{item}} 条
        <i-circle
          :size="24"
          :trail-width="4"
          :stroke-width="5"
          :percent="tiaoli_prob[index]"
          stroke-linecap="square"
          stroke-color="#43a3fb"
        >
          <div class="demo-Circle-custom">
            <span>{{tiaoli_prob[index] + "%"}}</span>
          </div>
        </i-circle>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ReportLaw',
  // props: {
  //   lawList: Array,
  //   probList: Array
  // },
  data () {
    return {
      fact: '',
      tiaoli: [],
      tiaoli_prob: []
    }
  },
  methods: {
    getLaw () {
      axios.request({ // 向django发送请求
        url: 'http://47.101.221.46:8051/predict',
        method: 'post',
        data: this.fact
      }).then(this.getLawSuc)
        .catch((response) => {
          console.log(response)
        })
    },
    getLawSuc (res) {
      if (res && res.data) {
        console.log(res.data)
        const data = res.data
        this.tiaoli = data.tiaoli
        this.getLawContent()
        if (data.tiaoli_prob) { // 先判断是否存在，否则会出现无法读取未定义的tiaoli_prob
          data.tiaoli_prob.forEach((item, index) => {
            this.tiaoli_prob[index] = parseInt((item * 100))
          }) // 对概率做数据操作
        }
        // this.isSpinShow = false
        // this.count = this.count + 1
      }
    },
    getLawContent () {
      this.tiaoli.forEach((item, index) => {
        axios.request({ // 向django发送请求,获取推荐内容
          url: 'http://47.101.221.46:8000/xingfa',
          method: 'post',
          data: item
        }).then((res) => {
          console.log(res)
          // this.contentList[index] = []
          // const data = res.data[0]
          // this.contentList.push(data.content) // 用push的话要在初始时置空
          // console.log(this.contentList[index])
        })
          .catch((response) => {
            console.log(response)
          })
      })
    }
  },
  mounted () {
    this.fact = JSON.parse(sessionStorage.getItem('decisionFact'))
    // this.getLaw()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .law
    background-color: #fff
    margin-top .2rem
    .law-content
      padding .4rem 0 .4rem .4rem
      font-size .3rem
      line-height .55rem
      .ivu-chart-circle
        float right
        .demo-Circle-custom
          text-align center
          & span
            display block
            color #657180
            font-size .08rem
  </style>
