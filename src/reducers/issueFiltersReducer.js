import { combineReducers } from 'redux'

export default function reducer (state = {
  activeIssueState: 'open',
  openedIssueFilterPopup: '',
  issueFilterInputText: '',
  selectedIssueAuthor: '',
  selectedIssueLabels: []
}, action) {
  switch (action.type) {
    case 'CHANGE_ACTIVE_ISSUE_STATE':
      return {
        ...state,
        activeIssueState: action.payload
      }
    case 'CHANGE_OPENED_ISSUE_FILTER_POPUP':
      return {
        ...state,
        openedIssueFilterPopup: action.payload
      }
    case 'CHANGE_ISSUE_FILTER_INPUT_TEXT':
      return {
        ...state,
        issueFilterInputText: action.payload
      }
    case 'CHANGE_SELECTED_ISSUE_AUTHOR':
      return {
        ...state,
        selectedIssueAuthor: state.selectedIssueAuthor === action.payload ? '' : action.payload
      }
    case 'CHANGE_SELECTED_ISSUE_LABELS':
      let newSelectedIssueLabels = [...state.selectedIssueLabels]

      if (newSelectedIssueLabels.includes(action.payload)) {
        newSelectedIssueLabels = newSelectedIssueLabels.filter(label => label !== action.payload)
      } else {
        newSelectedIssueLabels.push(action.payload)
      }

      return {
        ...state,
        selectedIssueLabels: newSelectedIssueLabels
      }
    default:
      break
  }

  return state
}
