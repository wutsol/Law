<template>
  <div>
  <!-- echart表格 使用ref获取dom元素 避免在一个组件中重复使用覆盖的问题-->
    <div ref="myChart" id="chart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: 'MyEchart',
  props: {
    titleText: { // 标题文本
      type: String,
      default: ""
    },
    opinion: { // 扇形区域名称
      type: Array
    },
    opinionData: { // 扇形区域数据
      type: Array,
      default: []
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.Pie()
    })
  },
  methods: {
    eConsole(param) { // 监听扇形图点击
      console.log(param);
      // 向父组件传值 看需求
      // this.$emit("currentEchartData", param.name);
    },
    // 饼状图
    Pie() {
      this.charts = echarts.init(this.$refs.myChart);
      this.charts.setOption({
        title: {
          x: "center",
          // 标题文本
          text: this.titleText,
          bottom: 60,
          textStyle: {
          fontWeight: "normal",
          fontSize: 12
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%"
        },
        legend: {
          padding:[0,23,0,23],
          itemGap: 8,
          bottom: 10, //数值越小距离越大
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          // 扇形区域名称
          data: this.opinion
        },
        series: [{
          type: "pie",
          // color: ["#f09542", "#42a3d8", "#6ec290", "#da6184"],
          center: ["50%", "35%"],
          radius: ["25%", "50%"],
          // 默认防止标签重叠
          avoidLabelOverlap: false,
          startAngle: 80,
          label: {
            normal: {
              // \n\n让文字再视觉引导线的上面
              formatter: "{d}%\n\n",
              padding: [0, -40],
              position: "outer",
              fontSize: "1rem"
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 10,
              length2: 30
            }
          },
           // 扇形区域数据
          data: this.opinionData
        }]
     })
    }
  }
}
</script>
<style lang="stylus" scoped>
#chart {
width: 3.5rem;
height: 4rem;
div{    width:100%;
height:100%;
}}
</style>
