export interface PostsState {
  posts: Post[]
  selectedPost: Post | null
  search: string
}

export interface Post {
  id: number
  userId: number
  title: string
  body: any
}
