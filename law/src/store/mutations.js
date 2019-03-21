export default {
  setName (state, userName) {
    state.userName = userName
    try {
      localStorage.userName = userName // 借助localStorage本地存储数据，防止页面刷新时城市出错
    } catch (e) {}
  },
  setHistory (state, historyList) {
    state.historyList = state.historyList.concat(historyList)
    try {
      localStorage.historyList = localStorage.historyList.concat(historyList)
    } catch (e) {}
  }
}
