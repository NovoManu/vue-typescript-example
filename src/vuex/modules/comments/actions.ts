import { ActionTree } from 'vuex'
import { CommentsState, Comment } from './interfaces'
import { RootState } from '@/vuex/types'
import { httpGetRequest } from '@/vuex/modules/common-js/api-requests'
import { FETCH_COMMENTS } from './mutations-types'

export const actions: ActionTree<CommentsState, RootState> = {
  fetchComments({ commit }) {
    httpGetRequest('comments/').then((comments: Comment[]) => {
      commit(FETCH_COMMENTS, comments)
    })
  }
}
