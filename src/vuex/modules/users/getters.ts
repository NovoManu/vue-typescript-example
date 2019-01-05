import { GetterTree } from 'vuex'
import { RootState } from '../../types'
import { UsersState } from './interfaces'
import groupBy from 'lodash/groupBy'

export const getters: GetterTree<UsersState, RootState> = {
  users: (state: UsersState): object[] => state.users,
  userById: (state: UsersState): object => id => {
    const users = groupBy(state.users, 'id')
    return users[id] ? users[id][0] : {}
  }
}
