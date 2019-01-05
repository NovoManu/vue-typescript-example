export interface CommentsState {
  comments: Comment[]
  newCommentText: string
}

export interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
  tags?: string[]
}
