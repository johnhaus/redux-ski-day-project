import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux'

// store needs at least 1 argument- the reducer
// function used by the store
// sending initialState will load initialState file
const store = createStore(appReducer, initialState)

// to see the state
console.log('initial state', store.getState())

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2018-12-23",
    "powder": false,
    "backcountry": true
  }
})

console.log('next state', store.getState())
