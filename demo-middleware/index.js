import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers'
import { logger, crashReporter } from './middleware/index'

const newCreateStore = (initState) => {
  // 返回一个创建好的 store
  return createStore(
    todoApp,
    initState,
    // store enhancer
    applyMiddleware(logger, crashReporter)
  )
}

const store = newCreateStore();

let rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
