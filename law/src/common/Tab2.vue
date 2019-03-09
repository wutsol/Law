<template>
  <div>
    <ul class="myTab" :class="{tabfixed: showfixed}">
        <li
          class="normal border-right"
          :class="{'active': isActive === index}"
          v-for="(item,index) in items"
          :key="item.id"
          @click="change(index)"
        >
          {{item}}
      </li>
    </ul>
    <div :class="{spacefixed: showfixed}"></div> <!-- 防止tab在fixed之后下面的内容会有跳动的效果 -->
    <div class="tab-con">
      <crime-composition
        :composition="accu_goucheng"
        v-show="isActive===0"
      >
      </crime-composition>
      <crime-identification
        :list="accu_rending"
        v-show="isActive===1">
      </crime-identification>
      <crime-filing
        :list="accu_lian"
        v-show="isActive===2"
      >
          javascript
      </crime-filing>
      <crime-filing
        :list="accu_jieshi"
        v-show="isActive===3"
      >  <!-- 法条，有待改进 -->
      </crime-filing>
      <case-list
        :list="list"
        v-if="list"
        v-show="isActive===4"
      >
      </case-list>
    </div>
  </div>
</template>

<script>
import CrimeComposition from '@/pages/case/components/crimeComposition'
import CrimeIdentification from '@/pages/case/components/crimeIdentification'
import CrimeFiling from '@/pages/case/components/crimeFiling'
import CaseList from 'common/Case'
export default {
  name: 'Tab2',
  props: {
    // accu_name: String,
    // accu_gainian: Array,
    accu_goucheng: Array,
    accu_jieshi: Array,
    accu_lian: Array,
    // accu_liangxing: [],
    accu_rending: Array,
    list: Array,
    topHeight: Number
  },
  components: {
    CrimeComposition,
    CrimeIdentification,
    CrimeFiling,
    CaseList
  },
  data () {
    return {
      items: [
        '构成条件',
        '认定条件',
        // '量刑标准',
        '立案标准',
        '相关法条',
        '相关案例'
      ],
      showfixed: false,
      // lastIndex: 0,
      isActive: 0 // 索引值默认为0，即item1为默认激活的选项卡
    }
  },
  methods: {
    change (index) {
      this.isActive = index
      // this.lastIndex = index
    },
    handleScroll () {
      const top = document.documentElement.scrollTop // 获得距离页面顶部的距离
      // console.log(top)
      if (top >= this.topHeight) {
        this.showfixed = true
      } else {
        this.showfixed = false
      }
    }
  },
  activated () { // 使tab初始为0
    this.isActive = 0
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 页面更新时解绑,防止所有页面都添加scroll事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .tabfixed
    position fixed
    top 1.12rem
    width 100%
    z-index 9
  .spacefixed
    height 1rem
  .myTab
    width 100%
    height 1rem
    line-height 1rem
    background-color: #F4F4F4
    .normal
      display inline-block
      font-size .28rem
      color #333
      width 20%
      text-align center
    .active
      color #1750AD
  .tab-con
    background-color: #FFF
</style>
