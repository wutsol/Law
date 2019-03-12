import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'group-home')
const Decision = r => require.ensure([], () => r(require('@/pages/decision/Decision')), 'group-decision')
const DecisionReport = r => require.ensure([], () => r(require('@/pages/decision/components/report')), 'group-decision')
const Case = r => require.ensure([], () => r(require('@/pages/case/Case')), 'group-case')
const CaseDetail = r => require.ensure([], () => r(require('@/pages/case/components/caseDetail')), 'group-case')
const CaseHome = r => require.ensure([], () => r(require('@/pages/case/components/caseHome')), 'group-case')
const CaseAccusation = r => require.ensure([], () => r(require('@/pages/case/components/secondClassify')), 'group-case')
const LawHome = r => require.ensure([], () => r(require('@/pages/law/Home')), 'group-law')
const LawName = r => require.ensure([], () => r(require('@/pages/law/components/lawName')), 'group-law')
const LawDetail = r => require.ensure([], () => r(require('@/pages/law/components/lawDetail')), 'group-law')

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
