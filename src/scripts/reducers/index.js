import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import theme from './theme'

const reducers = combineReducers({
  theme,
  router: routerReducer
})

export default reducers
