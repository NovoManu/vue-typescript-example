<template>
  <div>
    <v-list-tile v-ripple @click="selectPost">
      <v-list-tile-content>
        <v-list-tile-title> {{ post.title }} </v-list-tile-title>
        <v-list-tile-sub-title> {{ post.body }} </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Post } from '@/vuex/modules/posts/interfaces.ts'
import { PostsModule } from '@/common-js/modules'

@Component
export default class DefaultLayoutSidebarLatestStoriesPost extends Vue {
  @Prop({ required: true }) post!: Post
  @PostsModule.Mutation('posts/SET_SELECTED_POST') setSelectedPost!: any
  selectPost() {
    this.setSelectedPost(this.post)
    const name = this.post.title.split(' ').join('_')
    const id = this.post.id.toString()
    this.$router.push({ name: 'SelectedPost', params: { id, name } })
  }
}
</script>
