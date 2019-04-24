let defaultItem = ''
let defaultList = []
let defaultIndex = 0
let defaultArticle = {}

try { // 防止某些用户关闭本地数据存储引起的页面无法加载
  if (localStorage.userName) {
    defaultItem = localStorage.userName
  }
  if (localStorage.getItem('historyList')) {
    defaultList = JSON.parse(localStorage.getItem('historyList')) // 数组要用JSON.parse()存放！
  }
  if (localStorage.getItem('articleIndex')) {
    defaultIndex = JSON.parse(localStorage.getItem('articleIndex'))
  }
  if (localStorage.getItem('article')) {
    defaultArticle = JSON.parse(localStorage.getItem('article'))
  }
} catch (e) {}

export default {
  userName: defaultItem,
  historyList: defaultList,
  articleIndex: defaultIndex,
  article: defaultArticle
}
