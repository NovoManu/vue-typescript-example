<template>
  <default-layout>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md7 v-if="selectedPost">
          <!--post-->
          <PostContent :post="selectedPost" />
          <!--ad-comment-->
          <CommentForm :post="selectedPost" />
        </v-flex>
        <v-flex xs12 md5> <PostChart :postId="selectedPost.id" /> </v-flex>
        <v-flex xs12>
          <!--all-comments-->
          <CommentsComponent :postId="selectedPost.id" />
        </v-flex>
      </v-layout>
    </v-container>
  </default-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'
import { Post } from '@/vuex/modules/posts/interfaces'
import { PostsModule } from '@/common-js/modules'
import PostContent from '@/components/post/PostContent.vue'
import CommentForm from '@/components/post/PostCommentForm.vue'
import CommentsComponent from '@/components/post/PostComments.vue'
import PostChart from '@/components/post/PostChart.vue'

@Component({
  components: {
    DefaultLayout,
    PostContent,
    CommentForm,
    CommentsComponent,
    PostChart
  }
})
export default class PostComponent extends Vue {
  @PostsModule.Getter('selectedPost') post!: Post
  @PostsModule.Getter postById!: any
  get selectedPost() {
    return this.post || this.findPost() || false
  }
  findPost() {
    const id: number = parseInt(this.$route.params.id)
    if (id) return this.postById(id)
    return false
  }
}
</script>
