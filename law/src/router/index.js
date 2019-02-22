import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Decision from '@/pages/decision/Decision'
import DecisionReport from '@/pages/decision/components/report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/detail/0001',
      name: 'Decision',
      component: Decision
    }, {
      path: '/report',
      name: 'DecisionReport',
      component: DecisionReport
    }]
})
