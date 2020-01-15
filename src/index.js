import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Router} from 'react-router-dom'
import history from './history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TransactionReducer from './redux/reducers'

const store = createStore(TransactionReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>  
  </Provider>, document.getElementById('root'))
