let defaultItem = '点击登录'

try { // 防止某些用户关闭本地数据存储引起的页面无法加载
  if (localStorage.item) {
    defaultItem = localStorage.item
  }
} catch (e) {}

export default {
  item: defaultItem
}
