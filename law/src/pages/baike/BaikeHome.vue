<template>
  <div class="home">
    <home-header :title="title"></home-header>
    <home-search :searchList="searchList"></home-search>
    <classify :classifyList="list"></classify>
    <loading :isSpinShow="isSpinShow"></loading>
  </div>
</template>

<script>
import HomeHeader from 'common/Header'
import HomeSearch from './components/search'
import Classify from './components/classify'
import Loading from 'common/Loading'
import axios from 'axios'
export default{
  name: 'BaikeHome',
  components: {
    HomeHeader,
    HomeSearch,
    Classify,
    Loading
  },
  data () {
    return {
      title: '干货',
      isSpinShow: false,
      list: [],
      searchList: []
    }
  },
  methods: {
    getHomeInfo () {
      if (this.isSpinShow === false) {
        this.isSpinShow = true
        axios.get('/api/getAllBaike')
          .then(this.getHomeInfoSucc)
      }
    },
    getHomeInfoSucc (res) {
      if (res && res.data) {
        const data = res.data
        data.forEach((item, index) => {
          this.searchList.push(item)
          if (index < 500) { // 取前500个数据
            this.list.push(item)
          }
        })
        this.isSpinShow = false
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
