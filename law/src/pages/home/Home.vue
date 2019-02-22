<template>
  <div>
    <home-header :title="title"></home-header>
  </div>
</template>

<script>
import HomeHeader from 'common/Header'
export default{
  name: 'Home',
  data () {
    return {
      title: '法务通'
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
