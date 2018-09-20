<template>
  <div class="nav-div">
    <div class="nav">
      <div class="nav-word" v-for="(item, index) of nav[0]" :key="index" @mouseover="navMouseOver(index)" @mouseout="mouseOut">
        <router-link to="/">
          <a href="#">{{item}}</a>
        </router-link>
      </div>
      <transition name='fade'>
        <div class="nav-slide" :style="{marginLeft:this.navNum + 'px'}" v-show="navShow()" @mouseover="mouseOver" @mouseout="mouseOut">
          <li class="nav-slide-li" v-for="item of navList()" :key="item.key">
            <router-link to="/class">
              <a href="#">{{item}}</a>
            </router-link>
          </li>
        </div>
      </transition>
      <input class="nav-input" type="text" placeholder="搜索">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      nav: [
        ['首页', '家用电器', '电脑办公', '家居', '美妆', '图书'],
        ['电视', '冰箱', '空调', '饮水机'],
        ['笔记本', '打印机', '台式机', '电脑桌'],
        ['床', '沙发', '茶几', '衣柜'],
        ['口红', '眼影', '假发', '防晒霜'],
        ['古典文学', '现代文学', '诺奖获奖作品', '中学教材', '小学教材']
      ],
      mouseMove: false,
      navIndex: 0,
      navNum: 0
    }
  },
  methods: {
    navList () {
      let navList = this.nav[this.navIndex]
      return navList
    },
    navMouseOver (index) {
      if (index !== 0) {
        this.navIndex = index
        this.navNum = 100 + ((index - 1) * 102)
        this.mouseMove = true
      }
    },
    mouseOver () {
      this.mouseMove = true
    },
    mouseOut () {
      this.mouseMove = false
    },
    navShow () {
      return this.mouseMove
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-div
  width 100%
  height 40px
  background #ECECEC
  .nav
    width 1200px
    height 40px
    .nav-word
      float left
      width 100px
      height 40px
      text-align center
      line-height 40px
      font-size 14px
    .nav-word a:hover
      color red
    .nav-slide
      width 300px
      line-height 25px
      margin-top 40px
      position absolute
      top 150px
      z-index 999
      background #fff
      font-size 14px
      transition all 0.5s
      .nav-slide-li
        border-bottom 1px solid rgba(0, 0, 0, .1)
    .nav-input
      float right
      border 0px
      outline none
      width 190px
      height 25px
      line-height 40px
      margin-top 7px
      padding-left 10px
      padding-right 10px
.fade-enter-active, .fade-leave-active
  transition: opacity 1s
.fade-enter, .fade-leave-to
  opacity: 0;

</style>
