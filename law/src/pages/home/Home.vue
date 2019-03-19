<template>
  <div>
    <home-header :title="title"></home-header>
    <home-pictures :imgUrl="imgUrl"></home-pictures>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <div class="home-info"></div>
  </div>
</template>

<script>
import HomeHeader from 'common/HomeHeader'
import HomePictures from 'common/Pictures'
import HomeIcons from './components/iconSwiper'
import HomeRecommend from './components/Recommend'
// import axios from 'axios'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomePictures,
    HomeIcons,
    HomeRecommend
  },
  data () {
    return {
      title: '法务通',
      recommendList: [{
        fact: '利辛县人民检察院指控：2016年5月份，被告人徐某甲将自行生产的无农药登记的“苯醚甲环唑”农药销售给零售商朱某。被害人宋某和张某将从朱某处购买的“苯醚甲环唑”和“甲托”两种农药混合对种植的葡萄施用，因农药未起到预防治病菌的效果，致使两名被害人种植的葡萄果实发生病害，经济损失共计为1780849元。经检验“苯醚甲环唑”和“甲托”均为伪劣农药。经鉴定，葡萄病害因农药未达到防治效果所致。公诉机关提供了书证、证人证言、被害人陈述、被告人的供述与辩解、辨认笔录、现场勘查笔录、检验报告等证据，认为被告人徐某甲的行为犯了《中华人民共和国刑法》××之规定，提请本院以生产、销售伪劣农药罪追究其刑事责任。',
        prison: {death_penalty: false, imprisonment: 84, life_imprisonment: false},
        death_penalty: false,
        imprisonment: 84,
        life_imprisonment: false,
        punish_of_money: 2000
      }, {
        fact: '公诉机关指控，被告人顾某伙同动物检疫人员，利用动物检疫人员的职务，徇私舞弊，共同伪造检疫结果，其行为已触犯《中华人民共和国刑法》××××、××之规定，犯罪事实清楚，证据确实充分，应当以××罪追究其刑事责任。被告人顾某具有自首情节，根据《中华人民共和国刑法》××××之规定，可以从轻或者减轻处罚。',
        prison: {death_penalty: false, imprisonment: 4, life_imprisonment: false},
        death_penalty: false,
        imprisonment: 4,
        life_imprisonment: false,
        punish_of_money: 0
      }, {
        fact: '上海市浦东新区人民检察院指控：2016年8月底9月初，被告人倪某在获知金米袋的第三方支付平台存在漏洞，可利用fiddler软件抓包的方式无限提现的信息后，在上海锦米袋金融信息服务有限公司(以下简称“锦米袋公司”)的金米袋APP上注册账户并关联其名下的银行卡，对该账户投资、赎回的过程中使用fiddler软件恶意操作，非法窃取锦米袋公司支付平台内人民币600元。2016年9月1日，被告人倪某再次注册账户并关联朱某银行卡，采用上述相同的手法，窃取锦米袋公司支付平台内人民币7,300元。嗣后，被告人倪某将利用fiddler软件抓包的方式窃取锦米袋公司支付平台内钱款的方法，分别传授给林某某、杨某某、郭某某、张某某(均另案处理)等人，林某某、杨某某、郭某某等人分别按照其所传授方法，从锦米袋公司支付平台窃取钱款共计人民币59万余元，且在事后分别给予倪某好处费。公诉机关认为，被告人倪某以非法占有为目的，采用秘密手段，窃取公私财物，数额较大，应当以××罪追究其刑事责任。被告人倪某向他人××，应当以××罪追究其刑事责任。被告人倪某在判决宣告前一人犯数罪，应当实行数罪并罚。被告人倪某能如实供述自己的罪行，可以从轻处罚。依法提请审判。公诉机关为证实其指控，当庭讯问了被告人，宣读和出示了相关证据。',
        prison: {death_penalty: false, imprisonment: 21, life_imprisonment: false},
        death_penalty: false,
        imprisonment: 21,
        life_imprisonment: false,
        punish_of_money: 2000
      }],
      iconList: [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '智能决策'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '罪名库'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '法条库'
      }],
      imgUrl: 'http://img.smzy.com/Soft/UploadPic/2016-10/2016102516415011331.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-info
    height 1rem
    background-color: #AFAFAF
</style>
