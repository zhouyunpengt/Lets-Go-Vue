<template>
  <div class="desc-div">
    <span class="desc-one">家用电器</span>
    <span class="desc-two">&gt;</span>
    <span class="desc-three">电视</span>
  </div>
</template>

<script>
export default {
  name: 'ClassDesc'
}
</script>

<style lang="stylus" scoped>
.desc-div
  margin-top 10px
  padding-left 30px
  width 1200px
  height 50px
  .desc-one
    font-size 22px
    font-weight 600
    cursor pointer
  .desc-two
    font-size 14px
    cursor pointer
    color #555
  .desc-three
    font-size 14px
    cursor pointer
    color #555
  .desc-one:hover,.desc-two:hover,.desc-three:hover
    color #ef5d5d
</style>
