import { combineReducers } from 'redux'

export default function reducer (state = {
  items: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_AUTHOR':
      return {
        ...state,
        fetching: true
      }
    case 'FETCH_AUTHOR_REJECTED':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case 'FETCH_AUTHOR_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    default:
      break
  }

  return state
}
