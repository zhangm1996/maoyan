import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/movie'
import Center from '@/views/center'
import Cinema from '@/views/cinema'
import Now from '@/views/movie/now'
import Soon from '@/views/movie/soon'
import Detail from '@/views/detail'
import Ticket from '@/views/ticket'
import Studios from '@/views/studios'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      // name: 'home',
      component: Movie,
      children:[
        {
          path:'now',
          component:Now
        },
        {
          path:'soon',
          component:Soon
        },
        {
          path:'',
          redirect: '/movie/now'
        }
      ]
    },
    {
      path: '/center',
      // name: 'home',
      component: Center
    },
    {
      path: '/cinema',
      // name: 'home',
      component: Cinema
    },
    {
      path: '/',
      // name: 'home',
      redirect: '/movie'
    },
    // {
    //   path: '/detail',
    //   // name: 'home',
    //   component: Detail
    // },
    {
      path: '/detail/:id', // 动态路由
      //name: 'detail', //命令路由
      component: Detail
    },
    {
      path: '/ticket/:id',
      // name: 'home',
      component: Ticket
    },
    {
      path: '/studios/:id',
      // name: 'home',
      component: Studios
    }
    // {
    //   path: '/about',
    //  // name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
