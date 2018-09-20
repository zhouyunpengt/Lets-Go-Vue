<template>
  <div class="scroll-div" @click="srollTop" v-show="showScroll">TOP</div>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      showScroll: false
    }
  },
  methods: {
    srollTop () {
      let i = setInterval(() => {
        if (document.documentElement.scrollTop > 0) {
          document.documentElement.scrollTop = document.documentElement.scrollTop - 50
        } else {
          clearInterval(i)
        }
      }, 5)
    },
    scrollPosition () {
      if (document.documentElement.scrollTop !== 0) {
        this.showScroll = true
      } else {
        this.showScroll = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.scrollPosition)
  }
}
</script>

<style lang="stylus" scoped>
.scroll-div
  width 44px
  height 44px
  background #ef5d5d
  position fixed
  right 20px
  bottom 200px
  text-align center
  line-height 44px
  color #fff
  font-size 18px
  cursor pointer
</style>
