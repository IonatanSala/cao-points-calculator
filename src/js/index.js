import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import caoApp from './reducers/index'
import App from "./components/App"


let store = createStore(caoApp)

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)
