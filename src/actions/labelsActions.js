import axios from 'axios'

export function fetchLabels () {
  return dispatch => {
    dispatch({type: 'FETCH_LABELS'})

    axios
      .get('https://api.github.com/repos/facebook/react/labels')
      .then(response => {
        dispatch({type: 'FETCH_LABELS_FULFILLED', payload: response.data})
      })
      .catch(error => {
        dispatch({type: 'FETCH_LABELS_REJECTED', payload: error})
      })
  }
}
