import { ActionTree } from 'vuex'
import { PostsState, Post } from './interfaces'
import { RootState } from '@/vuex/types'
import { httpGetRequest } from '@/vuex/modules/common-js/api-requests'
import { FETCH_POSTS } from './mutations-types'

export const actions: ActionTree<PostsState, RootState> = {
  fetchPosts({ commit }) {
    httpGetRequest('posts/').then((posts: Post[]) => {
      commit(FETCH_POSTS, posts)
    })
  }
}
