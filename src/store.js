import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
    blogPostReducer,
    blogPostDetailsReducer,
    getFavouritePostReducer
} from './reducers/blogPostReducers.js'
import initialState from './initialState'

const reducer = combineReducers({
    blogPost: blogPostReducer,
    blogPostDetails: blogPostDetailsReducer,
    favouritePost: getFavouritePostReducer
})

const middleware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store