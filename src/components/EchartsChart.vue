<!-- 柱狀圖 -->
<!-- <template>
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
   -->
   <!-- 空心圓餅圖 -->
 <!-- <template>
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
            data: ['选项1', '选项2', '选项3'],
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
                { value: 234, name: '选项3' },
              ],
            },
          ],
        };
  
        myChart.setOption(option);
      },
    },
  };
  </script>  -->
  <!-- 實心圓餅圖 -->
  <!-- <template>
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
  
        // 绘制实心圆饼图
        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
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
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 2,
              },
              data: [
                { value: 335, name: '选项1' },
                { value: 310, name: '选项2' },
                { value: 234, name: '选项3' },
              ],
            },
          ],
        };
  
        myChart.setOption(option);
      },
    },
  };
  </script>
   -->
   <!-- <template>
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
</script> -->
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
            data: ['选项1', '选项2', '选项3', '选项4'],
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
                { value: 234, name: '选项3' },
                { value: 135, name: '选项4' },
              ],
            },
          ],
        };
  
        myChart.setOption(option);
      },
    },
  };
  </script>
  