import { Module } from 'vuex'
import { RootState } from '@/vuex/types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { CommentsState } from './interfaces'

const state = {
  comments: [],
  newCommentText: ''
}
export const comments: Module<CommentsState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
