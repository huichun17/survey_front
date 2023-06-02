<template>
    <div>
        <!-- 其他统计页面的内容 -->

        <EchartsChart />
        <BarChart />
        <PieChart2 />
        <PieChart3 />
        <PieChart4 />
    </div>
</template>
  
<script>
import EchartsChart from '../components/EchartsChart.vue';
import BarChart from '../components/BarChart.vue';
import PieChart2 from '../components/PieChart2.vue';
import PieChart3 from '../components/PieChart3.vue';
import PieChart4 from '../components/PieChart4.vue';

export default {
    components: {
        EchartsChart, BarChart, PieChart2, PieChart3, PieChart4
    },
};
</script>
  