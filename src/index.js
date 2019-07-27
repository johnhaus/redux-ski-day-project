import storeFactory from './store'
import { addDay, removeDay, setGoal } from './actions'

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
