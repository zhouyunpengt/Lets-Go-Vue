<template>
  <div>
    <header-top></header-top>
    <header-logo></header-logo>
    <header-nav></header-nav>
  </div>
</template>

<script>
import HeaderTop from './components/Top'
import HeaderLogo from './components/Logo'
import HeaderNav from './components/Nav'
export default {
  name: 'Header',
  components: {
    HeaderTop,
    HeaderLogo,
    HeaderNav
  }
}
</script>

<style>

</style>
