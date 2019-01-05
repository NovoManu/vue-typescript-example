import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import modules from './modules'

Vue.use(Vuex)
const store: StoreOptions<RootState> = {
  state: {
    version: '0.1.0'
  },
  modules
}

export default new Vuex.Store(store)
