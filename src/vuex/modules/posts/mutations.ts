import { MutationTree } from 'vuex'
import { PostsState, Post } from './interfaces'
import {
  FETCH_POSTS,
  SET_SELECTED_POST,
  CLEAR_SELECTED_POST,
  SET_POSTS_SEARCH
} from './mutations-types'

export const mutations: MutationTree<PostsState> = {
  [FETCH_POSTS](state, posts: Post[]) {
    state.posts = posts
  },
  [SET_SELECTED_POST](state, post: Post) {
    state.selectedPost = post
  },
  [CLEAR_SELECTED_POST](state) {
    state.selectedPost = null
  },
  [SET_POSTS_SEARCH](state, query) {
    state.search = query
  }
}
