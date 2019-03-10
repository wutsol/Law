import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Decision from '@/pages/decision/Decision'
import Case from '@/pages/case/Case'
import LawHome from '@/pages/law/Home'
import LawName from '@/pages/law/components/lawName'
import LawDetail from '@/pages/law/components/lawDetail'
import CaseHome from '@/pages/case/components/caseHome'
import CaseDetail from '@/pages/case/components/caseDetail'
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
      path: '/detail/0003',
      name: 'LawHome',
      component: LawHome
    }, {
      path: '/report',
      name: 'DecisionReport',
      component: DecisionReport
    }, {
      path: '/crimeDetail/:accu_name',
      name: 'CaseHome',
      component: CaseHome
    }, {
      path: '/accusation/:_id',
      name: 'CaseAccusation',
      component: CaseAccusation
    }, {
      path: '/caseDetail/:index',
      name: 'CaseDetail',
      component: CaseDetail
    }, {
      path: '/lawName/:title',
      name: 'LawName',
      component: LawName
    }, {
      path: '/lawDetail/:law',
      name: 'LawDetail',
      component: LawDetail
    }],
  scrollBehavior (to, from, savedPosition) { // 使页面跳转时每次都在顶部出现
    return { x: 0, y: 0 }
  }
})
