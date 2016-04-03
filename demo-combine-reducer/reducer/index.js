import { combineReducers } from 'redux'
import todos from './todos.js'
import counter from './counter.js'

export default combineReducers({
  todos,
  counter
})
