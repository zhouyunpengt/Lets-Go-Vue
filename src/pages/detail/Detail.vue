<template>
  <div>
    <header-header></header-header>
    <scroll-top></scroll-top>
    <detail-body></detail-body>
    <detail-bottom></detail-bottom>
  </div>
</template>

<script>
import HeaderHeader from '../header/Header'
import ScrollTop from '../scroll/Scroll'
import DetailBody from './components/Body'
import DetailBottom from './components/Bottom'
export default {
  name: 'Detail',
  components: {
    HeaderHeader,
    ScrollTop,
    DetailBody,
    DetailBottom
  }
}
</script>

<style>

</style>
