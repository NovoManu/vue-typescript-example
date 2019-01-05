import { ActionTree } from 'vuex'
import { UsersState } from './interfaces'
import { RootState } from '@/vuex/types'
import { httpGetRequest } from '@/vuex/modules/common-js/api-requests'
import { FETCH_USERS } from './mutations-types'

export const actions: ActionTree<UsersState, RootState> = {
  fetchUsers({ commit }) {
    httpGetRequest('users/').then(users => {
      commit(
        FETCH_USERS,
        users.map((user: any) =>
          (({ id, name, phone }) => ({ id, name, phone }))(user)
        )
      )
    })
  }
}
