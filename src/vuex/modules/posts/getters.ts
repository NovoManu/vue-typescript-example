import { GetterTree } from 'vuex'
import { RootState } from '../../types'
import { PostsState, Post } from './interfaces'
import groupBy from 'lodash/groupBy'

export const getters: GetterTree<PostsState, RootState> = {
  posts: (state: PostsState): Post[] => {
    if (!state.search) return state.posts
    return state.posts.filter(
      (post: Post) =>
        post.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
    )
  },
  postById: (state: PostsState) => (id: number) => {
    const posts = groupBy(state.posts, 'id')
    return posts[id] ? posts[id][0] : {}
  },
  test: (state: PostsState) => {
    return groupBy(state.posts, 'id')
  },
  selectedPost: (state: PostsState): Post | null => state.selectedPost,
  latestPosts: (state: PostsState) => (number: number): Post[] =>
    state.posts.slice(-Math.abs(number))
}
