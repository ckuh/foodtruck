export default function reducer (state = {
  list: [],
  fetching: false,
  fetched: false,
  error: ''
}, action) {
  switch (action.type) {
    case 'FETCH_FOODTRUCK': {
      const newState = {}
      Object.assign(newState, state, {fetching: true})
      return newState
    }
    case 'FETCH_FOODTRUCK_REJECTED': {
      const newState = {}
      Object.assign(newState, state, {fetching: false, error: action.payload})
      return newState
    }
    case 'FETCH_FOODTRUCK_FULFILLED': {
      const newState = {}
      Object.assign(newState, state, {fetching: false, fetched: true, list: action.payload.data, filterProjList: action.payload.data})
      return newState
    }
    default: {
      return state
    }
  }
}
