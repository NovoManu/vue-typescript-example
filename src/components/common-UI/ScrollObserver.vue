<template>
  <v-flex xs12 d-flex justify-center v-if="dataLoadingInProgress">
    <v-progress-circular indeterminate color="primary" class="my-3" />
  </v-flex>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ScrollObserver extends Vue {
  dataLoadingInProgress: boolean = false
  listener: any = null
  @Prop({ required: true }) dataLength!: boolean
  @Prop({ required: true }) uploadedDataLength!: boolean
  mounted() {
    this.observeScroll()
  }
  observeScroll(): void {
    window.addEventListener('scroll', this.checkScreenEdge)
  }
  checkScreenEdge(): void {
    if (
      window.outerHeight + window.scrollY > document.body.clientHeight &&
      !this.dataLoadingInProgress
    ) {
      this.uploadPostsChunk()
    }
  }
  checkAllDataUploaded(): boolean {
    return this.uploadedDataLength >= this.dataLength
  }
  uploadPostsChunk() {
    if (this.checkAllDataUploaded()) {
      window.removeEventListener('scroll', this.checkScreenEdge)
      return false
    }
    this.dataLoadingInProgress = true
    return new Promise(resolve => {
      resolve(
        setTimeout(() => {
          this.$emit('uploadChunk')
          this.dataLoadingInProgress = false
        }, 1000)
      )
    })
  }
}
</script>
