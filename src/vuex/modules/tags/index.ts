import { Module } from 'vuex'
import { RootState } from '@/vuex/types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { TagsState } from './interfaces'

const state = {
  tags: []
}
export const tags: Module<TagsState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
