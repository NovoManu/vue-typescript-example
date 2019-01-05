import { MutationTree } from 'vuex'
import { CommentsState, Comment } from './interfaces'
import {
  FETCH_COMMENTS,
  SET_NEW_COMMENT_TEXT,
  CREATE_COMMENT
} from './mutations-types'

export const mutations: MutationTree<CommentsState> = {
  [FETCH_COMMENTS](state, comments: Comment[]) {
    state.comments = comments
  },
  [CREATE_COMMENT](state, comment: Comment) {
    state.comments = [...state.comments, comment]
    state.newCommentText = ''
  },
  [SET_NEW_COMMENT_TEXT](state, text: string) {
    state.newCommentText = text
  }
}
