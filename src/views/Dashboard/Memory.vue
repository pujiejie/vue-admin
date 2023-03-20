<template>
  <div>
    <h3>内存</h3>
    <div id="main" style="width: 50%;height:400px;" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getMemory, getCpu, getSys } from "@/api/system.js";

export default {
  data() {
    return {
      myChart: "",
      arr: [, , , , , , ,]
    };
  },
  async mounted() {
    const result = await getMemory(this.$store.state.token);
    const result1 = await getCpu(this.$store.state.token);
    const result2 = await getSys(this.$store.state.token);
    console.log(result1, result2);
    this.arr.shift();
    this.arr.push(result.data.usedMemory);

    this.myChart = echarts.init(this.$refs["main"]);
    this.myChart.setOption({
      xAxis: {
        type: "category",
        data: [0, 1, 2, 3, 4, 5, 6],
        splitLine: {
          show: true
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      tooltip: {},
      grid: {
        show: true,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      yAxis: {
        type: "value",
        axisLabel: {
          show: false
        },
        max: result.data.totalMemory
      },
      series: [
        {
          name: "内存使用",
          data: this.arr,
          type: "line"
        }
      ]
    });

    setInterval(() => {
      this.resetChart();
    }, 1000);

    window.onresize = () =>{
        this.myChart.resize()
    }
  },
  methods: {
    async resetChart() {
      const result = await getMemory(this.$store.state.token);
      this.arr.shift();
      this.arr.push(result.data.usedMemory);

      this.myChart.setOption({
        xAxis: {
          type: "category",
          data: [0, 1, 2, 3, 4, 5, 6],
          splitLine: {
            show: true
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        tooltip: {},
        grid: {
          show: true,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: false
          },
          max: result.data.totalMemory
        },
        series: [
          {
            name: "内存使用",
            data: this.arr,
            type: "line"
          }
        ]
      });
    }
  }
};
</script>

<style>
</style>