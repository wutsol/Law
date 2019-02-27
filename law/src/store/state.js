let defaultList = []

try { // 防止某些用户关闭本地数据存储引起的页面无法加载
  if (localStorage.list) {
    defaultList = localStorage.list
  }
} catch (e) {}

export default {
  list: defaultList
}
