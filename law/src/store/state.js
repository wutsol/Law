let defaultItem = ''

try { // 防止某些用户关闭本地数据存储引起的页面无法加载
  if (localStorage.userName) {
    defaultItem = localStorage.userName
  }
} catch (e) {}

export default {
  userName: defaultItem
}
