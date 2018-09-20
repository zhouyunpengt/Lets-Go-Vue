<template>
  <div class="goods-div">
    <div class="goods" v-for="item of imgList" :key="item.key">
      <router-link to="/detail">
        <img class="goods-img" :src="item" width="280">
      </router-link>
      <div class="goods-info">
        <div class="goods-name">商品名称</div>
        <div class="goods-star">★★★★★</div>
        <div class="goods-line">————————</div>
        <div class="goods-cost">￥2,999.00&nbsp;<s class="goods-cost-s">￥3,799.00</s></div>
        <div>
          <button class="goods-shopping">加入购物车</button>
          <button class="goods-collection">收藏</button>
          <button class="goods-contrast">对比</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassGoods',
  data () {
    return {
      imgList: [
        '../../../../static/imgs/class/product-1.jpg',
        '../../../../static/imgs/class/product-2.jpg',
        '../../../../static/imgs/class/product-3.jpg',
        '../../../../static/imgs/class/product-4.jpg',
        '../../../../static/imgs/class/product-5.jpg',
        '../../../../static/imgs/class/product-6.jpg',
        '../../../../static/imgs/class/product-7.jpg',
        '../../../../static/imgs/class/product-1.jpg'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.goods-div
  width 1200px
  height 950px
  background #ECECEC
  .goods
    width 280px
    height 430px
    float left
    margin-left 10px
    margin-right 10px
    margin-top 15px
    margin-bottom 10px
    background #fff
    padding-bottom 15px
  .goods-img:hover
    cursor pointer
  .goods-info
    padding 15px 10px
    .goods-name
      height 20px
      margin-bottom 5px
      font-size 16px
    .goods-star
      font-size 18px
      color orange
    .goods-line
      color lightgray
    .goods-cost
      color red
      font-size 18px
      font-weight bold
      .goods-cost-s
        color black
        font-size 16px
        font-weight normal
    .goods-shopping:hover
      background #000
    .goods-shopping
      margin-top 10px
      background #ef5d5d
      border none
      width 95px
      height 25px
      color #fff
      text-align center
    .goods-collection:hover,.goods-contrast:hover
      background #ef5d5d
      color #fff
    .goods-collection
      margin-left 35px
    .goods-collection,.goods-contrast
      background #fff
      width 60px
      height 25px
      border solid 1px lightgray
      text-align center
      color #555
      display none
.goods:hover .goods-collection
  display inline
.goods:hover .goods-contrast
  display inline
</style>
