import { combineReducers } from 'redux'

export default function reducer (state = {
  items: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_ISSUES':
      return {
        ...state,
        fetching: true
      }
    case 'FETCH_ISSUES_REJECTED':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case 'FETCH_ISSUES_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    case 'GET_ISSUE':
      return {
        ...state,
        items: state.items.find(issue => issue.id === action.payload)
      }
    default:
      break
  }

  return state
}
