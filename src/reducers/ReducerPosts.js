import _ from 'lodash'
import { FETCH_POSTS, FETCH_SINGLE_POST } from '../actions'

const ReducerPosts = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, `id`)
    case FETCH_SINGLE_POST:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data
      }
    case DELETE_POST:
      return _.omit(state, action.payload)
    default:
      return state
  }
}

export default ReducerPosts