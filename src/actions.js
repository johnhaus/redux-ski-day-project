import C from './constants'

// three different ways to write fuctions below, all do the same thing
export function addDay(resort, date, powder=false, backcountry=false) {

  // add any application logic here
  return {
    type: C.ADD_DAY,
    payload: {resort, date, powder, backcountry}
  }

}

export const removeDay = function(date) {
  return {
    type: C.REMOVE_DAY,
    payload: date
  }
}

// using parenthesis to return an object
export const setGoal = (goal) =>
  ({
    type: C.SET_GOAL,
    payload: goal
  })

export const addError = (message) =>
  ({
    type: C.ADD_ERROR,
    payload: message
  })

export const clearError = (index) =>
  ({
    type: C.CLEAR_ERROR,
    payload: index
  })

export const changeSuggestions = (suggestion) =>
  ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestion
  })

export const clearSuggestions = () =>
  ({
    type: C.CLEAR_SUGGESTIONS,
  })
