<template>
  <div>
    <CommentComponent
      v-for="comment in slicedComments"
      :key="comment.id"
      :comment="comment"
    />
    <ScrollObserver
      :dataLength="postComments.length"
      :uploadedDataLength="slicedComments.length"
      @uploadChunk="uploadChunk"
    />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CommentsModule } from '@/common-js/modules'
import CommentComponent from './PostCommentsItem.vue'
import ScrollObserver from '@/components/common-UI/ScrollObserver.vue'

@Component({
  components: {
    CommentComponent,
    ScrollObserver
  }
})
export default class PostComments extends Vue {
  chunk: number = 3
  noLoading: boolean = false
  @Prop({ required: true }) postId!: number
  @CommentsModule.Getter comments!: any
  get postComments() {
    return this.comments(this.postId) || []
  }
  get slicedComments() {
    return this.postComments.slice(0, this.chunk)
  }
  uploadChunk() {
    this.chunk += 1
  }
}
</script>
