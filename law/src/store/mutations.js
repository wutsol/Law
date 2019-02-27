export default {
  pushCaseList (state, list) {
    state.list = list
    try {
      localStorage.list = list // 借助localStorage本地存储数据，防止页面刷新时城市出错
    } catch (e) {}
  }
}
