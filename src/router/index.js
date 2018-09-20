import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Class from '@/pages/class/Class'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
