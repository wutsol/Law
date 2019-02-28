<template>
  <div>
    <ul>
      <li v-for="(item, index) of composition" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CrimeComposition',
  props: {
    composition: Array
  }
}
</script>

<style lang="stylus" scoped>
</style>
