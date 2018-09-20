<template>
  <div class="wrapper">
    <swiper :options="this.swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      list: [
        {
          id: 1,
          imgUrl: '../../../../static/imgs/home/banner-1.jpg'
        },
        {
          id: 2,
          imgUrl: '../../../../static/imgs/home/banner-2.jpg'
        },
        {
          id: 3,
          imgUrl: '../../../../static/imgs/home/banner-3.jpg'
        }
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3500
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet
  background #ffffff !important
.wrapper
  width 1200px
  height 600px
  margin-top 30px
</style>
