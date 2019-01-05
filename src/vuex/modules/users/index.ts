import { Module } from 'vuex'
import { RootState } from '@/vuex/types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { UsersState } from './interfaces'

const state = {
  users: []
}
export const users: Module<UsersState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
