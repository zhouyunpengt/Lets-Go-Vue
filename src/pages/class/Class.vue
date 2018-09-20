<template>
  <div>
    <header-header></header-header>
    <scroll-top></scroll-top>
    <class-desc></class-desc>
    <class-goods></class-goods>
    <class-page></class-page>
  </div>
</template>

<script>
import HeaderHeader from '../header/Header'
import ScrollTop from '../scroll/Scroll'
import ClassDesc from './components/Desc'
import ClassGoods from './components/Goods'
import ClassPage from './components/Page'
export default {
  name: 'Class',
  components: {
    HeaderHeader,
    ScrollTop,
    ClassDesc,
    ClassGoods,
    ClassPage
  }
}
</script>

<style>

</style>
