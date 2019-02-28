<template>
  <div class="container">
    <p class="container-name">
      {{this.name}}
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
  .container
    margin-top .2rem
    padding .4rem
    background-color: #FFF
    .container-name
      line-height .5rem
      font-size .44rem
    .container-concept
      margin-top .25rem
      line-height .5rem
      text-indent 2em
      font-size .3rem
</style>
