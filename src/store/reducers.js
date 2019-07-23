import C from '../constants'

// set default goal to 10
export const goal = (state=10, action) => {

  if (action.type === C.SET_GOAL) {
    // make sure state is a number with parseInt
    return parseInt(action.payload)
  } else {
    return state
  }

}
