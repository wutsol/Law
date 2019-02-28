<template>
  <div id="box">
         <!--点击设置msg的值  如果msg等于0，第一个a添加cur类名，如果msg等于1，第二个a添加cur类名，以此类推。
            添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
        <div class="tab-tit">
            <a href="javascript:;" @click="msg=0" :class="{'cur':msg===0}">html</a>
            <a href="javascript:;" @click="msg=1" :class="{'cur':msg===1}">css</a>
            <a href="javascript:;" @click="msg=2" :class="{'cur':msg===2}">javascript</a>
            <a href="javascript:;" @click="msg=3" :class="{'cur':msg===3}">vue</a>
        </div>
            <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
                如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con">
            <div v-show="msg===0">
                html
            </div>
            <div v-show="msg===1">
                css
            </div>
            <div v-show="msg===2">
                javascript
            </div>
            <div v-show="msg===3">
                vue
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      msg: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  #box{
      width: 100%;
      margin: 0 auto;
  }
  .tab-tit{
      font-size: 0;
      width: 600px;
  }
  .tab-tit a{
      display: inline-block;
      height: 50px;
      line-height: 50px;
      width: 25%;
      font-size: 18px;
      text-align: center;
      background: #ccc;
      color: #333;
      text-decoration:none;
  }
  .tab-tit .cur{
      background: #09f;
      color: #fff;
  }
  .tab-con div{
      border: 1px solid #ccc;
      height: 400px;
      width: 598px;
      margin: 0 auto;
      padding-top: 20px;
  }
</style>
