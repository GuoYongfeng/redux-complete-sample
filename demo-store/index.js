import { createStore } from 'redux'

// reducer
const todos = (state = [''], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign([], state, [action.text]);
    default:
      return state;
  }
}

let store = createStore(todos, [ 'Use Redux' ])

// action creator
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

const handleChange =  () => {
  console.log(store.getState());
}

let unsubscribe = store.subscribe(handleChange)

handleChange()

// dispatch
store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))
