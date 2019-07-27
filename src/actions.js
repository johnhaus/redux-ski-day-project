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
