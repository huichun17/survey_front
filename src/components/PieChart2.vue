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
  
        // 绘制圆饼图
        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 10,
            data: ['选项1', '选项2'],
          },
          series: [
            {
              name: '选项',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 335, name: '选项1' },
                { value: 310, name: '选项2' },
              ],
            },
          ],
        };
  
        myChart.setOption(option);
      },
    },
  };
  </script>