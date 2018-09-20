<template>
  <div class="page-div">
    <div class="page">
      <div class="page-big"><a href="/#/class">上一页</a></div>
      <div class="page-info" v-for="item of 10" :key="item.key">
        <a href="/#/class">{{item}}</a>
      </div>
      <div class="page-big"><a href="/#/class">下一页</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassPage'
}
</script>

<style lang="stylus" scoped>
.page-div
  width 1200px
  height 40px
  .page
    float right
    .page-big
      width 70px
      height 35px
      line-height 35px
      text-align center
      font-size 16px
      float left
      border 1px solid rgba(0,0,0,.2)
      margin 3px
      color #333
    .page-info
      width 32px
      height 35px
      border 1px solid rgba(0,0,0,.2)
      line-height 35px
      text-align center
      font-size 16px
      float left
      margin 3px
      color #333
</style>
