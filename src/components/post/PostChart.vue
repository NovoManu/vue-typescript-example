<template>
  <v-card flat height="100%">
    <div class="postChart" v-if="mostPopularTags.length">
      <DoughnutChart :chartData="chartData" />
    </div>
    <div class="postChart__placeholder d-flex align-center" v-else>
      <div class="text-xs-center">
        <v-icon large color="primary">add_to_photos</v-icon>
        <div class="body-2">No any tags found</div>
      </div>
    </div>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CommentsModule } from '@/common-js/modules'
import DoughnutChart from '@/components/charts/ChartDoughnutChart.vue'

@Component({
  components: {
    DoughnutChart
  }
})
export default class PostChart extends Vue {
  @Prop({ required: true }) postId!: number
  @CommentsModule.Getter('mostPopularTags') tags!: any
  get mostPopularTags() {
    return this.tags(this.postId, 3)
  }
  get chartData(): object | null {
    return {
      datasets: [
        {
          backgroundColor: [
            'rgba(173,20,87,0.8)',
            'rgba(255,193,7,0.8)',
            'rgb(0,188,212,0.8)'
          ],
          data: this.mostPopularTags.map(tag => tag.count)
        }
      ],
      labels: this.mostPopularTags.map(tag => tag.key)
    }
  }
}
</script>
