import axios from 'axios'

export function fetchAuthor () {
  return dispatch => {
    dispatch({type: 'FETCH_AUTHOR'})

    axios
      .get('https://api.github.com/repos/facebook/react/assignees')
      .then(response => {
        dispatch({type: 'FETCH_AUTHOR_FULFILLED', payload: response.data})
      })
      .catch(error => {
        dispatch({type: 'FETCH_AUTHOR_REJECTED', payload: error})
      })
  }
}
