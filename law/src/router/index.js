import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Decision from '@/pages/decision/Decision'
import Case from '@/pages/case/Case'
import CaseHome from '@/pages/case/components/caseHome'
import DecisionReport from '@/pages/decision/components/report'
import CaseAccusation from '@/pages/case/components/secondClassify'

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
      path: '/detail/0002',
      name: 'Case',
      component: Case
    }, {
      path: '/report',
      name: 'DecisionReport',
      component: DecisionReport
    }, {
      path: '/caseDetail/:id',
      name: 'CaseHome',
      component: CaseHome
    }, {
      path: '/accusation/:id',
      name: 'CaseAccusation',
      component: CaseAccusation
    }],
  scrollBehavior (to, from, savedPosition) { // 使页面跳转时每次都在顶部出现
    return { x: 0, y: 0 }
  }
})
