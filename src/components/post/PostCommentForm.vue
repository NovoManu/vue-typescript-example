<template>
  <v-card hover class="mt-3">
    <v-toolbar card color="primary" dark>
      <v-toolbar-title>Add A New Comment</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="createNewComment"> <v-icon>send</v-icon> </v-btn>
    </v-toolbar>
    <v-form>
      <!--selected-tags-->
      <div class="pa-2">
        <TagComponent
          v-for="(tag, index) in tags"
          :tag="tag"
          :index="index"
          :key="index"
        />
      </div>
      <TagsComponent :tags="rawTagsString" @setTags="setTags" />
      <v-divider />
      <MessageComponent />
    </v-form>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TagsComponent from './PostCommentFormTags.vue'
import MessageComponent from './PostCommentFormMessage.vue'
import TagComponent from '@/components/common-UI/TagComponent.vue'
import { CommentsModule, TagsModule } from '@/common-js/modules'
import { Comment } from '@/vuex/modules/comments/interfaces'
import { Post } from '@/vuex/modules/posts/interfaces'

@Component({
  components: {
    TagComponent,
    TagsComponent,
    MessageComponent
  }
})
export default class PostCommentForm extends Vue {
  private tags: string[] = []
  private rawTagsString: string = ''
  @Prop({ required: true }) post!: Post
  @TagsModule.Mutation('tags/CREATE_TAGS') createTags!: any
  @CommentsModule.Mutation('comments/CREATE_COMMENT') createComment!: any
  @CommentsModule.Getter commentsArrayLength!: number
  @CommentsModule.State(state => state.newCommentText) text!: string
  createNewComment() {
    const user = JSON.parse(localStorage.getItem('testUser') || '')
    const comment: Comment = {
      id: this.commentsArrayLength,
      postId: this.post.id,
      name: this.post.title,
      email: `${user.name}@gmail.com`,
      body: this.text,
      tags: this.tags
    }
    this.createComment(comment)
    this.createTags(this.tags)
    this.tags = []
    this.rawTagsString = ''
  }
  setTags(string: string) {
    this.rawTagsString = string
    if (string) {
      this.tags = string
        .replace(/[.,/!$%^&*;:{}=\-_`~()]/g, '')
        .split('#')
        .map((tag: string) => tag.trim())
        .filter(tag => tag.length)
    } else this.tags = []
  }
}
</script>
