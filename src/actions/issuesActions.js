import axios from 'axios'

export function fetchIssues () {
  return dispatch => {
    dispatch({type: 'FETCH_ISSUES'})

    axios
      .get('https://api.github.com/repos/facebook/react/issues')
      .then(response => {
        dispatch({type: 'FETCH_ISSUES_FULFILLED', payload: response.data})
      })
      .catch(error => {
        dispatch({type: 'FETCH_ISSUES_REJECTED', payload: error})
      })
  }
}

export function getIssue (id) {
  return {type: 'GET_ISSUE', payload: id}
}
