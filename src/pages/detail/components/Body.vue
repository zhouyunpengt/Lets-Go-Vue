<template>
  <div class="body-div">
    <div class="img">
      <div class="big-img">
        <img :src="imgList[this.imgBig]" width="400">
      </div>
      <div class="img-choose">
        <img v-for="(item, index) of imgList" :key="index" @mouseover="mouseOver(index)" :src="item" width="60">
      </div>
    </div>
    <div class="desc">
      <p class="desc-title">【新品立省30】天猫魔盒4A智能语音网络电视机顶盒天猫魔盒M18_A</p>
      <div class="desc-price">
        <p class="old-price">
          <span class="old-price-label">专柜价</span>
          <span class="old-price-price">￥229.00</span>
        </p>
        <p class="new-price">
          <span class="new-price-label">促销价</span>
          <span class="unit">￥</span>
          <span class="new-price-price">199.00</span>
        </p>
      </div>
      <div class="buy-count">
        <span class="count-label">数量</span>
        <div class="count-info">
          <input class="input-count" type="text" v-model="inputNum">
          <div class="count">
            <span class="add" @click="inputAdd">&lt;</span>
            <span class="cut" @click="inputCut">&gt;</span>
          </div>
        </div>
      </div>
      <div class="produt-go">
        <a class="produt-buy" href="/#/detail">立刻购买</a>
        <a class="produt-cart" href="/#/detail">加入购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBody',
  data () {
    return {
      imgList: [
        '../../../../static/imgs/detail/img1.jpg',
        '../../../../static/imgs/detail/img2.jpg',
        '../../../../static/imgs/detail/img3.jpg',
        '../../../../static/imgs/detail/img4.jpg',
        '../../../../static/imgs/detail/img5.jpg'
      ],
      imgBig: 0,
      inputNum: 1
    }
  },
  methods: {
    mouseOver (index) {
      index = Number(index)
      this.imgBig = index
    },
    inputAdd () {
      this.inputNum += 1
    },
    inputCut () {
      if (this.inputNum > 1) {
        this.inputNum -= 1
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.body-div
  width 1200px
  height 535px
  margin-top 20px
  .img
    width 420px
    hegiht 535px
    float left
    .big-img
      width 400px
      height 400px
      padding 10px
      border 1px solid rgba(0, 0, 0, .1)
      border-left none
    .img-choose
      width 420px
      hegiht 135px
    .img-choose img
      padding 20px 10px 20px 10px
      cursor pointer
  .desc
    width 749px
    height 535px
    margin-left 30px
    float left
    border-right 1px solid rgba(0, 0, 0, .1)
    .desc-title
      font-size 16px
      font-weight 700
      color #000
    .desc-price
      padding 20px 10px 10px 10px
      margin-left 0px
      width 710px
      background #e9e9e9
      margin-top 10px
      .old-price
        margin-bottom 20px
        .old-price-label
          color #999
          font-size 12px
          margin-right 45px
        .old-price-price
          font-weight bold
      .new-price
        color rgb(255, 0, 54)
        margin-bottom 20px
        .unit
          font-size 22px
        .new-price-label
          margin-right 45px
          font-weight bold
        .new-price-price
          font-size 32px
          font-weight bold
    .buy-count
      margin-top 20px
      .count-label
        margin-left 10px
        color #999
        margin-right 40px
        float left
      .count-info
        display inline-block
        .input-count
          width 40px
          height 30px
          vertical-align top
          float left
        .count
          margin-left 5px
          float left
          width 30px
          .add
            float left
            width 15px
            height 15px
            line-height 13px
            text-align center
            border 1px solid black
            float left
            transform rotate(90deg)
          .cut
            float left
            width 15px
            height 15px
            line-height 13px
            margin-top 2px
            text-align center
            border 1px solid black
            transform rotate(90deg)
            float left
        .count:hover
          cursor pointer
          user-select none
    .produt-go
      width 749px
      margin-top 100px
      text-align center
    .produt-go a
      font-size 16px
      height 38px
      line-height 38px
      border 1px solid #FF0036
      padding 10px 40px
      margin-right 10px
    .produt-buy
      color #FF0036
      background #ffeded
    .produt-cart
      background #ff0036
      border 1px solid #ff0036
      color #fff

</style>
