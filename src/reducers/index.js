import { combineReducers } from 'redux'

import issues from './issuesReducer'
import author from './authorReducer'
import labels from './labelsReducer'
import filters from './issueFiltersReducer'

export default combineReducers({
  issues,
  author,
  labels,
  filters
})
