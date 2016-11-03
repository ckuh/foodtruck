export default function reducer (state = {
  list: [],
  fetching: false,
  fetched: false,
  error: ''
}, action) {
  switch (action.type) {
    case 'FETCH_FOODTRUCK': {
      return { ...state, fetching: true }
    }
    case 'FETCH_FOODTRUCK_REJECTED': {
      return { ...state, fetching: false, error: action.payload }
    }
    case 'FETCH_FOODTRUCK_FULFILLED': {
      return { ...state, fetched: true, list: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}
