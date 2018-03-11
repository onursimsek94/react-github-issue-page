import { combineReducers } from 'redux'

export default function reducer (state = {
  items: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_LABELS':
      return {
        ...state,
        fetching: true
      }
    case 'FETCH_LABELS_REJECTED':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case 'FETCH_LABELS_FULFILLED':
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
