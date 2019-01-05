import { ActionTree } from 'vuex'
import { ApiCallsState } from './interfaces'
import { RootState } from '@/vuex/types'

export const actions: ActionTree<ApiCallsState, RootState> = {
  initialApiCalls({ dispatch }) {
    dispatch('users/fetchUsers', null, { root: true })
    dispatch('posts/fetchPosts', null, { root: true })
    dispatch('comments/fetchComments', null, { root: true })
  }
}
