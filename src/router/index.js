import Vue from 'vue'
import Router from 'vue-router'
import IndexFinal from '@/components/IndexFinal'
import FirstPage from '@/components/index/FirstPage'
import SecondPage from '@/components/index/SecondPage'
import ThirdPage from '@/components/index/ThirdPage'
import FourthPage from '@/components/index/FourthPage'
import fifthPage from '@/components/index/FifthPage'
import SixthPage from '@/components/index/SixthPage'
import Index from '@/components/index/Index'
import GoodsSearch from '@/components/goods/GoodsSearch'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexFinal,
      children: [
        {
          path: '/',
          component: FirstPage,
        },
        {
          name: 'Search',
          path: '/Search',
          component: GoodsSearch,
        },
        {
          path: '/Second',
          component: SecondPage,
          children: [
            {
              path: '/Second',
              component: Index
            }
          ]
        },
        {
          path: '/Third',
          component: ThirdPage
        },
        {
          path: '/fourth',
          component: FourthPage
        },
        {
          path: '/fifth',
          component: fifthPage
        },
        {
          path: '/sixth',
          component: SixthPage
        }
      ]
    }
  ]
})
