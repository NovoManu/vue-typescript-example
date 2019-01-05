<template>
  <v-card hover flat class="mb-1">
    <v-card-title>
      <div class="subheading text--primary">{{ comment.email }}</div>
    </v-card-title>
    <v-card-text> {{ comment.body }} </v-card-text>
    <v-card-actions>
      <v-btn flat @click="prependMessageText">
        <v-icon>reply</v-icon>
        Reply
      </v-btn>
      <div v-if="comment.tags">
        <TagComponent
          v-for="(tag, index) in comment.tags"
          :key="index"
          :index="index"
          :tag="tag"
        />
      </div>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Comment } from '@/vuex/modules/comments/interfaces'
import { CommentsModule } from '@/common-js/modules'
import TagComponent from '@/components/common-UI/TagComponent.vue'

@Component({
  components: {
    TagComponent
  }
})
export default class PostCommentsItem extends Vue {
  @Prop({ required: true }) comment!: Comment
  @CommentsModule.Mutation('comments/SET_NEW_COMMENT_TEXT') setText!: any
  @CommentsModule.State(state => state.newCommentText) messageText
  prependMessageText() {
    const text = `@[${this.comment.email}] ${this.messageText}`
    this.setText(text)
    window.scrollTo(0, 0)
  }
}
</script>
