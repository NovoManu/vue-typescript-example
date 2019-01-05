<template>
  <v-flex xs12>
    <HomePostItem
      v-for="post in chunkedPosts"
      :key="post.id"
      :user="user(post.userId).name"
      :post="post"
    />
    <ScrollObserver
      :dataLength="posts.length"
      :uploadedDataLength="chunkedPosts.length"
      @uploadChunk="uploadChunk"
    />
  </v-flex>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PostsModule, UsersModule } from '@/common-js/modules'
import { Post } from '@/vuex/modules/posts/interfaces.ts'
import { User } from '@/vuex/modules/users/interfaces.ts'
import HomePostItem from './HomePostItem.vue'
import ScrollObserver from '@/components/common-UI/ScrollObserver.vue'

@Component({
  components: {
    HomePostItem,
    ScrollObserver
  }
})
export default class HomePostsList extends Vue {
  chunk: number = 5
  @PostsModule.Getter posts!: Post[]
  @UsersModule.Getter('userById') user!: User
  get chunkedPosts() {
    return this.posts.slice(0, this.chunk)
  }
  uploadChunk() {
    this.chunk += 5
  }
}
</script>
