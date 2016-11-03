import axios from 'axios'

export function getFoodTrucks () {
  return dispatch => {
    dispatch({type: 'FETCH_FOODTRUCK'})
    axios.get(
      '/api/foodTruck'
    )
    .then(resp => dispatch({type: 'FETCH_FOODTRUCK_FULFILLED', payload: resp.data}))
    .catch(err => dispatch({type: 'FETCH_FOODTRUCK_REJECTED', payload: err}))
  }
}
