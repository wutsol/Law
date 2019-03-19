export default {
  setName (state, item) {
    state.item = item
    try {
      localStorage.item = item // 借助localStorage本地存储数据，防止页面刷新时城市出错
    } catch (e) {}
  }
}
