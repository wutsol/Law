// 引入express模块
const express = require('express')
// 定义路由级中间件
const router = express.Router()
// 引入数据模型模块
const Law = require('./db')

// 查询所有信息
router.get('/getLaw', (req, res) => {
  Law.find({})
     .sort({ update_at : -1})
     .then(laws => {
       res.json(laws)
     })
     .catch(err => {
       res.json(err)
     })
})

module.exports = router
