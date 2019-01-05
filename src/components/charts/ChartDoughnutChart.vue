<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Most popular tags'
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          mode: 'label',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          titleFontColor: 'rgba(0, 0, 0, 1)',
          footerFontColor: 'rgba(0, 0, 0, 1)',
          bodyFontColor: 'rgba(0, 0, 0, 0.8)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1,
          displayColors: false
        }
      }
    }
  },
  props: {
    chartData: {
      require: true,
      default: () => []
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData: {
      handler(data) {
        if (data) this.renderChart(data, this.options)
      }
    }
  }
}
</script>
