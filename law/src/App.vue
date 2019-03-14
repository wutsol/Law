<template>
  <div id="app">
    <keep-alive>
     <router-view/>
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  .ivu-collapse-header // 修改折叠板样式
    height 1.3rem !important
    line-height 1.3rem !important
</style>
