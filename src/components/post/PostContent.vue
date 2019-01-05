<template>
  <div class="post-selected">
    <h1 class="headline text--primary mb-3">{{ post.title }}</h1>
    <p
      class="body-2 font-weight-light grey--text text--darken-3 text-xs-justify"
    >
      {{ post.body }}
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Post } from '@/vuex/modules/posts/interfaces'

@Component
export default class PostContent extends Vue {
  @Prop({ required: true }) post!: Post
}
</script>
