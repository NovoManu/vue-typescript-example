<template>
  <v-textarea
    label="Message"
    :value="messageText"
    counter
    maxlength="120"
    full-width
    single-line
    @input="setText"
  />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CommentsModule } from '@/common-js/modules'

@Component
export default class PostCommentFormMessage extends Vue {
  @CommentsModule.Mutation('comments/SET_NEW_COMMENT_TEXT') setText!: any
  @CommentsModule.State(state => state.newCommentText) messageText!: string
}
</script>
