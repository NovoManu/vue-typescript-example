import { GetterTree } from 'vuex'
import { RootState } from '../../types'
import { TagsState } from './interfaces'

export const getters: GetterTree<TagsState, RootState> = {
  tags: (state: TagsState): string[] => state.tags,
  tagByName: (state: TagsState) => (name: string) => {
    return state.tags.find(tag => tag === name)
  },
  lastTags: (state: TagsState) => (quantity: number) =>
    state.tags.reverse().slice(0, quantity) || []
}
