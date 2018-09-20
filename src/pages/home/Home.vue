<template>
  <div>
    <header-header></header-header>
    <scroll-top></scroll-top>
    <home-swiper></home-swiper>
    <home-goods></home-goods>
  </div>
</template>

<script>
import HeaderHeader from '../header/Header'
import ScrollTop from '../scroll/Scroll'
import HomeSwiper from './components/Swiper'
import HomeGoods from './components/Goods'
export default {
  name: 'Home',
  components: {
    HeaderHeader,
    ScrollTop,
    HomeSwiper,
    HomeGoods
  }
}
</script>

<style>

</style>
