import { MutationTree } from 'vuex'
import { UsersState, User } from './interfaces'
import { FETCH_USERS } from './mutations-types'

export const mutations: MutationTree<UsersState> = {
  [FETCH_USERS](state, users: User[]) {
    state.users = users
  }
}
