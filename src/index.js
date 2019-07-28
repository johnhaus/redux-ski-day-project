import expect from 'expect'
import storeFactory from './store'

import {
  addDay,
  removeDay,
  setGoal,
  addError,
  clearError,
  changeSuggestions,
  clearSuggestions
} from './actions'

const store = storeFactory()

store.dispatch(
  addDay("Heavenly", "2019-02-01")
)

store.dispatch(
  removeDay("2019-02-01")
)

store.dispatch(
  setGoal(55)
)

// add error
store.dispatch(
  addError("something went wrong")
)

expect(store.getState().errors)
  .toEqual(["something went wrong"])

console.log(`
  addError() Action Creator Works!!!
`)

// clear error
store.dispatch(
  clearError(0)
)

expect(store.getState().errors)
  .toEqual([])

console.log(`
  clearError() Action Creator Works!!!
`)

// change suggestions
store.dispatch(
  changeSuggestions(['One', 'Two', 'Three'])
)

expect(store.getState().resortNames.suggestions)
  .toEqual(['One', 'Two', 'Three'])

console.log(`
  changeSuggestions() Action Creator Works!!!
`)

// clear suggestions
store.dispatch(clearSuggestions())

expect(store.getState().resortNames.suggestions)
  .toEqual([])

console.log(`
  clearSuggestions() Action Creator Works!!!
`)
