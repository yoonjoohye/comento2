import Vue from 'vue'
import Router from 'vue-router'
import vuejquery from 'vue-jquery'
import lineClamp from 'vue-line-clamp'
import Tutorial1 from '@/components/Tutorial1'
import Tutorial2 from '@/components/Tutorial2'
import Tutorial3 from '@/components/Tutorial3'
import Tutorial4 from '@/components/Tutorial4'

Vue.use(Router);
Vue.use(vuejquery);
Vue.use(lineClamp, {});

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Tutorial1',
      component: Tutorial1
    },
    {
      path: '/tutorial2',
      name: 'Tutorial2',
      component: Tutorial2
    },
    {
      path: '/tutorial3',
      name: 'Tutorial3',
      component: Tutorial3
    },
    {
      path: '/tutorial4',
      name: 'Tutorial4',
      component: Tutorial4
    }
  ]
})
