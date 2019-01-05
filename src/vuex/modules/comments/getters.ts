import { GetterTree } from 'vuex'
import { RootState } from '../../types'
import { CommentsState } from './interfaces'
import lodash from 'lodash'

export const getters: GetterTree<CommentsState, RootState> = {
  comments: (state: CommentsState) => (postId: number) => {
    const comments = lodash.groupBy(state.comments, 'postId')
    return comments[postId] ? comments[postId].reverse() : []
  },
  commentsArrayLength: (state: CommentsState) => state.comments.length,
  mostPopularTags: (state: CommentsState, getters) => (
    postId: number,
    numberOfTags: number
  ) => {
    const comments = getters.comments(postId)
    const tags = comments
      .filter(comment => comment.tags)
      .map(comment => comment.tags)
      .reduce((acc, cur) => [...acc, ...cur], [])
    const groupedTags = lodash.groupBy(tags)
    return (
      Object.keys(groupedTags)
        .map(key => {
          return {
            key,
            count: groupedTags[key].length
          }
        })
        .sort((a, b) => a.count - b.count)
        .reverse()
        .slice(0, numberOfTags) || []
    )
  }
}
