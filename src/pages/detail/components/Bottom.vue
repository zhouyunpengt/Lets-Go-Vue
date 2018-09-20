<template>
  <div class="body">
    <div class="list-tab">
      <div class="tab-detail" @click="showDetail" :class="{detailActive: hasActive}">商品详情</div>
      <div class="tab-attribute" @click="showBottom" :class="{bottomActive: !hasActive}">规格参数</div>
    </div>
    <div class="img" v-show="showActive">
      <img v-for="(item, index) of imgList" :key="index" :src="item">
    </div>
    <div class="desc" v-show="!showActive">
      <div class="desc-attr">
        <p>证书编号 2016011609909288</p>
        <p>3C规格型号 M17、M17_A、M17_B、M1</p>
        <p>保修期 12个月</p>
        <p>架构类型 A53</p>
        <p>运行内存RAM 1GB</p>
      </div>
      <div class="desc-attr" v-for="item of 2" :key="item.key">
        <p>证书状态 有效</p>
        <p>产品名称 天猫魔盒 M18_A</p>
        <p>内存容量(ROM) 8GB</p>
        <p>架构类型 A53</p>
        <p>运行内存RAM 1GB</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottom',
  data () {
    return {
      imgList: [
        '../../../../static/imgs/detail/1.jpg',
        '../../../../static/imgs/detail/2.png',
        '../../../../static/imgs/detail/3.png',
        '../../../../static/imgs/detail/4.png',
        '../../../../static/imgs/detail/5.png',
        '../../../../static/imgs/detail/6.jpg',
        '../../../../static/imgs/detail/7.jpg',
        '../../../../static/imgs/detail/8.png',
        '../../../../static/imgs/detail/9.png',
        '../../../../static/imgs/detail/10.jpg',
        '../../../../static/imgs/detail/11.png',
        '../../../../static/imgs/detail/12.png'
      ],
      hasActive: true,
      borderActive: true,
      showActive: true
    }
  },
  methods: {
    showDetail () {
      this.hasActive = true
      this.showActive = true
    },
    showBottom () {
      this.hasActive = false
      this.showActive = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.body
  width 1200px
  .list-tab
    width 1200px
    height 50px
    border 1px solid rgba(0, 0, 0, .1)
    .tab-detail
      width 98px
      height 48px
      float left
      text-align center
      line-height 48px
      cursor pointer
    .tab-attribute
      width 98px
      height 48px
      float left
      text-align center
      line-height 48px
      cursor pointer
    .detailActive
      color red
      border-top 1px solid red
      border-right 1px solid lightgray
    .bottomActive
      color red
      border-top 1px solid red
      border-left 1px solid lightgray
  .img
    width 1200px
    margin-top 20px
    border 1px solid rgba(0, 0, 0, .1)
    padding-top 30px
    text-align center
  .desc
    width 1200px
    height 150px
    border 1px solid rgba(0, 0, 0, .1)
    margin-top 20px
    .desc-attr
      width 350px
      height 85px
      float left
      padding 20px 20px 20px 20px

</style>
