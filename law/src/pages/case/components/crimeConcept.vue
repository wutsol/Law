<template>
  <div class="container">
    <p class="container-name">
      {{this.name}}
      <i-circle
        :size="25"
        :trail-width="4"
        :stroke-width="5"
        :percent="75"
        stroke-linecap="square"
        stroke-color="#43a3fb">
        <div class="demo-Circle-custom">
          <span>75%</span>
        </div>
      </i-circle>
    </p>
    <p class="container-concept">
      {{this.concept[0]}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CrimeConcept',
  props: {
    name: String,
    concept: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .container
    margin-top .2 + $headerHeight
    padding .4rem
    background-color: #FFF
    min-height 1rem
    .container-name
      line-height .5rem
      font-size .44rem
      .ivu-chart-circle
        float right
        .demo-Circle-custom
          text-align center
          & span
            display block
            color #657180
            font-size .08rem
    .container-concept
      margin-top .4rem
      line-height .5rem
      text-indent 2em
      font-size .3rem
</style>
