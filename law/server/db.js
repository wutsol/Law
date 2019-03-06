const mongoose = require('mongoose')
const db = mongoose.connect(" mongodb://3.16.128.130:27017/law", { useNewUrlParser: true }, function (err) {
  if (err) {
      console.log(err)
  } else {
      console.log("Connection success !")
  }
})

const lawSchema = mongoose.Schema({
  accu_name: String,
  accu_belong_to: String
  // sex : String,
  // address : String,
  // dowhat : String,
  // imgArr:[],
  // favourite:String,
  // explain:String
}, { collection: 'final'})
//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，我这里写了myhreo，目的就是为了以后操作数据要去myhreo表中。
//这里不写第二个参数的话，后面你会遇到坑。

//导出model模块
const Law = module.exports = mongoose.model('law',lawSchema)
