<template>
  <v-list dense two-line>
    <v-subheader class="text-uppercase text--primary">
      Latest Stories
    </v-subheader>
    <PostComponent v-for="post in latestPosts" :key="post.id" :post="post" />
  </v-list>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PostsModule } from '@/common-js/modules'
import PostComponent from './DefaultLayoutSidebarLatestStoriesPost.vue'

@Component({
  components: {
    PostComponent
  }
})
export default class DefaultLayoutSidebarLatestStories extends Vue {
  @PostsModule.Getter('latestPosts') posts!: any
  get latestPosts() {
    return this.posts(5)
  }
}
</script>
