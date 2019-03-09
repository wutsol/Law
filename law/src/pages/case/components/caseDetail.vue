<template>
  <div class="wraper">
    {{this.$route.params.item}}
  </div>
</template>

<script>
export default {
  name: 'CaseDetail',
  data () {
    return {
      list: {type: Object}
    }
  },
  mounted () {
    // this.list = this.$route.params.item
    console.log(this.$route.params.item)
  }
}
</script>

<style lang="stylus" scoped>
  .wraper
    background-color: #FFF
</style>
