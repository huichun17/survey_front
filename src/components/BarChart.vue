<template>
    <div>
      <div ref="chart" style="width: 400px; height: 400px;"></div>
    </div>
  </template>
  
  <script>
import * as echarts from 'echarts';

  
  export default {
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const chartDom = this.$refs.chart;
        const myChart = echarts.init(chartDom);
        
        // 在这里使用echarts绘制图表的代码
  
        // 示例：绘制一个简单的柱状图
        const option = {
          xAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E', 'F'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [10, 20, 30, 40, 50, 60],
              type: 'bar',
            },
          ],
        };
  
        myChart.setOption(option);
      },
    },
  };
  </script>
  