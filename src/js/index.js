import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { addSubject } from './actions/index'
import caoApp from './reducers/index'
import App from "./components/App"


let store = createStore(caoApp)
console.log(store.getState());
store.subscribe(function() {
  console.log(store.getState());
});
store.dispatch(addSubject("Hello"))
store.dispatch(addSubject("Hello again"))

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)
