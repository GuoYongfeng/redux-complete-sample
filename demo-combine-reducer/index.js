import { createStore } from 'redux'
import reducer from './reducer/index.js'

let store = createStore(reducer)
console.log('当前的 state :', store.getState())

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
store.dispatch({
  type: 'INCREMENT',
})
console.log('改变后的 state :', store.getState())
