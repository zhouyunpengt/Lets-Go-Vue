<template>
  <div class="header">
    <div class="header-center">
      <span class="header-span" v-for="item of li" :key="item.key">
        <a class="header-a" href="#">{{item}}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTop',
  data () {
    return {
      li: ['会员中心', '购物车', '收藏', '结账']
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 30px
  background #333
  .header-center
    width 1200px
    height 30px
    text-align right
    .header-span
      line-height 30px
      margin-left 50px
      .header-a
        color #c5c5c5
</style>
