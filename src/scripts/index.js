import '../styles/index.scss'
import 'jquery';
import 'bootstrap-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {applyMiddleware, createStore, compose} from "redux"
import {createLogger} from 'redux-logger'

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'

import {ConnectedRouter, push, routerMiddleware} from 'react-router-redux'

import reducers from './reducers'
import App from './components/App'

const $app = document.getElementById('app')
const logger = createLogger()
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(promise(), thunk, routerMiddleware(history))

let store = createStore(reducers, composeEnhancers(middleware))

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </ConnectedRouter>
</Provider>, $app)
