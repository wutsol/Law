import Vue from 'vue'
import Router from 'vue-router'
// import iView from 'iview'
const LoginHome = r => require.ensure([], () => r(require('@/pages/login/Login')), 'group-login')
const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'group-home')
const Decision = r => require.ensure([], () => r(require('@/pages/decision/Decision')), 'group-decision')
const DecisionReport = r => require.ensure([], () => r(require('@/pages/decision/components/report')), 'group-decision')
const DecisionCaseDetail = r => require.ensure([], () => r(require('@/pages/decision/components/decisionCaseDetail')), 'group-decision')
const Case = r => require.ensure([], () => r(require('@/pages/case/Case')), 'group-case')
const CaseDetail = r => require.ensure([], () => r(require('@/pages/case/components/caseDetail')), 'group-case')
const CaseHome = r => require.ensure([], () => r(require('@/pages/case/components/caseHome')), 'group-case')
const CaseAccusation = r => require.ensure([], () => r(require('@/pages/case/components/secondClassify')), 'group-case')
const LawHome = r => require.ensure([], () => r(require('@/pages/law/Home')), 'group-law')
const LawName = r => require.ensure([], () => r(require('@/pages/law/components/lawName')), 'group-law')
const LawDetail = r => require.ensure([], () => r(require('@/pages/law/components/lawDetail')), 'group-law')

Vue.use(Router)
// Vue.use(iView)
// Router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start()
//     next()
// })

// Router.afterEach(route => {
//     iView.LoadingBar.finish()
// })

export default new Router({
  routes: [{
    path: '/login',
    name: 'LoginHome',
    component: LoginHome
  }, {
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
  }, { // 智能决策
    path: '/report/:fact',
    name: 'DecisionReport',
    component: DecisionReport
  }, { // 罪名解释主页
    path: '/crimeDetail/:accu_name',
    name: 'CaseHome',
    component: CaseHome
  }, { // 二级罪名
    path: '/accusation/:_id',
    name: 'CaseAccusation',
    component: CaseAccusation
  }, { // 罪名库中的案例内容
    path: '/caseDetail/:index',
    name: 'CaseDetail',
    component: CaseDetail
  }, { // 智能决策中的案例内容
    path: '/decisionCaseDetail/:index',
    name: 'DecisionCaseDetail',
    component: DecisionCaseDetail
  }, { // 二级法条
    path: '/lawName/:title',
    name: 'LawName',
    component: LawName
  }, { // 法条内容
    path: '/lawDetail/:law',
    name: 'LawDetail',
    component: LawDetail
  }],
  scrollBehavior (to, from, savedPosition) { // 使页面跳转时每次都在顶部出现
    return { x: 0, y: 0 }
  }
})
