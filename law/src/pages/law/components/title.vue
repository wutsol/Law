<template>
  <div class="wrapper"> <!-- 使用组件时最外层必须包裹一个div -->
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      > <!-- 跳转到detail页面，并防止router-link使字体变色 -->
        <div class="item-info">
         <!--  <p class="item-title">{{item.title}}</p> -->
          <router-link
            tag="p"
            class="item-title"
            :to="'/lawName/' + item.title"
          >
            {{item.title}}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Title',
  data () {
    return {
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/getTotalLaw')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      if (res && res.data) {
        console.log(res.data)
      }
    }
  },
  // computed: { // 实现多余的icon出现在第二张page上
  //   pages () {
  //     const pages = []
  //     this.list.forEach((item, index) => {
  //       const page = Math.floor(index / 10)
  //       if (!pages[page]) {
  //         pages[page] = []
  //       }
  //       pages[page].push(item)
  //     })
  //     return pages
  //   }
  // },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  // .wrapper
  //   margin-top .2rem
    .item
      background-color: #fff
      .item-info
        // height .4rem
        // line-height .4rem
        padding .3rem $textPadding
        .item-title
          color #414141
          line-height .56rem
          height .56rem
          font-size $titleSize
        // .item-desc
        //   margin-top .17rem
        //   line-height .44rem
        //   font-size $detailSize
        //   color #757575
        //   ellipsis()
</style>
