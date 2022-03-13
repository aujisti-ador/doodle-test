import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
    blogPostReducer,
    blogPostDetailsReducer
} from './reducers/blogPostReducers.js'
import initialState from './initialState'

const reducer = combineReducers({
    blogPost: blogPostReducer,
    blogPostDetails: blogPostDetailsReducer
})

const middleware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store