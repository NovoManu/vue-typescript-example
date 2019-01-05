<template>
  <v-card hover class="ma-3" v-ripple @click="selectPost">
    <v-card-title>
      <div class="subheading text--primary">{{ post.title }}</div>
    </v-card-title>
    <v-card-text>
      <div>{{ post.body.substring(0, 200) }} ...</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <div class="font-italic">by {{ user }}</div>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Post } from '@/vuex/modules/posts/interfaces.ts'
import { User } from '@/vuex/modules/users/interfaces.ts'
import { PostsModule } from '@/common-js/modules'

@Component
export default class HomePostItem extends Vue {
  @Prop({ default: () => {}, required: true }) post!: Post
  @Prop({ type: String, default: 'Unknown User' }) user!: User
  @PostsModule.Mutation('posts/SET_SELECTED_POST') setSelectedPost!: any
  selectPost() {
    this.setSelectedPost(this.post)
    const name = this.post.title.split(' ').join('_')
    const id = this.post.id.toString()
    this.$router.push({ name: 'SelectedPost', params: { id, name } })
  }
}
</script>
