<template>
  <div>
    <ul class="myTab">
        <li class="normal border-right" v-for="(item,index) in items" :key="item.id" :class="{'active':isActive==index}" @click="change(index)">
          {{item}}
      </li>
    </ul>
    <div class="tab-con">
      <crime-composition
        :composition="accu_goucheng"
        v-show="isActive===0"
      >
      </crime-composition>
      <div v-show="isActive===1">
          css
      </div>
      <div v-show="isActive===2">
          javascript
      </div>
      <div v-show="isActive===3">
          vue
      </div>
      <div v-show="isActive===4">
          vue
      </div>
      <!-- <div v-show="isActive===5">
          vue
      </div> -->
    </div>
  </div>
</template>

<script>
import CrimeComposition from '@/pages/case/components/crimeComposition'
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
    list: Array
  },
  components: {
    CrimeComposition
  },
  data () {
    return {
      items: [
        '构成条件',
        '认定条件',
        '量刑标准',
        '立案标准',
        '司法解释'
      ],
      isActive: 0 // 索引值默认为0，即item1为默认激活的选项卡
    }
  },
  methods: {
    change (index) {
      this.isActive = index
    }
  }
}
</script>

<style lang="stylus" scoped>
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
