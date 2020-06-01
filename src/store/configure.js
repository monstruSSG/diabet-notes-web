import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'

import reducers from './reducers/index'

//const middleware = applyMiddleware(thunk, logger)
const middleware = applyMiddleware(thunk)

const rootReducer = (state, action) => {
    return reducers(state, action)
}

const store = createStore(
    rootReducer,
    compose(middleware)
)

export default store