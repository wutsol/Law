<template>
  <div class="wraper">
    <div class="search">
      <!-- <i class="iconfont search-icon" v-show="!keyword">&#xe632;</i> -->
      <input class="search-input" v-model="keyword" placeholder="请输入罪名关键词...">
      <!-- <button class="search-btn">提交</button> -->
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    > <!-- 当输入后才会显示该列表 -->
      <ul>
        <router-link
          tag="div"
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="'/crimeDetail/' + item.id"
        >
          {{item.title}}
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
export default {
  name: 'CaseSearch',
  props: {
    nameList: Array
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  // methods: {
  //   handleCityClick (id) {
  //     // this.changeCity(city) // 相当于this.$store.commit('changeCity', city)
  //     // this.$router.push('/') // 跳转到Home界面
  //   }
  // },
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
        // for (let i in this.cities) {
        this.nameList.forEach((value) => { // 遍历cities
          if (value.title.indexOf(this.keyword) > -1) {
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
  }
}
</script>

<style lang="stylus" scoped>
  .search
    position absolute
    top 3.2rem
    left .25rem
    right .25rem
    font-size .3rem
    // .search-icon
    //   position absolute
    //   top 0
    //   bottom 0
    //   left .1rem
    //   text-align center
    //   font-size .4rem
    //   background-color: #eee
    .search-input
      box-sizing border-box
      padding  0 .1rem
      height .8rem
      line-height .8rem
      width 7rem
      background-color: #eee
      color #333
      border-radius .1rem
      opacity .8
    // .search-btn
    //   position absolute
    //   top 0
    //   left 5.8rem
    //   width 1.3rem
    //   height .8rem
    //   line-height .8rem
    //   text-align center
    //   border-radius 0 .1rem .1rem 0
    //   background-color: #c86d60f5
  .search-content
    z-index 1 // 覆盖search区域
    overflow hidden
    position absolute
    top 4rem
    bottom 0
    left .25rem
    right .25rem
    background-color: #eee
    .search-item
      height 1rem
      line-height 1rem
      padding-left .4rem
      color #666
      background-color: #FFF
</style>
