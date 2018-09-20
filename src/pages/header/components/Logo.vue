<template>
  <div class="logo-div">
    <div class="logo">
      <img src="../../../../static/imgs/header/logo3.png">
    </div>
    <transition name='fade'>
      <div class="shop"
        @mouseover="mouseOver"
        @mouseout="mouseOut"
      >
        <img src="../../../../static/imgs/header/shop.png" style="float:left">
        <div class="shop-desc">{{many()}}个商品 - ￥{{sum()}}</div>
      </div>
    </transition>
    <div class="shop-detail"
      @mouseover="mouseOver"
      @mouseout="mouseOut"
      v-show="hasNoData"
    >
      <table class="shop-table">
        <tbody>
          <tr v-for="item in table" :key="item.key">
            <td>{{item.name}}</td>
            <td>￥{{item.cost}}</td>
          </tr>
        </tbody>
      </table>
      <table class="shop-table-all">
        <tbody>
          <tr>
            <td>商品总额</td>
            <td>￥{{sum()}}</td>
          </tr>
        </tbody>
      </table>
      <div class="bottom">
        <span class="bottom-span"><a href="#">查看购物车</a></span>
        <span class="bottom-span"><a href="#">去结账</a></span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLogo',
  data () {
    return {
      table: [
        {name: '冰箱', cost: '10'},
        {name: '彩电', cost: '50'},
        {name: '洗衣机', cost: '90'}
      ],
      touchMove: false
    }
  },
  methods: {
    sum () {
      let sum = 0
      this.table.forEach(cost => {
        sum += Number(cost['cost'])
      })
      return sum.toFixed(2)
    },
    many () {
      let many = this.table.length
      return many
    },
    mouseOver () {
      this.touchMove = true
    },
    mouseOut () {
      this.touchMove = false
    }
  },
  computed: {
    hasNoData () {
      return this.touchMove
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo-div
  width 1200px
  height 114px
  .logo
    width 250px
    float left
    margin-top 10px
  .shop
    width 200px
    height 40px
    float right
    margin-top 37px
    .shop-desc
      float left
      margin-left 18px
      margin-top 10px
      font-weight bold
  .shop:hover
    cursor pointer
  .shop-detail
    width 342px
    z-index 999
    border 1px solid #f1f1f1
    position relative
    top 75px
    left 450px
    padding 20px
    background #ffffff
    .shop-table
      min-width 300px
      margin 10px auto
    .shop-table td,th
      border 1px solid rgba(0, 0, 0, .2)
      padding 5px
    .shop-table-all
      min-width 300px
      margin 10px auto
    .shop-table-all td,th
      border 1px solid rgba(0, 0, 0, .2)
      padding 5px
    .bottom
      text-align right
      margin-right 10px
      .bottom-span
        margin-left 20px
</style>
