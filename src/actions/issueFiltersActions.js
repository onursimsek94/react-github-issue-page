export function changeIssueState (state) {
  return {type: 'CHANGE_ACTIVE_ISSUE_STATE', payload: state}
}

export function changeOpenedIssueFilterPopup (popup) {
  return {type: 'CHANGE_OPENED_ISSUE_FILTER_POPUP', payload: popup}
}

export function changeIssueFilterInputText (text) {
  return {type: 'CHANGE_ISSUE_FILTER_INPUT_TEXT', payload: text}
}

export function changeSelectedIssueAuthor (author) {
  return {type: 'CHANGE_SELECTED_ISSUE_AUTHOR', payload: author}
}

export function changeSelectedIssueLabels (label) {
  return {type: 'CHANGE_SELECTED_ISSUE_LABELS', payload: label}
}
