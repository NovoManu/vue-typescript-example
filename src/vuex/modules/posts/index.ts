import { Module } from 'vuex'
import { RootState } from '@/vuex/types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { PostsState } from './interfaces'

const state = {
  posts: [],
  selectedPost: null,
  search: ''
}
export const posts: Module<PostsState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
