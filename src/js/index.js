import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import caoApp from './reducers/index'

let store = createStore(caoApp)
console.log(store.getState())
const Test = () => (
  <h1>It's working</h1>
)

render(<Test />, document.getElementById('root'))
