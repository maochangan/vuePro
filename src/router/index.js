import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import NavBar from '@/components/NavBar'
import UserCenter from '@/components/userCenter'
import UserInfo from '@/components/use/UserInfo'
import IndexFinal from '@/components/IndexFinal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexFinal,
      children: [
        {
          path: '/',
          component: Index
        },
        {
          path: '/test',
          name: 'NavBar',
          component: NavBar
        },
        {
          path: '/UserCenter',
          name: 'UserCenter',
          component: UserCenter,
          children: [
            {
              path: '/UserCenter/userInfo',
              name: 'userInfo',
              component: UserInfo
            }
          ]
        }
      ]
    }
  ]
})
