<template>
  <div class="wraper">
    <div class="search">
      <!-- <i class="iconfont search-icon" v-show="!keyword">&#xe632;</i> -->
      <input class="search-input" v-model="keyword" type="text" placeholder="输入罪名关键词">
      <!-- <button class="search-btn">提交</button> -->
    </div>
    <div
      ref="search"
      class="search-content"
      v-show="keyword"
    > <!-- 当输入后才会显示该列表 -->
      <ul>
        <router-link
          tag="li"
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="'/crimeDetail/' + item.accu_name"
        >
          {{item.accu_name}}
        </router-link>
        <li class="search-item border-bottom" v-show="hasNoData">
          无匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'CaseSearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      nameList: []
    }
  },
  methods: {
    getNameinfo () {
      axios.get('/api/getAllAccusation')
        .then(this.getNameInfoSucc)
    },
    getNameInfoSucc (res) {
      if (res && res.data) {
        this.nameList = res.data
      }
    }
  },
  computed: {
    hasNoData () { // 当没找到匹配项时才显示
      return !this.list.length
    }
  },
  watch: { // 监听输入框的内容
    keyword () {
      if (this.timer) { // 做一个节流处理,提高性能
        clearTimeout(this.timer)
      }
      if (!this.keyword) { // 当没有输入搜索项时显示为空
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        this.nameList.forEach((value) => { // 遍历cities
          // console.log(value.accu_name)
          // this.name = value.accu_name
          // this.belong = value.accu_belong_to
          // console.log(this.belong)
          // this.belong.indexOf(this.keyword) > -1
          // 下面要先判断accu_name是否存在，否则会使undefined，不知道为什么
          if (value.accu_name && value.accu_name.indexOf(this.keyword) > -1) {
            result.push(value)
          }
        })
        // }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search) // 加载搜索列表中的滑动条
    this.getNameinfo()
  }
}
</script>

<style lang="stylus" scoped>
  // .wraper // 防止搜索框抖动，并且搜索出来的内容可以正确滚动
  //   height 0
  .search
    margin-top 1.12rem
    height 1rem
    line-height 1rem
    padding 0 .2rem
    background-color #1da7ba
    // position relative
    // top -2rem
    // left .25rem
    // right .25rem
    font-size .3rem
    .search-input
      box-sizing border-box
      padding  0 .1rem
      height .8rem
      line-height .8rem
      width 100%
      color #666
      border-radius .1rem
      opacity .8
      text-align center
  .search-content
    z-index 99 // 覆盖search区域
    overflow hidden
    position absolute
    top 2rem
    bottom 0
    left 0
    right 0
    background-color: #ccc
    .search-item
      height 1rem
      line-height 1rem
      padding-left .4rem
      color #666
      background-color: #FFF
</style>
