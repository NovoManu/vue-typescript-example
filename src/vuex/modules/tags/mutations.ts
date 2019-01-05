import { MutationTree } from 'vuex'
import { TagsState } from './interfaces'
import { CREATE_TAGS } from './mutations-types'

export const mutations: MutationTree<TagsState> = {
  [CREATE_TAGS](state, tags: string[]) {
    tags = tags.filter(
      (tag: string) => !state.tags.find((t: string) => t === tag)
    )
    state.tags = [...state.tags, ...tags]
  }
}
